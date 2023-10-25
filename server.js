const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@example.com",
      password: "password",
      entries: 0,
      joind: new Date(),
    },
    {
      id: "124",
      name: "Gen",
      email: "gen@example.com",
      password: "password",
      entries: 0,
      joind: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send("This i good");
});

app.post("/signin", (req, res) => {
  console.log(res.body);
  if (res.body.email === database.users[0].email) {
    res.json("sign in good");
  } else {
    res.status(404).json("login failed");
  }
});
app.listen(3000, () => {
  console.log("on port 3000");
});
