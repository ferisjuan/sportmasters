"use strict";

import { logger } from '../logger';
import nodemailer from 'nodemailer';

export async function sendMail(email: string, url: string) {
    try {
        const testAccount = await nodemailer.createTestAccount();

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: email,
            subject: "Hello ✔",
            text: "Hello world?",
            html: `<a href="${url}">${url}</a>`,
        });

        logger.info("Message sent: %s", info.messageId);

        logger.info("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        logger.error(error);
    }
}
