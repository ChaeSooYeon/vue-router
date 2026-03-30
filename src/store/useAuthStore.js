import {
  getSessionUser,
  join as joinApi,
  login as loginApi,
  logout as logoutApi,
} from '@/api/mockAuthApi';

const useAuthStore = () => {
  const getLoginStatus = async () => {
    const sessionUser = await getSessionUser();
    return Boolean(sessionUser?.id);
  };

  const getCurrentUser = () => getSessionUser();
  const login = (params) => loginApi(params);
  const join = (params) => joinApi(params);
  const logout = () => logoutApi();

  return { getLoginStatus, getCurrentUser, login, join, logout };
};

export default useAuthStore;
