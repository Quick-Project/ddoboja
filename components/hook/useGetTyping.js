import react, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { InputValue } from '../../states';

export default function useGetTyping() {
  const [inputValue, setInputValue] = useRecoilState(InputValue);
  const [typingData, setTypingData] = useState({ ...inputValue });

  const onValue = (e) => {
    setTypingData({
      ...typingData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setInputValue({ ...typingData });
  }, [typingData]);

  return [typingData, onValue];
}
