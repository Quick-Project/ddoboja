import React from 'react';
import styled from 'styled-components';
import Link from 'next/Link';

const SubmitButton = styled.button`
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 150px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
`;

const ButtonCP = () => {
  return (
    <>
      <SubmitButton>
        <Link href="/">메인화면으로 가기</Link>
      </SubmitButton>
    </>
  );
};

export default ButtonCP;
