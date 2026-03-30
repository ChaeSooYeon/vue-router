const useAuthStore = () => {
  const getLogInStatus = () => sessionStorage.getItem('login') || false;
  const login = async (params) => {
    const { id, pw } = params;
    //login 처리 로직
    const loginInfo = JSON.parse(sessionStorage.getItem('login'));
    if (loginInfo?.id === null || loginInfo?.id !== id)
      return {
        status: 'fail',
        code: 'NO-USER',
        message: '등록된 아이디가 없습니다',
      };

    if (loginInfo.id === id && loginInfo.pw === pw)
      return { status: 'success', message: '' };
    else {
      return {
        status: 'fail',
        code: 'NOT-MATCH-PASSWORD',
        message: '비밀번호가 맞지 않습니다',
      };
    }
  };
  const join = async (params) => {
    const { id, pw } = params;
    if (id && pw) {
      sessionStorage.setItem('login', JSON.stringify({ id, pw }));
      console.log(JSON.parse(sessionStorage.getItem('login')));
      return {
        status: 'success',
      };
    } else {
      return {
        status: 'fail',
        code: 'INCORRECT PARAMETERS',
        message: '아이디와 비밀번호가 유효하지 않습니다',
      };
    }
  };
  return { isLogin: getLogInStatus(), login, join };
};
export default useAuthStore;
