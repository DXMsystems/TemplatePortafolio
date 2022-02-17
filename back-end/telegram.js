const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const dotenv = require("dotenv").config({ path: "./.env" });

const sendNotification = (text) => {
  let url = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${text}`;
  fetch(url, { method: "GET" });
};

module.exports = { sendNotification };
