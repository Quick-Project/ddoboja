import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

export const InputValue = atom({
  key: `InputValue`,
  default: {
    reciever: '',
    title: '',
    content: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const currentUser = atom({
  key: `currentUser`,
  default: {
    name: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const pageMode = atom({
  key: `pageMode`,
  default: { mode: 'light' },
  effects_UNSTABLE: [persistAtom],
});

export const letterData = atom({
  key: 'letterData',
  default: {
    receiver: '',
    title: '',
    content: '',
  },
});
