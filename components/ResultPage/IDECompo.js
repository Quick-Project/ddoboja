import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MaekjooLight from '../../icon/MaekjooLight.png';
import progammers from '../../icon/progammers.png';
import Ddoboja from '../../icon/Ddoboja.png';
import Link from 'next/link';

const Pic = styled(Image)`
  :hover {
    cursor: pointer;
  }
`;

const IDEcontainer = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dadce0;
  border-radius: 12px;
  width: 300px;
  padding: 0 0 16px 0;
  overflow: hidden;
  margin-bottom: 24px;
`;

const ImgContainer = styled.div`
  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow: hidden;
  border: none;
  position: relative;
  background-color: rgba(0, 0, 0, 0.03);
  :hover {
    cursor: pointer;
  }
`;

const SecondContainer = styled.div`
  width: 100%;
  height: 80px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 6px 15px 6px 15px;
  font-size: 14px;
  line-height: 1.58;
  text-align: left;
  > div > h2 {
    font-weight: 400;
    line-height: 1.2;
    color: #202124;
    font-size: 24px;
  }
  > div > div > span {
    line-height: 1.58;
    color: #70757a;
  }
`;

const ThridContainer = styled.div`
  height: 63px;
  display: block;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1%;
  font-size: 14px;
  border-top: 1px solid #dadce0;
`;

const ThridText = styled.span`
  display: inline;
  justify-content: center;
  align-items: center;
  color: #4d5156;
  line-height: 1.58;
  text-align: left;
`;

const Svg = styled.svg`
  :hover {
    cursor: pointer;
  }
`;

const ResultPageCard = () => {
  return (
    <IDEcontainer>
      <CardContainer>
        <Link href={'/maekjoo'}>
          <ImgContainer>
            <Pic
              alt="maekjoo"
              style={{ margin: '2px' }}
              src={MaekjooLight}
            ></Pic>
            <img
              alt="maekjoo"
              src="data:image/png;base64,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"
            ></img>
          </ImgContainer>
        </Link>
        <SecondContainer>
          <div>
            <h2>맥주 온라인 편지</h2>
            <div style={{ margin: '4px 0' }}>
              <span>웹사이트</span>
            </div>
          </div>
          <div>
            <Link href={'/maekjoo'}>
              <Svg
                height="24px"
                width="24px"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
              </Svg>
            </Link>
          </div>
        </SecondContainer>
        <ThridContainer>
          <ThridText>
            맥주 온라인 편지는 컴퓨터 프로그래밍 알고리즘 편지 예약 서비스를
            제공해주는 웹사이트이다.
          </ThridText>
          <span> </span>
        </ThridContainer>
      </CardContainer>
      <CardContainer>
        <Link href={'/vscodestates'}>
          <ImgContainer>
            <Pic alt="Ddoboja" style={{ margin: '2px' }} src={Ddoboja}></Pic>
            <img
              alt="VSCODESTATES"
              src="data:image/jpeg;base64,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"
            ></img>
          </ImgContainer>
        </Link>
        <SecondContainer>
          <div>
            <h2>VSCODESTATES</h2>
            <div style={{ margin: '4px 0' }}>
              <span>프로그램</span>
            </div>
          </div>
          <div>
            <Link href={'/vscodestates'}>
              <Svg
                height="24px"
                width="24px"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
              </Svg>
            </Link>
          </div>
        </SecondContainer>
        <ThridContainer>
          <ThridText>
            롤링페이퍼를 찾는다면? 개발자를 위한 롤링페이퍼 조회 시스템!
            VSCodestates를 소개합니다.
          </ThridText>
          <span> </span>
        </ThridContainer>
      </CardContainer>
      <CardContainer>
        <Link href={'/progamers'}>
          <ImgContainer>
            <Pic
              alt="progamers"
              style={{ margin: '2px' }}
              src={progammers}
            ></Pic>
            <img
              alt="progamers"
              src="https://blog.kakaocdn.net/dn/bT7AKG/btqyMqZFXYa/HwRvQMHBQlO455kLmGnab0/img.png"
              height="80px"
              width="200px"
            ></img>
          </ImgContainer>
        </Link>
        <SecondContainer>
          <div>
            <h2>프로게이머스</h2>
            <div style={{ margin: '4px 0' }}>
              <span>웹사이트</span>
            </div>
          </div>
          <div>
            <Link href={'/progamers'}>
              <Svg
                height="24px"
                width="24px"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
              </Svg>
            </Link>
          </div>
        </SecondContainer>
        <ThridContainer>
          <ThridText>
            코드 중심의 롤링페이퍼 시스템. 프로게이머스의 개발자 맞춤형
            롤링페이퍼로 함께한 동기들에게 메세지를 남겨보세요.
          </ThridText>
          <span> </span>
        </ThridContainer>
      </CardContainer>
    </IDEcontainer>
  );
};

export default ResultPageCard;
