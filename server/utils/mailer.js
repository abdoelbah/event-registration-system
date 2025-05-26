const nodemailer = require("nodemailer");
require('dotenv').config()


exports.sendEmailTicket = async (email, firstname) => {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.HOST, // replace with your mail server
            port: 465, // replace with your mail server port
            secure: true, // use SSL
            auth: {
                user: process.env.ADMIN_EMAIL, // your email address
                pass: process.env.ADMIN_PASSKEY  // your email password
            }
        });

        const info = await transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            to: email,
            subject: "invitation",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="ar">
            <head>
              <meta charset="UTF-8">
              <meta content="width=device-width, initial-scale=1" name="viewport">
              <meta name="x-apple-disable-message-reformatting">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta content="telephone=no" name="format-detection">
              <title>New Message</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
              </style>
            </head>
            <body style="width:100%;font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;background-color:#FAFAFA;">
              <div style="background-color:#FAFAFA; padding:20px;">
                <div style="background-color:#ffffff; max-width:600px; margin:0 auto; padding:20px; box-shadow:0 0 10px rgba(0, 0, 0, 0.1); text-align:center;">
                  <div style="margin-bottom:20px;">
                    <img src="https://ehuyqes.stripocdn.email/content/guids/CABINET_53ccef04358a8e5182fcedd4f77c91ee8ba99c627d5aa799e1958c886de36fdf/images/mwjalogo.png" alt="Logo" style="width:200px;">
                  </div>
                  <div style="margin-bottom:20px;">
                    <img src="https://ehuyqes.stripocdn.email/content/guids/CABINET_67e080d830d87c17802bd9b4fe1c0912/images/55191618237638326.png" alt="" style="width:100px;">
                    <h1 style="font-size:46px; font-weight:bold; color:#274a79; margin:0 0 10px 0; font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;">قم بتأكيد حسابك</h1>
                    <p style="color:#274a79; font-size:14px; line-height:21px; margin:5px 0; font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;">شكراً لك على إنشاء حساب معنا. نحن متحمسون لانضمامك إلينا.</p>
                    <p style="color:#274a79; font-size:14px; line-height:21px; margin:5px 0; font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;">للبدء، يرجى التحقق من عنوان بريدك الإلكتروني بالنقر على الزر أدناه&nbsp;</p>
                    <a href="${link}" style="display:inline-block; padding:10px 30px; background-color:#274a79; color:#FFFFFF; font-size:20px; border-radius:6px; text-decoration:none; margin:10px 0; font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;">انقر لتأكيد حسابك</a>
                    <p style="color:#274a79; font-size:14px; line-height:21px; margin:5px 0; font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;">إذا لم يعمل الرابط، يمكنك أيضًا نسخ ولصق العنوان التالي في المتصفح الخاص بك</p>
                    <p style="color:#274a79; font-size:14px; line-height:21px; margin:5px 0; font-family:Cairo, arial, 'helvetica neue', helvetica, sans-serif;">${link}</p>
                  </div>
                </div>
              </div>
            </body>
            </html>
            `
        });

        console.log("mail sent successfully");

    } catch (error) {
        console.error(error);
    }
};