import sendGrid from "@sendgrid/mail"

sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  const { name, email, message } = req.body
  try {
    const sendGridMessage = {
      to: process.env.CONTACT_EMAIL,
      from: "dougs.2210@gmail.com",
      subject: `You receveid a message from ${name}`,
      html: `
        ${email}<br/>
        ${message}
      `
    }
    await sendGrid.send(sendGridMessage)
    res.status(200).json({ message: "Email succefully sent 😀" })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: "Ops, something went wrong. Try again later 😳" })
  }
}
