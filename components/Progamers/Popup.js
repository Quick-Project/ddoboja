import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Progammers from '../../icon/Progammers.png';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

const StyledDivv = styled.div`
  display: flex;
  width: 100%;
  justify-content: row;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const TitleDiv = styled.div`
  display: flex;
`;

const StyledImg = styled(Image)`
  width: 50px;
  height: 50px;
`;

function Popup({ open, setPopup, title, callback }) {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header style={{ border: 0, width: '100%' }}>
        <Modal.Title>
          <TitleDiv>
            <StyledDiv>
              {false && (
                <StyledImg width="50px" height="50px" src={Progammers} />
              )}
            </StyledDiv>
            <StyledDivv>
              <div>
                {Array.isArray(title) &&
                  title.map((el, idx) => <div key={idx}>{el}</div>)}
              </div>
            </StyledDivv>
          </TitleDiv>
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer style={{ border: 0 }}>
        {true ? (
          <>
            <Button variant="secondary" onClick={handleClose}>
              확인
            </Button>
            <Button variant="primary" onClick={handleClose}>
              검색 창으로 가기
            </Button>
          </>
        ) : (
          <>
            <Button variant="secondary" onClick={handleClose}>
              화이팅
            </Button>
            <Button variant="primary" onClick={handleClose}>
              줄이러 돌아가기
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
