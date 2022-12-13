import axios from 'axios';
async function recieverCheck(reciever) {
  let { data } = await axios.get('api/feuser/get');
  let checkUser = data.filter((user) => user.name === reciever);
  // DB에 없는 이름이면 에러가 발생
  if (checkUser.length === 0) {
    return 'DBerror';
  } else {
    return false;
  }
}

export default async function checkTypingData(typingData, IDE) {
  // for문이 끝나야
  for (let key in typingData) {
    // 데이터가 비어있을떄는 key를 출력 key에 맞는 객체를 만들어서 에러메세지로 표현되게 하면 좋을 듯
    // console.log('key', obj, 'value', typingData[obj]);
    if (typingData[key] === '') {
      return key;
    }

    // DB에 존재하는 유저인지 확인
    if (key === 'reciever' && IDE === 'Maekjoo') {
      let recieverChecked = await recieverCheck(typingData[key]);
      if (recieverChecked) {
        return recieverChecked;
      }
    }

    if (key === 'content' && typingData[key].length > 500) {
      return 'maxLength';
    }
  }
  return false;
}
