import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Popup from './Popup';

const Progamers_Footer = () => {
  const [user, getUser] = useState('');
  const [popup, setPopup] = useState({
    open: false,
    title: [],
    callback: false,
  });

  const onClick = (e) => {
    if (false) {
      setPopup({
        open: true,
        title: [' 전송되었습니다.'],
      });
    } else {
      setPopup({
        open: true,
        title: ['글자 수 500글자 이상입니다.', '글자 수를 줄여주세요.'],
      });
      return;
    }
  };

  const onClickButton = () => {
    axios.get('/api/user/get').then((res) => getUser(res));
  };
  return (
    <>
      <Footer_Container>
        <Button> 테마 변경 </Button>
        <Button onClick={onClick}> 전송하기 </Button>
        <Popup
          open={popup.open}
          setPopup={setPopup}
          // message={popup.message}
          title={popup.title}
          callback={popup.callback}
        />
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
