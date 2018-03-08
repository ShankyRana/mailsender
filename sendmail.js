var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, //ssl
  auth: {
    user: 'shanky@cipherfit.com',
    pass: 'sk9910154268'
  }
});

router.get('/', (req, res) => res.send('{status: running, error: false}'));

/* GET users listing. */
router.post('/', (req, res, next)  => {
	console.log(req.body, "================>");
	var mailOptions = {
            from: 'shanky@cipherfit.com', // sender address
            to: ['shanky@cipherfit.com','kanishka@cipherfit.com'], // list of receivers
            subject: 'User Inquiry', // Subject line
	    html: `<!DOCTYPE html><html lang="en"><head> <title>Cipherfit | Inquiry</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></head><body><h4>Inquiry Received from ${req.body.email}</h4> </body></html>`
	};
	smtpTransport.sendMail(mailOptions, (error, info) => {
         if(error) {
          return console.log(error);
         }
       	 console.log('Message %s sent: %s', info.messageId, info.response);
 	 res.send('respond with a resource');
	});
});

module.exports = router;
