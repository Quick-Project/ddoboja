import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StatusLine = styled.div`
  background-color: #1e1e1e;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  overflow: hidden;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-right: 250px;
`;

const LineKeeper = styled.div`
  //이동효과 추가
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 953px;
  transform: ${(props) => `translateY(-${props.bot * 25}px)`};
  transition: ${(props) => (props.boolean ? '' : 'transform 1.5s ease-in')};
`;

const ProductionInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  font-size: 14px;
  color: rgb(142, 142, 142);
`;

const BottomLine = () => {
  const [bot, setBot] = useState(0);
  const boolean = useRef(false);
  const eleLength = 14;
  // const statusData = [
  //   '제작 : 또보자(Ddoboja)',
  //   '배포일 : 미정',
  //   '팀원 : 헬리 앤디 피터 백준 승새 부기',
  //   '담당 : VSC - 헬리,앤디 && PG - 피터,부기 && MJ - 백준,승새',
  //   '메인 에러 : eslint',
  //   'Thanks to : FE 40',
  //   '제작사유 : 스프린트 쫑파티 하다가 아이디어 폭주...',
  //   '당부 말씀 : 여러분은 쫑파티 하면서 아이디어 내지마세요. 특히 메인 전에!',
  //   'Goodbye CodeStates',
  //   '🥚',
  //   '🐣',
  //   '🐥',
  // ];

  // 멘트 변경 로직

  useEffect(() => {
    const botId = setInterval(
      () => {
        if (bot < eleLength - 1) {
          boolean.current = false;
          setBot((prev) => prev + 1);
        } else {
          boolean.current = true;
          setBot(0);
        }
      },
      boolean.current ? 0 : 2500
    );

    return () => {
      clearInterval(botId);
    };
  }, [bot]);

  return (
    <StatusLine>
      <LineKeeper bot={bot} boolean={boolean}>
        <ProductionInformation>제작 : 또보자(Ddoboja)</ProductionInformation>
        <ProductionInformation>배포일 : 2022년 12월 13일</ProductionInformation>
        <ProductionInformation>
          팀원 : 헬리 앤디 피터 백준 승새 부기
        </ProductionInformation>
        <ProductionInformation>
          담당 : VSC - 헬리,앤디 && PG - 피터,부기 && MJ - 백준,승새
        </ProductionInformation>
        <ProductionInformation>메인 에러 : eslint</ProductionInformation>
        <ProductionInformation>Thanks to : FE 40</ProductionInformation>
        <ProductionInformation>
          제작사유 : 메인프로젝트 종료 후 무력감을 떨쳐내기 위해...
        </ProductionInformation>
        <ProductionInformation>
          당부 말씀 : 재밌게 즐겨주시길 바랍니다!
        </ProductionInformation>
        <ProductionInformation>
          팀 목표 : 40기 FE에 감동주기
        </ProductionInformation>
        <ProductionInformation>Goodbye CodeStates</ProductionInformation>
        <ProductionInformation>🥚</ProductionInformation>
        <ProductionInformation>🐣</ProductionInformation>
        <ProductionInformation>🐥</ProductionInformation>
        <ProductionInformation>제작 : 또보자(Ddoboja)</ProductionInformation>
      </LineKeeper>
    </StatusLine>
  );
};

export default BottomLine;
