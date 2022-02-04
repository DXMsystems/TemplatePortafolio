const express = require("express");
const path = require('path');
const { body, validationResult } = require("express-validator");
const db = require("./database.js");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const root = path.join(__dirname, 'build')
app.use("/about-me", express.static(root));
app.use(express.static(root))

app.post(
  "/contact-us",
  body("name").trim().isLength({ min: 1 }),
  body("email").trim().isEmail().normalizeEmail(),
  body("sub").trim().isLength({ min: 1 }),
  body("msg").trim().isLength({ min: 1, max: 500 }),
  (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      let current = new Date();
      let cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      let cTime =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();

      let dateTime = cDate + " " + cTime;

      const data = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.sub,
        message: req.body.msg,
        date: dateTime,
      };
      const sql ='INSERT INTO Contact (name, email, subject, message, date) VALUES (?,?,?,?,?)'
      const params = [data.name, data.email, data.subject, data.message, data.date]
      db.run(sql, params, (err, result) => {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
    });
      return res.status(201).end("Well done hoe!");
    }
  }
);


app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
