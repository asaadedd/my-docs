declare interface CoreConfig {
  LOGS_INTERFACES: Array<string>;
  HEADER: {
    LOGO_URL: string;
  };
}

declare interface Tab {
  name: string;
  url: string;
  translatePath: string;
}
