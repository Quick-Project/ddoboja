import react, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { InputValue } from '../../states';

export default function useGetTyping() {
  const [typingData, setTypingData] = useRecoilState(InputValue);

  const onValue = (e) => {
    setTypingData({
      ...typingData,
      [e.target.name]: e.target.value,
    });
  };

  return [typingData, onValue];
}
