const nodemailer = require("nodemailer");
require('dotenv').config();

exports.sendEmailTicket = async (attendor) => {
  try {
    const { attendorId, firstname, email } = attendor;

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSKEY
      }
    });

    const htmlContent = 
    `
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>دعوة اليوم الوطني للتقنية</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f0f0f0;
        }

        table {
            border-collapse: collapse;
        }

        .email-container {
            width: 100%;
            background-image: url('https://eikacyz.stripocdn.email/content/guids/CABINET_f004ac5f63ff0fb7bde7bc947cf82e7ebd8b5e182c5c91320c05216fc310db13/images/wallpaper_4k_v2_s.jpeg');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            padding: 40px 0;
        }

        .email-content {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: transparent;
            text-align: center;
        }

        .logo {
            width: 150px;
            margin: 0 auto 20px;
        }

        .heading {
            color:  #27a5467;
            font-size: 24px;
            font-weight: bold;
            margin: 0;
        }

        .subheading {
            color:  #27a5467;
            font-size: 20px;
            margin: 0 0 20px;
        }

        .title {
            font-size: 36px;
            color:  #27a5467;
            font-weight: bold;
            margin: 40px 0 10px;
        }

        .description {
            color:  #27a5467;
            font-size: 20px;
            margin: 10px 0;
        }

        .code {
            font-size: 50px;
            color:  #27a5467;
            margin: 20px 0;
        }

        .footer-note {
            color: #000;
            font-size: 18px;
            margin-bottom: 40px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <table class="email-content" cellpadding="0" cellspacing="0">
            <tr>
                <td align="center">
                    <img 
                    src="https://eikacyz.stripocdn.email/content/guids/CABINET_f004ac5f63ff0fb7bde7bc947cf82e7ebd8b5e182c5c91320c05216fc310db13/images/art_logo_2_crc.png"
                    class="logo" alt="Logo" />
                    <p class="heading">اليوم الوطني لتقنية المعلومات</p>
                    <p class="subheading">NATIONAL TECHNOLOGY DAY</p>
                    <p class="title">شكراً </p>
                    <p class="title">${firstname} </p>
                    <p class="title">على اهتمامك بفعاليتنا</p>
                    <p class="description">رقم التسجيل الخاص بك هو</p>
                    <p class="code">${attendorId}</p>
                    <p class="footer-note">نحن متحمسون للقاءك</p>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
    `;

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "دعوة للمشاركة في اليوم الوطني لتقنية المعلومات",
      html: htmlContent
    });

    console.log("Mail sent successfully");
  } catch (error) {
    console.error("Email sending error:", error.message);
  }
};