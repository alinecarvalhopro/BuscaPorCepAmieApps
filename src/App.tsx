import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import {Display} from './GlobalStyles/Display/display.style';
import Form, { IAddress } from './components/Form/Form';
import AddressSummary from './components/AddressSummary/AddressSummary';

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
      <AddressSummary address={address}/>
    </Display>
  );
};

export default App;
