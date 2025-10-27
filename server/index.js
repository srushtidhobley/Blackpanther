// server/index.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// This is where you configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or another email service like Outlook, etc.
  auth: {
    user: 'YOUR_EMAIL@gmail.com', // Your email address
    pass: 'YOUR_APP_PASSWORD',   // Your Gmail App Password (not your regular password)
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: name,
    to: 'YOUR_EMAIL@gmail.com', // The email address where you want to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from ${email}:\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully!');
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});