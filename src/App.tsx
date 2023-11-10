import React from 'react';
import Header from './components/Header/Header';
import {Display} from './GlobalStyles/Display/display.style';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Display>
      <Header />
      <Form />
    </Display>
  );
};

export default App;
