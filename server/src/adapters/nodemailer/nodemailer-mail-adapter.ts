import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ba3ba2cf687bca",
    pass: "6597ae5c30f250"
  }
});

export class Nodemailer implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Vinicius V <vinicius_ve_@hotmail.com>',
      subject,
      html: body,
    })
  }
}