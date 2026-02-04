/* eslint-env node */

const cors = require("cors")({ origin: true });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const { defineString } = require("firebase-functions/params");

const EMAIL_USER = defineString("EMAIL_USER");
const EMAIL_PASS = defineString("EMAIL_PASS");

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {

    
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Dados obrigatórios ausentes" });
  }

  console.log("EMAIL_USER:", EMAIL_USER.value());
  console.log("EMAIL_PASS:", EMAIL_PASS.value() ? "OK" : "UNDEFINED");


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER.value(),
      pass: EMAIL_PASS.value(),
    },
  });

  await transporter.sendMail({
    from: `"Site Psicóloga" <${EMAIL_USER.value()}>`,
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

  return res.status(200).json({ ok: true });
});
});
