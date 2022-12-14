import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Progammers from '../../icon/progammers.png';
import useWordCheck from '../hook/useWordCheck';
import useGetTyping from '../hook/useGetTyping';
import { errorMsg } from '../errorMsg';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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

function Popup({ open, setPopup }) {
  const handleClose = () => {
    setPopup(false);
  };
  const [errorArr, setErrorArr] = useState([]);
  const [inputValue, onValue] = useGetTyping();
  const errorCheck = useWordCheck('Progamers');

  useEffect(() => {
    if (errorCheck) {
      setErrorArr([errorMsg[`${errorCheck}`], errorMsg[`${errorCheck}3`]]);
    }
  }, [errorCheck]);

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
                {errorArr.length > 0 ? (
                  errorArr.map((el, idx) => <div key={idx}>{el}</div>)
                ) : (
                  <div>전송되었습니다.</div>
                )}
              </div>
            </StyledDivv>
          </TitleDiv>
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer style={{ border: 0 }}>
        {!errorCheck ? (
          <>
            <Link href={'/'}>
              <Button variant="secondary" onClick={handleClose}>
                메인 화면 가기
              </Button>
            </Link>
            <Link href={'/vscodestates'}>
              <Button variant="primary" onClick={handleClose}>
                결과 창으로 가기
              </Button>
            </Link>
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
