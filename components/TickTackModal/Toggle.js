import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';
import Wake from '../../icon/Wake.png';
import Sleep from '../../icon/Sleep.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageMode } from '../../states';

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

export default function Toggle() {
  // 토글을 전역상태의 모드로 바꾸고, 토글을 클릭 시 전역이 바뀌고 토글(째깍이) 위치가 바뀌어야 함.
  const [saveMode, setSaveMode] = useRecoilState(pageMode);
  const [mode, setMode] = useState({ mode: 'light' });

  const toggleMent =
    mode.mode === 'dark'
      ? '일어나... 버그 잡아야지'
      : '불 좀 꺼줄래? 내 버그 좀 보게';

  const toggleState = mode.mode === 'dark' ? true : false;

  const changeMode = () => {
    let stateChanged = toggleState ? { mode: 'light' } : { mode: 'dark' };
    setMode(stateChanged);
    setSaveMode(stateChanged);
  };

  useEffect(() => {
    if (saveMode.mode) {
      setMode({ ...saveMode });
    }
  }, []);

  return (
    <ToggleBtn onClick={changeMode}>
      <Ment>{toggleMent}</Ment>

      <Circle toggle={toggleState}>
        <Img
          src={mode.mode === 'dark' ? Sleep : Wake}
          width="46px"
          height="46px"
        />
      </Circle>
    </ToggleBtn>
  );
}
