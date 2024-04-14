const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const userModel = require("./models/User");

app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb+srv://root:root@myfirstdb.0t1e6ev.mongodb.net/mernatriweb")
  .then((response) => {
    console.log("db connected successfully");
    app.listen(5000, () => {
      console.log("server running....");
    });
  })
  .catch((error) => {
    console.log("db connection failed: " + error.message);
  });

app.get("https://mern-host-event-web.vercel.app/", (req, res) => {
  res.send({ user: "Welcome mr.rakesh" });
});

app.post("https://mern-host-event-web.vercel.app/newuser", async (req, res) => {
  const user = new userModel(req.body);
  const newUser = await user.save();

  res.json(newUser);
});
