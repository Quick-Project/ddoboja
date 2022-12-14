import React from 'react';
import styled from 'styled-components';
import { buildQueries } from '@testing-library/react';

const TeamContain = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;
const TeamHeader = styled.h2`
  margin-bottom: 10px;
  color: #acabac;
`;
const Team_member = styled.a`
  color: white;
  margin: 6px 0;
  color: #67aba5;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const Members = () => {
  return (
    <TeamContain>
      <TeamHeader> 최근 항목</TeamHeader>
      <Team_member href="https://github.com/haileyport" target="_blank">
        FE 40기는 다들 착해서 편지를 잘 쓰지 않을까...요? - 은혜
      </Team_member>
      <Team_member href="https://github.com/nada1221" target="_blank">
        아마 다들 고마운 분 한 사람씩은 있을거에요! 아마도..? - 동욱
      </Team_member>
      <Team_member href="https://github.com/billy5982" target="_blank">
        일단 0고백 1차임은 면했으니 괜찮아 - 명규
      </Team_member>
      <Team_member href="https://github.com/jaehongg" target="_blank">
        어... 좋습니다. 네 그거 좋다는 건데..? 네..? - 재홍
      </Team_member>
      <Team_member href="https://github.com/94sssh" target="_blank">
        그래서 오늘도 10시 반에 온라인 술모임 하나요? - 승호
      </Team_member>
      <Team_member href="https://github.com/heoputer" target="_blank">
        뭐라 그래도 저는 억지로 끼워넣는 피ㅆ...읍읍!! - 정우
      </Team_member>
    </TeamContain>
  );
};

export default Members;
