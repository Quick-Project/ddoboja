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

const LetterInquiry = ({ receiver, title, content }) => {
  return (
    <LetterContainer>
      <letterReceiver>{receiver}</letterReceiver>
      <letterTitle>{title}</letterTitle>
      <letterContent>{content}</letterContent>
    </LetterContainer>
  );
};

const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const letterReceiver = styled.div``;

const letterTitle = styled.div``;

const letterContent = styled.div``;

export default LetterInquiry;
