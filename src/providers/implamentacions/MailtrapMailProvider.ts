import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{

  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "6c4e4851be8b19",
        pass: "d7e7a8a5f6a8f1"
      }
    });
  }
  
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        address: message.to.address,
        name: message.to.name
      },
      from: {
        address: message.from.address,
        name: message.from.name
      },
      subject: message.subject,
      html: message.html
    })
  }
}