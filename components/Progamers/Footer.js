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
        <Button> 테마 변경 </Button>
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
`;

const Button = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #206dff;
  border-radius: 5px;
  width: 70px;
  height: 35px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    background: rgb(0, 73, 242);
  }
`;

export default Progamers_Footer;
