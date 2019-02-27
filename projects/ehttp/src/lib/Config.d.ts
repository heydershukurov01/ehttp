export interface Config {
  headers: any;
  message: {
    unAuthenticated: string;
    statusException: string;
    serverException: string;
    appException: string;
  },
  logout: string,
  logoutCodes: number[],
  hook: string;
}
