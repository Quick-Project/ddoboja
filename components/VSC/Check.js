import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckBox = styled.a`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: solid 0.05rem #292828;
  background: black;
  border-radius: 0.3rem;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Checkbox = ({ checked, setCheck }) => {
  const handleCheck = (e) => {
    if (!checked) {
      e.preventDefault();
    }
    setCheck(!checked);
  };

  return (
    <CheckBoxContainer>
      <HiddenCheckBox type={'checkbox'} />
      <StyledCheckBox
        href="https://github.com/Quick-Project/GoodFe"
        target="_blank"
        checked={checked}
        onClick={(e) => handleCheck(e)}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckBox>
    </CheckBoxContainer>
  );
};

export default Checkbox;
