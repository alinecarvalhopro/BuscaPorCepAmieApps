import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {Colors} from '../../GlobalStyles/Colors/colors';
import {useState} from 'react';
import api from '../../services/api';
import {FormContainer} from './form.style';
import {Keyboard} from 'react-native';

interface IFormProps {
  address: IAddress
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>
}

export interface IAddress {
  pais: string;
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface FormInputs {
  cep: string;
}

const schema = yup.object().shape({
  cep: yup.string().required('O campo CEP é obrigatório'),
});

const Form = ({address, setAddress}: IFormProps) => {
  // const [address, setAddress] = useState<IAddress>({
  //   cep: '',
  //   logradouro: '',
  //   bairro: '',
  //   localidade: '',
  //   uf: '',
  // });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const handleGetAddress = async (data: FormInputs) => {
    try {
      setLoading(true);
      await schema.validate(data);

      const {data: responseData} = await api.get(`/${data.cep}/json/`);

      setAddress({
        pais: 'Brasil',
        cep: data.cep,
        logradouro: responseData.logradouro || '',
        bairro: responseData.bairro || '',
        localidade: responseData.localidade || '',
        uf: responseData.uf || '',
      });

      setError('');
      Keyboard.dismiss();
      reset();
    } catch (validationError) {
      if (validationError instanceof yup.ValidationError) {
        setError(validationError.message);
      } else {
        console.error(validationError);
        setError('Verifique o CEP e tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Controller
        control={control}
        render={({field}) => (
          <Input
            title="Digite aqui o CEP"
            placeholder="Ex: 00000000"
            onChange={event => {
              const text = event.nativeEvent.text;
              field.onChange(text);
              setError('');
            }}
            value={field.value}
            width="60%"
            margin="0 0 0 0"
            errorMessage={errors.cep?.message || error}
          />
        )}
        name="cep"
      />

      <Button
        title={isSubmitting ? '' : 'Buscar'}
        textAlign="center"
        width="35%"
        margin="0"
        backgroundcolor={Colors.yellow}
        onPress={handleSubmit(handleGetAddress)}
        loading={isSubmitting || loading}
      />
    </FormContainer>
  );
};

export default Form;
