declare interface UserInfo {
  type: string;
  allowedPath: Array<string>;
  tabs: Array<Tab>;
}

declare interface UserLogs {
  interfaceName: string;
  INFO: {
    USER_LOGIN_START: string;
    USER_SUCCESS_LOGIN: string;
    USER_LOGOUT: string;
  };
  ERROR: {
    USER_FAILED_LOGIN: string;
  };
}

declare interface UserLoginInfo {
  username: string;
  password: string;
  type: string;
}

declare interface UserConfig {
  USER: {
    INFO: Array<UserInfo>,
    NO_USER: string;
    STORAGE_KEY: string;
  };
  LOGS?: UserLogs;
}
