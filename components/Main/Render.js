import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Search from '.././Search';
import Link from 'next/link';
import Ddoboja from '../../icon/Ddoboja.png';
import GoodFe from '../../icon/GoodFe.png';

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 864px;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  padding: 200px 0px 0 0px;
  position: relative;
  background: #fff;
`;

const MainImg = styled(Image)`
  text-align: center;
  margin-bottom: 50px;
  :hover {
    animation: ease-in reverse;
  }
`;

const MainButton = styled.button`
  display: block;
  font-size: 1em;
  margin: 1em;
  padding: 1em;
  border-radius: 50%;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Render = () => {
  const [isHovering, setIsHovering] = useState(1);

  return (
    <MainArea>
      <MainImg
        src={isHovering ? GoodFe : Ddoboja}
        alt="구글 아이콘"
        onMouseOver={() => setIsHovering(0)}
        onMouseOut={() => setIsHovering(1)}
      ></MainImg>
      <Search />
      <MainDiv>
        <Link href={'/maekjoo'}>
          <MainButton></MainButton>
        </Link>
        <Link href={'/progamers'}>
          <MainButton></MainButton>
        </Link>
        <Link href={'/vscodestates'}>
          <MainButton></MainButton>
        </Link>
      </MainDiv>
    </MainArea>
  );
};

export default Render;
