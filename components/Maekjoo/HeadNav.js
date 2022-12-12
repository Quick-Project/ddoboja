import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Arrow from '../../icon/Arrow.png';
import MaekjooDark from '../../icon/Maekjoodark.png';
import MaekjooLight from '../../icon/MaekjooLight.png';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { pageMode } from '../../states';

const HeadContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 1100px;
  height: 100%;
  white-space: nowrap;
  & div {
    align-self: center;
    height: 50px;
  }
`;

const Logo = styled(Image)`
  :hover {
    cursor: pointer;
  }
`;

const HeadTextStyled = styled.a`
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 9px 25px 9px 25px;
  margin: 0px 0px 0px 0px;
  color: #687074;
  font-size: 14px;
  text-decoration: none;
  // font: 'Open Sans'
  /* background-color: green; */

  :hover {
    color: #0076c0;
    border-bottom: 2px solid #0076c0;
  }

  &.selected {
    margin-left: 100px;
    color: #0076c0;
    border-bottom: 2px solid #0076c0;
  }
`;

const HeadText = () => {
  const state = useRecoilValue(pageMode);
  const menu = [
    '문제',
    '문제집',
    '대회',
    '채점 현황',
    '랭킹',
    '게시판',
    '그룹',
    '블로그',
    '강의',
  ];

  return (
    <HeadContainer>
      <div>
        <Link href="https://quick-project.github.io/BMTI-DLink/">
          <Logo
            src={state.mode === 'light' ? MaekjooLight : MaekjooDark}
            height={'50px'}
            width={'200px'}
          />
        </Link>
        <Link href="https://github.com/Quick-Project/BMTI-DLink">
          <Logo src={Arrow} height={'50px'} width={'50px'} mr={'120px'} />
        </Link>
      </div>
      {menu.map((list, idx) => {
        if (idx === 0) {
          return (
            <HeadTextStyled className="selected" key={idx}>
              {list}
            </HeadTextStyled>
          );
        }
        return <HeadTextStyled key={idx}>{list}</HeadTextStyled>;
      })}
    </HeadContainer>
  );
};

export default HeadText;
