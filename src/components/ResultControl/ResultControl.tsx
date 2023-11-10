import React from 'react';
import Clipboard from '@react-native-community/clipboard';
import {IAddress} from '../Form/Form';
import Button from '../Button/Button';
import {Colors} from '../../GlobalStyles/Colors/colors';
import {ResultControlContainer} from './resultControl.styled';

interface IResultControlProps {
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
  address: IAddress;
}

export const ResultControl = ({address, setAddress}: IResultControlProps) => {
  const copyToClipboard = () => {
    const addressText = `CEP: ${address.cep}\nLogradouro: ${address.logradouro}\nBairro: ${address.bairro}\nLocalidade: ${address.localidade}\nUF: ${address.uf}`;
    Clipboard.setString(addressText);
  };
  return (
    <ResultControlContainer>
      <Button
        title="Limpar"
        icon="bin"
        textAlign="center"
        width="47.5%"
        margin="0"
        backgroundcolor={Colors.orange}
        onPress={() =>
          setAddress({
            pais: '',
            cep: '',
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: '',
          })
        }
      />
      <Button
        title="Copiar"
        icon="copy"
        textAlign="center"
        width="47.5%"
        margin="0"
        color={Colors.white}
        backgroundcolor={Colors.ligthBlue}
        onPress={copyToClipboard}
      />
    </ResultControlContainer>
  );
};
