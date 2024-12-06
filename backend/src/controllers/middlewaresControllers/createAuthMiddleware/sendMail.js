const { passwordVerfication } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendMail = async ({
  email,
  name,
  link,
  tanbits_app_email,
  subject = 'Verify your email | tanbits',
  type = 'emailVerfication',
  emailToken,
}) => {
  const resend = new Resend(process.env.RESEND_API);

  const { data } = await resend.emails.send({
    from: tanbits_app_email,
    to: email,
    subject,
    html: passwordVerfication({ name, link }),
  });

  return data;
};

module.exports = sendMail;
