const ACCESS_TOKEN = 'access-token-dashcr';
const CODE = 'code';
const FULL_NAME = 'fullname';
const EMAIL = 'email';
const ROLE = 'role';

interface LocalStorageProps {
  accessToken: string;
  code: string;
  fullname: string;
  email: string;
  role: string;
}

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getUserData = () => {
  return {
    code: localStorage.getItem(CODE),
    email: localStorage.getItem(EMAIL),
    fullname: localStorage.getItem(FULL_NAME),
    role: localStorage.getItem(ROLE),
  };
};

export const setAccessToken = ({
  accessToken,
  code,
  fullname,
  email,
  role,
}: LocalStorageProps) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(CODE, code);
  localStorage.setItem(FULL_NAME, fullname);
  localStorage.setItem(EMAIL, email);
  localStorage.setItem(ROLE, role);
};

export const removeStorage = () => {
  localStorage.clear();
};

export const isAuthenticated = () => getAccessToken() !== null;
