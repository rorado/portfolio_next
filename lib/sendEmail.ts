"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendMail(subject: string, html: string) {
  const { data, error } = await resend.emails.send({
    from: "portfolio@rorado.me",
    to: ["sohaybahrich3@gmail.com"],
    subject: subject,
    html: html,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}
