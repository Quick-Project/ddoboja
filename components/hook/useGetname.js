import react, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { currentUser } from '../../states';

export default function useGetname() {
  const userName = useRecoilValue(currentUser);
  const [currentUsername, setcurrentUser] = useState('');

  useEffect(() => {
    if (userName.name) {
      setcurrentUser(userName.name);
    }
  }, [userName]);

  return currentUsername;
}
