export const InitialConfig: any = {
  headers: {}
};

export const ExceptionHandlerConfig: any = {
  message: {
    unAuthenticated: 'Xahiş olunur sistemə daxil olun!',
    statusException: 'Status xətası',
    serverException: 'Server xətası',
    appException: 'Sistem xətası'
  },
  logout: '/logout',
  logoutCodes: [
    401,  // Bu ünvana icazəniz yoxdur
    1005, // You are not allowed to request this resource
    1006, // Token tapılmadı
    1014, // Token tapılmadı, zəhmət olmasa sistemə yenidən daxil olun
    1015, // Sizin sistemlərdən istifədə hüququnuz yoxdur
    1016, // Sizin bu sistemə istifədə hüququnuz yoxdur
    1017, // Sessiya bağlanmışdır, zəhmət olmasa sistemə yenidən daxil olun.
    1401, // Sessiya müddəti bitmişdir, zəhmət olmazsa sistemə yenidən daxil olun
    // 1402  // Sizin bu servisə icazəniz yoxdur
  ],
  hook: 'https://hooks.slack.com/services/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',
}
