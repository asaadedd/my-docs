declare interface CoreConfig {
  LOGS_INTERFACES: Array<string>;
  HEADER: {
    LOGO_URL: string;
  };
  COLORS: {
    ICE: string;
    FRESH_WATER: string;
    PLASTER: string;
    LINEN: string;
  };
}

declare interface Tab {
  url: string;
  translatePath: string;
  iconUrl: string;
}
