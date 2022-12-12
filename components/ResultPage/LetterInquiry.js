import React from 'react';
import { letterData } from '../../states/index';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const loadLetterData = async (e) => {
  let { data } = await axios.get(`api/letter/${receiver}`);
  data = data.map((value) => value.name);
  setLetter(data.filter((value) => value.includes(e.target.value)));
};

// const [letter, setLetter] = useRecoilState(letterData);
// console.log(letter);

const LetterInquiry = ({ receiver, title, content, time }) => {
  return (
    <LetterContainer>
      <LetterReceiver>{receiver}</LetterReceiver>
      <LetterTitle>{title}</LetterTitle>
      <LetterContent>{content}</LetterContent>
      <LetterTime>{time}</LetterTime>
    </LetterContainer>
  );
};

const LetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: 300px;
  margin-bottom: 0.5rem;
`;

const LetterReceiver = styled.div`
  width: 7rem;
  font-weight: bold;
`;

const LetterTitle = styled.div`
  width: 15rem;
`;

const LetterContent = styled.div`
  width: 53rem;
  margin-right: 1rem;
`;

const LetterTime = styled.div`
  width: 7rem;
`;

export default LetterInquiry;
