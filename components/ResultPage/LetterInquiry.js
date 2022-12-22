import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const LetterInquiry = ({ sender, title, content, date }) => {
  const time = dayjs(date);

  return (
    <LetterContainer>
      <LetterSender>{sender}</LetterSender>
      <LetterTitle>{title}</LetterTitle>
      <LetterContent>{content}</LetterContent>
      <LetterTime>{time.format('YY.MM.DD')}</LetterTime>
    </LetterContainer>
  );
};

const LetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
  color: black;
  @media (prefers-color-scheme: dark) {
    color: black;
  }
`;

const LetterSender = styled.div`
  width: 9%;
  font-weight: bold;
`;

const LetterTitle = styled.div`
  width: 15%;
`;

const LetterContent = styled.div`
  width: 63%;
`;

const LetterTime = styled.div`
  width: 10%;
`;

export default LetterInquiry;
