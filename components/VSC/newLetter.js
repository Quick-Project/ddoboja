import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import newLogo from './img/newFile.png';
import greenLogo from './img/newFileGreen.png';
import Image from 'next/image';

const LetterContain = styled.div`
  margin-bottom: 100px;
`;
const LetterHead = styled.h2`
  color: #acabac;
  margin-bottom: 8px;
  font-weight: 400;
`;
const LetterInside = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: flex-end;
`;
const LetterLogo = styled(Image)`
  color: white;
`;
const WriteLetter = styled.div`
  color: #67aba5;
  margin-left: 0.5rem;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Letter = () => {
  const [isHovering, setIsHovering] = useState(1);

  return (
    <LetterContain>
      <LetterHead>시작</LetterHead>
      <LetterInside>
        <LetterLogo
          src={isHovering ? greenLogo : newLogo}
          width={20}
          height={25}
        />
        <WriteLetter
          onMouseOver={() => setIsHovering(0)}
          onMouseOut={() => setIsHovering(1)}
        >
          <Link href={'/vscodestatesNew'}>롤링 페이퍼 보기</Link>
        </WriteLetter>
      </LetterInside>
    </LetterContain>
  );
};

export default Letter;
