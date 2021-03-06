const HOST = process.env.REACT_APP_SERVER_HOST || 'localhost';
const PORT = process.env.REACT_APP_SERVER_PORT || 8090;
export const API_BASE_URL = `http://${HOST}:${PORT}/api`;
export const ACCESS_TOKEN = 'accessToken';

export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const SALARY_MIN_LENGTH = 4;
export const SALARY_MAX_LENGTH = 8;

export const SALARY_MIN = 0;
export const SALARY_MAX = 1000;
export const SALARY_STEP = 0.01;
export const SALARY_PRECISION = 2;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

export const ROOT_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const SIGNUP_ROUTE = '/signup';
export const CHART_ROUTE = '/chart';
export const GRID_ROUTE = '/grid';
export const USERS_ROUTE = '/users';

export const CHART_UPDATE_INTERVAL = 100;
export const GRID_UPDATE_INTERVAL = 1000;

export const AUTOUPDATE_CHART = false;
export const AUTOUPDATE_GRID = false;
