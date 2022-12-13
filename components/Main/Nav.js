import styled from 'styled-components';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import github from './../../icon/github.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
  padding: 20px 40px 0 0;
  margin: auto;
`;

const StyledButton = styled.button`
  margin: 0 10px;
  width: 5rem;
  height: 2.3rem;
  font-weight: 900;
  color: white;
  background: #1a73e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: blue;
  }
  span {
    margin-left: 4px;
  }
`;

const Nav = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="header">
        <Wrapper>
          <StyledButton onClick={() => signOut()}>
            <Image src={github} alt="github" width="15px" height="15px" />
            <span>로그아웃</span>
          </StyledButton>
        </Wrapper>
      </div>
    );
  }
  return (
    <div className="header">
      <Wrapper>
        <StyledButton onClick={() => signIn('github')}>
          <Image src={github} alt="github" width="15px" height="15px" />
          <span>로그인</span>
        </StyledButton>
      </Wrapper>
    </div>
  );
};

export default Nav;
