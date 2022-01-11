const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 8000;

const { body, validationResult } = require("express-validator");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("test"));

app.post(
  "/contact-us",
  body("name").isLength({ min: 1 }).isAlphanumeric(),
  body("email").isEmail(),
  body("sub").isAlphanumeric().isLength( {min : 1} ),
  body("msg").isLength( { min: 10, max: 500 } ),
  (req, res) => {
    errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  }
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
