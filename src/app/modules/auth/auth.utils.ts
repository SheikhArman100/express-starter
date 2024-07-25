// import config from "../../../config";

// /**
//  * Utility function for send email
//  * @param to email receiver
//  * @param html email body
//  * @param subject email subject
//  */
// export async function sendEmail(to: string, html: string, subject: string) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.net",
//     port: 465,
//     secure: true,
//     auth: {
//       user: config._email,
//       pass: config._pass,
//     },
//   });

//   await transporter.sendMail({
//     from: `"Borofpani Portal" <${config._email}>`,
//     to,
//     subject,
//     html,
//   });
// }
