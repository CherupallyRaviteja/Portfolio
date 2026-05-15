const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", async (req, res) => {

  const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",
      pass: "your_app_password"
    }
  })

  const mailOptions = {
    from: email,
    to: "cherupellyraviteja2005@gmail.com",
    subject: "User Message",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send("Email sent")
  } catch (error) {
    res.status(500).send(error)
  }

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})