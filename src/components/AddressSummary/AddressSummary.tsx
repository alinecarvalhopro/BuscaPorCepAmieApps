import {IAddress} from '../Form/Form';
import Text from '../Text/Text';
import {textTypes} from '../Text/textTypes';
import {AddressSummaryContainer} from './addressSummary.style';

interface IAddressSummaryProps {
  address: IAddress;
}

const AddressSummary = ({address}: IAddressSummaryProps) => {
  return (
    <AddressSummaryContainer>
      {address.cep ? (
        <>
          <Text margin="0">Logradouro:</Text>
          <Text margin="0">{address.logradouro}</Text>
          <Text margin="8px 0 0 0">Bairro:</Text>
          <Text margin="0">{address.bairro}</Text>
          <Text margin="8px 0 0 0">Cidade:</Text>
          <Text margin="0">{address.localidade}</Text>
          <Text margin="8px 0 0 0">Estado:</Text>
          <Text margin="0">{address.uf}</Text>
          <Text margin="8px 0 0 0">Cep:</Text>
          <Text margin="0">{address.cep}</Text>
          <Text margin="8px 0 0 0" type={textTypes.SUB_TITLE_REGULAR}>
            País:
          </Text>
          <Text margin="0">{address.pais}</Text>
        </>
      ) : (
        <Text margin="0" type={textTypes.SUB_TITLE_REGULAR}>
          O endereço aparecerá aqui
        </Text>
      )}
    </AddressSummaryContainer>
  );
};

export default AddressSummary;
