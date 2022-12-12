import React from 'react';
import styled from 'styled-components';

const OptionContainer = styled.li`
  display: inline-block;
  justify-content: center;
  align-items: center;
`;

const OptionStyled = styled.a`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 10px 15px;
  font-size: 13px;
  background-color: white;
  color: #555555;
  text-decoration: none;
  &.number {
    background-color: #428bca;
    color: white;
    :hover {
      background-color: #428bca;
      color: white;
    }
  }

  :hover {
    color: #0076c0;
    background-color: #eeeeee;
  }
`;

const Options = () => {
  const menu = ['1214번', '제출', '맞힌 사람', '숏코딩', '재채점 결과'];
  return (
    <OptionContainer>
      {menu.map((list, idx) => {
        if (idx === 0) {
          return (
            <OptionStyled className="number" key={idx}>
              {list}
            </OptionStyled>
          );
        }
        return <OptionStyled key={idx}>{list}</OptionStyled>;
      })}
    </OptionContainer>
  );
};

export default Options;
