import React from 'react';
import styled from 'styled-components';
import LetterInquiry from './LetterInquiry';
import { letterData } from '../../states/index';
import { useRecoilValue } from 'recoil';

const ResultPage = () => {
  const letter = useRecoilValue(letterData);

  return (
    <Result_Container>
      <MainDiv>
        <CategoryContainer>
          <div className="sender">보낸사람</div>
          <div className="title">제목</div>
          <div className="content">내용</div>
          <div className="date">제출시간</div>
        </CategoryContainer>
        {letter.length > 0 &&
          letter.map((data) => (
            <LetterInquiry
              sender={data.sender}
              title={data.title}
              content={data.content}
              date={data.date}
              key={data.id}
            />
          ))}
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
  margin-left: 245px;
`;

const MainDiv = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 0.5rem;
  color: #70757a;

  & .sender {
    width: 9%;
  }
  & .title {
    width: 15%;
  }
  & .content {
    width: 63%;
  }
  & .date {
    width: 10%;
  }
`;

export default ResultPage;
