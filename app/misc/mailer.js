const nodemailer = require('nodemailer');
const config = require('../config/mailer');

const transport = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@sandboxda6f3efa1872479eafe855ee8b35ecb0.mailgun.org',
    pass: '66dfa3360b2482acae62984290efb4ab-f135b0f1-b132bfcf',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  sendEmail(from, to, subject, html) {
    return new Promise((resolve, reject) => {
      transport.sendMail({ from, subject, to, html }, (err, info) => {
        if (err) reject(err);

        resolve(info);
      });
    });
  },
};
