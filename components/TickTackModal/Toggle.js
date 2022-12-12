import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';
import Wake from '../../icon/Wake.png';
import Sleep from '../../icon/Sleep.png';

const Ment = styled.div`
  font-size: 15px;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
`;
const ToggleBtn = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(240px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
const Img = styled(Image)``;

export default function Toggle({ mode, setMode }) {
  // 토글을 전역상태의 모드로 바꾸고, 토글을 클릭 시 전역이 바뀌고 토글(째깍이) 위치가 바뀌어야 함.
  const [ment, setMent] = useState('');
  const [bool, setBool] = useState(true);
  useEffect(() => {
    if (mode.mode === 'dark') {
      setMent('일어나... 버그 잡아야지');
      setBool(true);
    } else {
      setMent('불 좀 꺼줄래? 내 버그 좀 보게');
      setBool(false);
    }
  }, [mode]);

  const changeMode = () => {
    setMode((prev) => {
      if (prev.mode === 'dark') {
        return { mode: 'light' };
      } else {
        return { mode: 'dark' };
      }
    });
  };

  return (
    <ToggleBtn onClick={changeMode}>
      <Ment>{ment}</Ment>

      <Circle toggle={bool}>
        <Img
          src={mode.mode === 'dark' ? Sleep : Wake}
          width="46px"
          height="46px"
        />
      </Circle>
    </ToggleBtn>
  );
}
