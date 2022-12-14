import React from 'react';
import Header from '../components/Progamers/Header';
import styled from 'styled-components';
import Progamers_Main from '../components/Progamers/Main';
import Progamers_Footer from '../components/Progamers/Footer';

const Progamers = () => {
  return (
    <>
      <Progamers_Container>
        <Header> </Header>
        <Progamers_Main> </Progamers_Main>
        <Progamers_Footer> </Progamers_Footer>
      </Progamers_Container>
    </>
  );
};

const Progamers_Container = styled.div`
  background: rgb(30, 42, 54);
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100vw;
  height: 100vh;
`;

export default Progamers;
