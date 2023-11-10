import React, {useState} from 'react';
import Header from './components/Header/Header';
import {Display} from './GlobalStyles/Display/display.style';
import Form, {IAddress} from './components/Form/Form';
import AddressSummary from './components/AddressSummary/AddressSummary';
import {ResultControl} from './components/ResultControl/ResultControl';

const App = () => {
  const [address, setAddress] = useState<IAddress>({
    pais: '',
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
  });

  return (
    <Display>
      <Header />
      <Form address={address} setAddress={setAddress} />
      <AddressSummary address={address} />
      {address.cep ? (
        <ResultControl address={address} setAddress={setAddress} />
      ) : null}
    </Display>
  );
};

export default App;
