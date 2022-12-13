import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const SourcecodeContainer = styled.div`
  font-weight: 600;
  margin-right: 30px;
  width: 82px;
  margin-top: 5px;
  font-size: 13px;
  height: 25px;
  text-align: right;
`;

export default function Selector() {
  return (
    <Container>
      <SourcecodeContainer>언어</SourcecodeContainer>
      <Dropdown>
        <Dropdown.Toggle
          variant="white"
          id="dropdown-basic"
          style={{
            height: '24px',
            width: '210px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '3px 6px',
            background:
              'linear-gradient(rgb(255,255,255),rgb(238,238,238),rgb(255,255,255))',
            border: '1px solid #eee',
            borderRadius: 0,
            boxShadow: `rgb(255, 255, 255) 0px 0px 3px 0px inset, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px`,
          }}
        >
          쿠션어.js
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            borderRadius: 0,
            fontSize: '14px',
            width: '210px',
            margin: 0,
          }}
        >
          <Dropdown.Item>쿠션어.js</Dropdown.Item>
          <Dropdown.Item>안됩니다. 쿠션어를 사용해주세요.</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}
