import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeadNav from '../components/Maekjoo/HeadNav';
import BodyNav from '../components/Maekjoo/BodyNav';
import WriterContainer from '../components/Maekjoo/WriterContainer';
import Selector from '../components/Maekjoo/Selector';
import TickTack from '../components/TickTack';
import ModalButton from '../components/Maekjoo/ModalButton';
import { getSession, useSession } from 'next-auth/react';

import { useRouter } from 'next/router';

const MainContainer = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  & .HeadNav {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  & .BodyNav {
    display: flex;
    align-items: center;
  }
  & .title {
    padding-left: 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #eee;
    & h1 {
      font-weight: 400;
    }
  }
  & .selectBox {
    display: flex;
    align-self: center;
  }
`;

const Container = styled.div`
  background-color: ${({ color }) => color || 'white'};
  height: ${({ h }) => h || '100%'};
  width: ${({ w }) => w || '100%'};
  margin: ${({ m }) => m || '0px'};
  border: ${({ border }) => border || '0px'};
  box-shadow: ${({ boxShadow }) => boxShadow || '0px'};
  padding: ${({ p }) => p || '0px'};
`;

export default function maekjoo() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      alert('로그인이 필요한 서비스입니다.');
      router.push('/');
    }
  }, [session]);
  return (
    session && (
      <MainContainer>
        {/* 헤더 페이지 */}

        <Container
          h={'80px'}
          m={'0px 0px 50px 0px'}
          className="HeadNav"
          boxShadow={'0 -3px 0 0  #e7e7e7 inset'}
        >
          <HeadNav />
        </Container>
        {/* 메뉴바 */}
        <Container
          h={'60px'}
          w={'1150px'}
          className={'BodyNav'}
          m={'0 0 5px 60px'}
        >
          <BodyNav />
        </Container>
        {/* 문제 제목 */}
        <Container
          h={'40px'}
          m={'10px 10px'}
          borderBottom={'2px solid black'}
          w={'1150px'}
          className="title"
        >
          <h1>A + B</h1>
        </Container>
        {/* 셀렉 */}
        <Container
          h={'60px'}
          w={'1000px'}
          m={'0px 0px 20px 0px'}
          className="selectBox"
        >
          <Selector />
        </Container>
        {/* 편지 입력 컨테이너 */}
        <Container h={'450px'} w={'1000px'}>
          <WriterContainer />
        </Container>
        {/* 버튼 박스 */}
        <Container
          h={'60px'}
          w={'1000px'}
          m={'0 0 0 110px'}
          p={'0px 0px 0px 50px'}
        >
          <ModalButton />
        </Container>
        <TickTack />
      </MainContainer>
    )
  );
}

export async function getServerSideProps(context) {
  // getSession을 이용하면 현재 로그인 정보를 얻을 수  있음
  const session = await getSession(context);
  // context에는 여러가지 정보들이 있음

  return {
    props: {
      session,
    },
  };
}
