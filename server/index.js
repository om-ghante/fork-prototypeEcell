const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-mail', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'omghante.laptop1@gmail.com',
      pass: 'omG@2143'
    }
  });

  const mailOptions = {
    from: 'omghante.laptop1@gmail.com',
    to: email,
    subject: 'New Message from Contact Form',
    text: `You received a message from ${name}.\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
