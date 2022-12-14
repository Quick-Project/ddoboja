import axios from 'axios';
export const getUser = async (userEmail) => {
  // 토큰이 user get 안에 있음
  try {
    const { data: userData } = await axios.get(`/api/user/get`);
    const checkId = userData.filter((x) => userEmail === x.email)[0].id;

    //  현재 로그인 유저 토큰 찾기
    const { data: userToken } = await axios.get(`/api/account/${checkId}`);
    const accessToken = userToken[0].access_token;

    // github에 현재 로그인된 정보 요청하기
    const getUserInfo = await axios.get('https://api.github.com/user', {
      headers: {
        authorization: `token ${accessToken}`,
        //
      },
    });
    // 현재 로그인 유저 아이디
    const currentUserId = getUserInfo.data['login'];
    //
    const { data } = await axios.get(`/api/feuser/github/${currentUserId}`);
    // console.log(data);
    if (data) {
      const filterUserName = data.name;
      return filterUserName;
    } else {
      return data;
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
