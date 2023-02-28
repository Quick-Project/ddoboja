import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pageMode } from '../../states';
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
export default function Ballon({ bottom, right, show }) {
  const mode = useRecoilValue(pageMode);
  const MENT = {
    dark: [
      '버그 픽스하다 기절한 째깍이입니다.',
      '째깍이는 지금 기절 중',
      '↑라이트모드 켜기',
    ],
    light: [
      '하지만 버그가 터진 걸 모르는 째깍이',
      '째깍이는 지금 배포 홍보 중',
      '↑다크모드 켜기',
    ],
  };

  const [ment, setMent] = useState([...MENT.dark]);

  useEffect(() => {
    if (mode.mode === 'dark') {
      setMent([...MENT.dark]);
    } else {
      setMent([...MENT.light]);
    }
  }, [mode]);

  return (
    <>
      {
        <BallonDiv bottom={bottom} right={right} show={show}>
          <Title>{ment[1]}</Title>
          <div>{ment[0]}</div>
          <Toggle />
          <div>{ment[2]}</div>
        </BallonDiv>
      }
    </>
  );
}
