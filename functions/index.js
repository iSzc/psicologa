/* eslint-env node */

const cors = require("cors")({ origin: true });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { nome, email, telefone, mensagem } = req.body;

    // Validação básica dos campos obrigatórios
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: "Dados obrigatórios ausentes: nome, email e mensagem são necessários." });
    }

    // Validação simples do formato do email (opcional, mas recomendado)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Formato de email inválido." });
    }

    // Configuração do transporte Nodemailer para Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: functions.config().email.user, // Certifique-se de que isso esteja configurado no Firebase
        pass: functions.config().email.pass, // Use uma senha de aplicativo se 2FA estiver ativado no Gmail
      },
    });

    try {
      // Envio do email
      await transporter.sendMail({
        from: `"Site Psicóloga" <${functions.config().email.user}>`, // O 'from' deve ser o mesmo que o user para evitar bloqueios
        to: "heliodinizjunior@gmail.com",
        subject: "Novo contato pelo Site",
        text: `
Nome: ${nome}
Email: ${email}
Telefone: ${telefone || "Não informado"}

Mensagem:
${mensagem}
        `,
      });

      // Resposta de sucesso
      return res.status(200).json({ ok: true, message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      // Resposta de erro (não exponha detalhes internos ao usuário)
      return res.status(500).json({ error: "Erro interno ao enviar o email. Tente novamente mais tarde." });
    }
  });
});





// /* eslint-env node */

// const cors = require("cors")({ origin: true });
// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");
// const { defineString } = require("firebase-functions/params");

// const EMAIL_USER = defineString("EMAIL_USER");
// const EMAIL_PASS = defineString("EMAIL_PASS");

// exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
//     cors(req, res, async () => {

    
//   if (req.method !== "POST") {
//     return res.status(405).send("Method Not Allowed");
//   }

//   const { nome, email, telefone, mensagem } = req.body;

//   if (!nome || !email || !mensagem) {
//     return res.status(400).json({ error: "Dados obrigatórios ausentes" });
//   }

//   console.log("EMAIL_USER:", EMAIL_USER.value());
//   console.log("EMAIL_PASS:", EMAIL_PASS.value() ? "OK" : "UNDEFINED");


//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: EMAIL_USER.value(),
//       pass: EMAIL_PASS.value(),
//     },
//   });

//   await transporter.sendMail({
//     from: `"Site Psicóloga" <${EMAIL_USER.value()}>`,
//     to: "heliodinizjunior@gmail.com",
//     subject: "Novo contato pelo Site",
//     text: `
// Nome: ${nome}
// Email: ${email}
// Telefone: ${telefone || "Não informado"}

// Mensagem:
// ${mensagem}
//     `,
//   });

//   return res.status(200).json({ ok: true });
// });
// });
