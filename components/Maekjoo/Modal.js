import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/Link';
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
      {errorCheck !== undefined && (
        <StyledModal>
          {!errorCheck ? (
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
          )}
        </StyledModal>
      )}{' '}
    </BlurBackground>
  );
};

export default Modal;
