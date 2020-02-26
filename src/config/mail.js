export default {
  host: process.env.MAIL_HOT,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Gabriel Rodrigues <noreply@gobarber.com>',
  },
};
