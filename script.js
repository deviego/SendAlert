const fs = require("fs")
const { format } = require("date-fns")
const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./smtp/smtp");

// send email

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});




// verification of date and run send 
const today = new Date
const day = format(today, "dd/MM")

async function run() {
  const mailSend = await transporter.sendMail({
    text: "Aniversáriante do dia",
    subject: `Hoje o aniversariante é vc `,
    from: "Deviego <diegodomingues266@gmail.com>",
    to: ["diegodomingues266@gmail.com", "tatiana.f.domingues@gmail.com"]

   
  });
  }

fs.readFile("./data.json", (err, data) => {
  data = JSON.parse(data)

  let birthdayPerson = data.filter(person => person.birthday == day)
  if(!birthdayPerson ){
    console.log("não tem aniversáriante")
  }else{
    run()
  }
})



