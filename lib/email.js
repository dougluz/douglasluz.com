import axios from "axios"

const EMAIL_URL = "https://api.emailjs.com/api/v1.0/email/send"

export const sendEmail = async (templateParams) => {
  await axios.post(EMAIL_URL, {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    template_params: templateParams,
    accessToken: process.env.ACCESS_TOKEN
  })
}
