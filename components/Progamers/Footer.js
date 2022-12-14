import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from './Popup';

const Progamers_Footer = () => {
  const [popup, setPopup] = useState(false);

  const onClick = () => {
    setPopup(true);
  };

  return (
    <>
      <Footer_Container>
        <Button onClick={onClick}> 전송하기 </Button>
        {popup && <Popup open={popup} setPopup={setPopup} />}
      </Footer_Container>
    </>
  );
};

const Footer_Container = styled.div`
  height: 60px;
  width: 100vw;
  border-top: 2px solid rgb(23, 29, 41);
  display: flex;
  justify-content: end;
  align-items: center;
  background: rgb(30, 42, 54);
`;

const Button = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #206dff;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  margin-right: 20px;
  color: white;
  cursor: pointer;
  :hover {
    background: rgb(0, 73, 242);
  }
`;

export default Progamers_Footer;
