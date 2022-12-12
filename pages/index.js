import React, { useEffect, useState } from 'react';
import Nav from '../components/Main/Nav.js';
import Render from '../components/Main/Render.js';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { currentUser } from '../states/index.js';
import { getUser } from '../components/apis/checkUser';

export default function Home() {
  const { data: session } = useSession();
  const [user, setUser] = useRecoilState(currentUser);
  useEffect(() => {
    if (session) {
      getUser(session.user.email).then((user) => setUser(user));
    }
  }, [session]);
  return (
    <>
      <Nav />
      <Render />
    </>
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
