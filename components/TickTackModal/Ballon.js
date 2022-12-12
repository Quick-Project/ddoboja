import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const Title = styled.h4`
  color: #657088;
`;

const BallonDiv = styled.div`
  width: 350px;
  height: 270px;
  display: ${({ show }) => show || 'none'};
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: fixed;
  right: ${({ right }) => right || 0};
  bottom: ${({ bottom }) => bottom || 0};
  background: white;
  box-shadow: 0 0 15px 15px #dddddd;
  color: black;
  border-radius: 15px;
  padding: 12px 12.8px;
  &:after {
    border-top: 10px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    bottom: -10px;
    right: 30px;
  }
`;
export default function Ballon({ bottom, right, show, mode, setMode }) {
  const [ment, setMent] = useState('');
  const [ment2, setMent2] = useState('');
  const [ment3, setMent3] = useState('');
  useEffect(() => {
    if (mode.mode === 'dark') {
      setMent('버그 픽스하다 기절한 째깍이입니다.');
      setMent2('째깍이는 지금 기절 중');
      setMent3('↑라이트모드 켜기');
    } else {
      setMent('하지만 버그가 터진 걸 모르는 째깍이');
      setMent2('째깍이는 지금 배포 홍보 중');
      setMent3('↑다크모드 켜기');
    }
  }, [mode]);
  return (
    <>
      {
        <BallonDiv bottom={bottom} right={right} show={show}>
          <Title>{ment2}</Title>
          <div>{ment}</div>
          <Toggle mode={mode} setMode={setMode} />
          <div>{ment3}</div>
        </BallonDiv>
      }
    </>
  );
}
