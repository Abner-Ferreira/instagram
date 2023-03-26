import React from 'react';
import Login from '../Login';
import LoginPT from '../LoginPT';

// import { Container } from './styles';

function Tela() {
  return (
    <>
        <Login/>
        <LoginPT/>
        <Footer lingua={[pt, en]}/>
    </>
  );
}

export default Tela;