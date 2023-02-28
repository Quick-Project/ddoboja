import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Search from '.././Search';
import Link from 'next/link';
import Ddoboja from '../../icon/Ddoboja.png';
import GoodFe from '../../icon/GoodFe.png';
import Vsc from '../../icon/Vsc.png';
import programer from '../../icon/programers.png';
import beak from '../../icon/beak.png';
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
  display: flex;
  font-size: 1em;
  margin: 1em;
  padding: 0.4em;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid white;
  box-shadow: 0 0 2.5px #333;
  :active {
    box-shadow: 0 0 2.5px #333 inset;
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BtnImg = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 25%;
  text-align: center;
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
          <MainButton>
            <BtnImg src={beak} alt="beak" />
          </MainButton>
        </Link>
        <Link href={'/progamers'}>
          <MainButton>
            <BtnImg src={programer} alt="programer" />
          </MainButton>
        </Link>
        <Link href={'/vscodestates'}>
          <MainButton>
            <BtnImg src={Vsc} alt="Vsc" />
          </MainButton>
        </Link>
      </MainDiv>
    </MainArea>
  );
};

export default Render;
