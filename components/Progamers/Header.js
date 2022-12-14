import React from 'react';
import styled from 'styled-components';
import progamersLogo from '../../icon/progamersLogo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Header_Container>
        <Logo>
          <Link href={'/'}>
            <Image src={progamersLogo} alt="logo" />
          </Link>
        </Logo>
        <Description>
          <span> 고마웠던 </span>
          <span> &gt; </span>
          <span> 40기 동기에게 </span>
          <span> &gt; </span>
          <span className="letter"> 편지 보내기 </span>
        </Description>
      </Header_Container>
    </>
  );
};

const Header_Container = styled.div`
  display: flex;
  align-items: center;
  background: rgb(17, 21, 25);
  height: 45px;
  width: 100vw;
`;

const Logo = styled.div`
  height: 24px;
  width: 24px;
  margin-left: 16px;
`;

const Description = styled.div`
  display: flex;

  > span {
    margin-left: 25px;
    font-weight: bold;
    color: rgb(103, 105, 108);
  }

  .letter {
    color: white;
  }
`;

export default Header;
