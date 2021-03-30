var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'payalyadav1892@gmail.com',
    pass: 'payalshirishyadav'
  }
});

var mailOptions = {
  from: 'payalyadav1892@gmail.com',
  to: 'payals1892@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `We are connected through mail now!!!`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});