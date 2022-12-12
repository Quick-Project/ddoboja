import React from 'react';
import styled from 'styled-components';
import LetterInquiry from './LetterInquiry';

const dummyData = [
  {
    receiver: '테스트',
    title: '프로게이머스',
    content:
      '맥주 온라인 편지는 컴퓨터 프로그래밍 알고리즘 편지 예약 서비스를 제공해주는 웹사이트이다.맥주 온라인 편지는 컴퓨터 프로그래밍 알고리즘 편지 예약 서비스를 제공해주는 웹사이트이다.',
    time: '2022.12.14',
  },
  {
    receiver: '트스테',
    title: 'VSCODESTATES',
    content:
      '코딩메일서비스를 찾는다면? 개발자를 위한 책임있는 예약 메일 시스템! VSCodestates를 소개합니다.',
    time: '2022.12.14',
  },
];

const ResultPage = () => {
  return (
    <Result_Container>
      <MainDiv>
        <CategoryContainer>
          <div className="receiver">보낸사람</div>
          <div className="title">제목</div>
          <div className="content">내용</div>
          <div className="time">제출시간</div>
        </CategoryContainer>
        {dummyData.map((data) => (
          <LetterInquiry
            receiver={data.receiver}
            title={data.title}
            content={data.content}
            time={data.time}
            key={data.title}
          />
        ))}
        {/* <ResultDiv>
          <div className="left">
            <p className="tag">보낸사람</p>
            {dummyData.map((data) => (
              <p className="tag" key={data.receiver}>
                {data.receiver}
              </p>
            ))}
          </div>
          <div className="mainLeft">
            <p className="tag">제목</p>
            {dummyData.map((data) => (
              <p className="tag" key={data.title}>
                {data.title}
              </p>
            ))}
          </div>
          <div className="main">
            <p className="tag">내용</p>
            {dummyData.map((data) => (
              <p className="tag" key={data.content}>
                {data.content}
              </p>
            ))}
          </div>
          <div className="main">
            <p className="tag">제출시간</p>
            {dummyData.map((data) => (
              <p className="tag" key={data.receiver}>
                {data.receiver}
              </p>
            ))}
          </div>
        </ResultDiv> */}
      </MainDiv>
    </Result_Container>
  );
};

const Result_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70vw;
  min-height: 600px;
  margin-left: 250px;
`;

const MainDiv = styled.div`
  display: flex;
  background: white;
  height: 100vh;
  flex-direction: column;
`;

const ResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  & .left {
    padding-left: 230px;
    padding-top: 30px;
  }
  & .main {
    padding-top: 30px;
    padding-left: 10%;
  }
  & .mainLeft {
    padding-left: 10%;
    padding-top: 30px;
  }
  & .tag {
    width: 600%;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 4px;
  margin-right: 300px;
  margin-bottom: 0.5rem;
  color: #70757a;

  & .receiver {
    width: 7rem;
  }
  & .title {
    width: 15rem;
  }
  & .content {
    width: 54rem;
  }
  & .time {
    width: 7rem;
  }
`;

export default ResultPage;
