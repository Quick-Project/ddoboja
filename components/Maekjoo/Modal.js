import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { InputValue } from '../../states';
import { useRecoilValue } from 'recoil';
import useWordCheck from '../hook/useWordCheck';
import { errorMsg } from '../errorMsg';

const BlurBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);

  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #21303e;
  width: 1170px;
  height: 650px;

  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalText = styled.p`
  color: ${(props) => (props.props ? 'red' : 'white')};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  height: 52px;
  width: 160px;
  border-radius: 5px;
  border: none;
  margin: 10px;
  font-size: 18px;
`;
const wave = keyframes`
  0% {
     top: 0;
  } 
  20% { 
   top: -0.4rem; 
   } 
  40% {
  top: 0;
  } 
  60% {
    top: 0;
  } 
  80% {
  top: 0;
  } 
  100% { 
   top: 0;
  } 
`;

const StyledDiv = styled.div`
  color: white;
  text-align: center;
  font-size: 24px;
  span {
    animation: ${wave} 1.5s infinite;
    position: relative;
  }
  span:nth-of-type(1) {
    animation-delay: 0.1s;
  }
  span:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  span:nth-of-type(4) {
    animation-delay: 0.4s;
  }
  span:nth-of-type(5) {
    animation-delay: 0.5s;
  }
  span:nth-of-type(6) {
    animation-delay: 0.6s;
  }
  span:nth-of-type(7) {
    animation-delay: 0.7s;
  }
  span:nth-of-type(8) {
    animation-delay: 0.8s;
  }
  span:nth-of-type(9) {
    animation-delay: 0.9s;
  }
  span:nth-of-type(10) {
    animation-delay: 1s;
  }
  span:nth-of-type(11) {
    animation-delay: 1.1s;
  }
`;

const StyledP = styled.p`
  margin: 0px;
  padding: 0px;
  text-align: center;
  font-size: 24px;

  &.red {
    color: red;
  }
`;

const Modal = ({ modalOpen, setModalOpen }) => {
  const [isHovering, setIsHovering] = useState('힌트 보기');
  const inputValue = useRecoilValue(InputValue);
  const errorCheck = useWordCheck('Maekjoo');

  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <BlurBackground>
      <StyledModal>
        {errorCheck !== undefined ? (
          !errorCheck ? (
            <>
              <ModalText>
                <StyledP>제출이 완료되었습니다. </StyledP>
                <StyledP>편지는 수료 후 일괄 전송 됩니다.</StyledP>
              </ModalText>
              <Link href={'/'}>
                <StyledButton>메인 화면 가기</StyledButton>
              </Link>
              <Link href={'/resultpage'}>
                <StyledButton>결과 창 가기</StyledButton>
              </Link>
            </>
          ) : (
            <>
              <ModalText>
                <StyledP className="red">404 not found :</StyledP>
                <StyledP className="red">{errorMsg[errorCheck]}</StyledP>
                <StyledP className="red">
                  {errorMsg[`${errorCheck}2`]}정상적으로 전송 됩니다.
                </StyledP>
              </ModalText>
              <StyledButton
                onMouseOver={() => setIsHovering(errorMsg[`${errorCheck}3`])}
                onMouseOut={() => setIsHovering('힌트 보기')}
              >
                {isHovering}
              </StyledButton>
              <StyledButton onClick={showModal}>
                {errorMsg[`${errorCheck}4`]}
              </StyledButton>
            </>
          )
        ) : (
          <StyledDiv>
            <span>메</span>
            <span>세</span>
            <span>지</span>
            <span>를</span>
            <span> </span>
            <span>전</span>
            <span>송</span>
            <span>중</span>
            <span>입</span>
            <span>니</span>
            <span>다</span>
          </StyledDiv>
        )}{' '}
      </StyledModal>
    </BlurBackground>
  );
};

export default Modal;
