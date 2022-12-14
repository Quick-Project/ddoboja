import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { currentUser, InputValue } from '../../states';
import checkTypingData from './checkTypingData';

// 보내는 사람 이름을 기준으로
// useEffect 시 모든 길이가 적합하다면? api 요청 -> true를 리턴
// useEffect 시 모든 조건이 틀리다면? false를 리턴
// 검사 필요.

export default function useWordCheck(IDE) {
  // console.log('hi');
  const emailData = useRecoilValue(InputValue);
  const resetData = useResetRecoilState(InputValue);
  //로그인 유저 이름
  const { name: sender } = useRecoilValue(currentUser);
  // const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  // 타이핑 항목 검사
  useEffect(() => {
    const sendData = async () => {
      // 데이터가 모두 잘 들어가있으면 false로 반환됨.
      const resultState = await checkTypingData({ ...emailData }, IDE);
      // 편지데이터가 두번 들어가는 것을 방지
      // setLoading(false);
      if (!resultState) {
        const { title, content, reciever } = emailData;

        const data = {
          date: new Date(),
          IDE,
          sender,
          title,
          content,
          reciever,
        };
        try {
          const sendEmail = await axios.post('/api/letter/create', data);
          resetData();
        } catch (e) {
          console.log(e);
        }
      }
      setResult(resultState);
    };
    sendData();
  }, []);

  return result;
}
