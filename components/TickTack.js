import React, { useEffect, useState } from 'react';
import Sleep from '../icon/Sleep.png';
import SleepAngry from '../icon/SleepAngry.png';
import Wake from '../icon/Wake.png';
import WakeAngry from '../icon/WakeAngry.png';
import VeryAngry from '../icon/VeryAngry.png';
import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';
import Ballon from './TickTackModal/Ballon';
import { useRecoilState } from 'recoil';
import { pageMode } from '../states';
const angryMode = keyframes`
   0%{
    transform: scale(2);
    right : 10%;
    bottom : 10%;
    }
  80%{
    transform: scale(9);
    right : 50%;
    bottom : 50%
  }
  85%{
    transform : scale(9) rotate(30deg);
    right : 50%;
    bottom : 50%
  }
  90%{
    transform : scale(9) rotate(-60deg);
    right : 50%;
    bottom : 50%;
  }
  95%{
    transform : scale(9) rotate(60deg);
    right : 50%;
    bottom : 50%;
  }
  100%{
    transform : scale(9) rotate(30deg);
    right : 50%;
    bottom : 50%;
  }
`;

const Img = styled(Image)``;

const TickTackContainer = styled.div`
  position: fixed;
  right: 25px;
  bottom: 100px;
  ${({ anime }) =>
    anime &&
    css`
      animation: ${angryMode} 5s;
    `};
`;

export default function TickTack() {
  const [cilckCount, setClickCount] = useState(1);
  const [modalState, setModalState] = useState(false);
  // const [mode, setMode] = useState('dark');
  const [pageMode1, setPageMode1] = useRecoilState(pageMode);
  const [mode, setMode] = useState({ ...pageMode1 });

  useEffect(() => {
    setClickCount(1);
    setPageMode1({ ...mode });
  }, [mode]);

  // 다크 모드 로직
  const darkModeTickTack = () => {
    if (cilckCount < 5) {
      return (
        <Img
          src={Sleep}
          width={'100px'}
          height={'100px'}
          onClick={() => {
            setModalState(!modalState);
            setClickCount(cilckCount + 1);
          }}
        />
      );
    } else if (cilckCount >= 5 && cilckCount <= 9) {
      return (
        <Img
          src={SleepAngry}
          width={'120px'}
          height={'120px'}
          onClick={() => {
            setModalState(!modalState);
            setClickCount(cilckCount + 1);
          }}
        />
      );
    } else if (cilckCount === 10) {
      return <Img src={VeryAngry} width={'100px'} height={'100px'} />;
    }
  };

  // 라이트 모드 로직
  const LightModeTickTack = () => {
    if (cilckCount < 5) {
      return (
        <Img
          src={Wake}
          width={'100px'}
          height={'100px'}
          onClick={() => {
            setModalState(!modalState);
            setClickCount(cilckCount + 1);
          }}
        />
      );
    } else if (cilckCount >= 5 && cilckCount <= 9) {
      return (
        <Img
          src={WakeAngry}
          width={'120px'}
          height={'120px'}
          onClick={() => {
            setModalState(!modalState);
            setClickCount(cilckCount + 1);
          }}
        />
      );
    } else if (cilckCount >= 10) {
      return <Img src={VeryAngry} width={'100px'} height={'100px'} />;
    }
  };

  useEffect(() => {
    if (cilckCount >= 10) {
      setModalState(false);
      setTimeout(() => {
        setClickCount(1);
      }, 5000);
    }
  }, [cilckCount]);

  return (
    <>
      {/* mode는 전역상태로 관리 */}
      <Ballon
        right={cilckCount >= 5 ? '50px' : '40px'}
        bottom={cilckCount >= 5 ? '230px' : '210px'}
        show={modalState ? 'flex' : 'none'}
        mode={mode}
        setMode={setMode}
      />
      <TickTackContainer anime={cilckCount === 10 ? true : false}>
        {mode.mode === 'dark' ? darkModeTickTack() : LightModeTickTack()}
      </TickTackContainer>
    </>
  );
}
