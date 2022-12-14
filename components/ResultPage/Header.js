import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Ddoboja from '../../icon/Ddoboja.png';
import GoodFe from '../../icon/GoodFe.png';
import Search from '.././Search';
import Link from 'next/Link';

const ResultPage = () => {
  const [isHovering, setIsHovering] = useState(1);
  return (
    <Header_Container>
      <Link href={'/'}>
        <div className="img">
          <MainImg
            src={isHovering ? GoodFe : Ddoboja}
            alt="구글 아이콘"
            onMouseOver={() => setIsHovering(0)}
            onMouseOut={() => setIsHovering(1)}
          ></MainImg>
        </div>
      </Link>
      <TopDiv>
        <StyledDiv>
          <Search />
          <SeachButton>All</SeachButton>
        </StyledDiv>
      </TopDiv>
    </Header_Container>
  );
};
const Header_Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  border-bottom: 1px solid #e8e8e8;
  & .img {
    margin-left: 50px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  height: 125px;
  width: 100%;
`;

const MainImg = styled(Image)`
  /* text-align: center;
  margin-bottom: 50px; */
  :hover {
    animation: ease-in reverse;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 20px 20px 25px;
`;

const SeachButton = styled.div`
  display: flex;
  margin-top: 30px;
  width: 18px;
  border-bottom: 3px solid blue;
`;

export default ResultPage;
