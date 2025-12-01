const Brevo = require("@getbrevo/brevo");

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

const sendMail = async ({ to, subject, html }) => {
  try {
    await apiInstance.sendTransacEmail({
      sender: { name: "Nandini’s Make-Over", email: process.env.BREVO_EMAIL },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    });

    console.log("Email sent to:", to);
  } catch (error) {
    console.log("Brevo Email Error:", error.message);
  }
};

module.exports = sendMail;
 