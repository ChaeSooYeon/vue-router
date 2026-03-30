const USERS_KEY = 'mock-auth-users';
const SESSION_KEY = 'mock-auth-session-user';
const NETWORK_DELAY = 250;

const wait = (ms = NETWORK_DELAY) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const readJson = (key, fallback) => {
  const rawValue = sessionStorage.getItem(key);
  if (!rawValue) return fallback;

  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getUsers = () => readJson(USERS_KEY, []);
const setUsers = (users) => writeJson(USERS_KEY, users);

export const getSessionUser = async () => {
  await wait();
  return readJson(SESSION_KEY, null);
};

export const join = async ({ id, pw }) => {
  await wait();

  const trimmedId = id?.trim();
  const trimmedPw = pw?.trim();

  if (!trimmedId || !trimmedPw) {
    return {
      status: 'fail',
      code: 'INVALID_INPUT',
      message: '아이디와 비밀번호를 입력해주세요.',
    };
  }

  const users = getUsers();
  const exists = users.some((user) => user.id === trimmedId);

  if (exists) {
    return {
      status: 'fail',
      code: 'ALREADY_EXISTS',
      message: '이미 가입된 아이디입니다.',
    };
  }

  const nextUsers = [...users, { id: trimmedId, pw: trimmedPw }];
  setUsers(nextUsers);

  return {
    status: 'success',
    message: '회원가입이 완료되었습니다.',
  };
};

export const login = async ({ id, pw }) => {
  await wait();

  const trimmedId = id?.trim();
  const trimmedPw = pw?.trim();

  if (!trimmedId || !trimmedPw) {
    return {
      status: 'fail',
      code: 'INVALID_INPUT',
      message: '아이디와 비밀번호를 입력해주세요.',
    };
  }

  const users = getUsers();
  const foundUser = users.find((user) => user.id === trimmedId);

  if (!foundUser) {
    return {
      status: 'fail',
      code: 'NO_USER',
      message: '등록된 아이디가 없습니다.',
    };
  }

  if (foundUser.pw !== trimmedPw) {
    return {
      status: 'fail',
      code: 'NOT_MATCH_PASSWORD',
      message: '비밀번호가 맞지 않습니다.',
    };
  }

  const sessionUser = { id: foundUser.id };
  writeJson(SESSION_KEY, sessionUser);

  return {
    status: 'success',
    data: sessionUser,
    message: '로그인되었습니다.',
  };
};

export const logout = async () => {
  await wait();
  sessionStorage.removeItem(SESSION_KEY);

  return {
    status: 'success',
    message: '로그아웃되었습니다.',
  };
};
