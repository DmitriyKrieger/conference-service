const nodemailer = require('nodemailer');
const fs = require('fs');


export async function toMail(to,text,name='default',path='default'){



  let attachments=[
    {filename: `${name}`, path: `${path}`}
    ];
  
  let value={
    from: '"CompanyName" <dima564comgrin@bk.ru>',
    to:`${to}`, // куда
    subject:'test', //тема
   // text:'This is test',
    html:`${text}`,//текст
  }


if(name != 'default' || path != 'default'){
  value.attachments = attachments;  
}

    
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'dima564comgrin@bk.ru',
        pass: 'traksamid1435',
      }
    });
    
    await transporter.sendMail(value);
    
    

}
