const dotenv = require("dotenv").config({ path: "./.env" });
const axios = require('axios')

const sendNotification = (text) => {
    console.log( process.env.CHAT_ID)
  let url =
    "https://api.telegram.org/bot" +
    process.env.TOKEN +
    "/sendMessage?chat_id=" +
    process.env.CHAT_ID +
    "&text=" +
    text;

  axios.get(url).then(res => {
    //console.log(`statusCode: ${res.status}`)
    //console.log(res)
  }).catch(error => {
    console.error(error)
  })

  console.log(url,text);
};

module.exports = {sendNotification}

