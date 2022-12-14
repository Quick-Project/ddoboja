import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 51px; */
  height: 34px;
  padding: 6px 12px;
  margin: 0px 6px;
  border: none;
  color: white;
  background-color: #428bca;
  font-size: 14px;

  :hover {
    background-color: #3071a9;
  }
`;

const ModalButton = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ButtonContainer>
      {modalOpen && (
        <Modal
          props={props}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
      <StyledButton onClick={showModal}>제출</StyledButton>
    </ButtonContainer>
  );
};

export default ModalButton;
