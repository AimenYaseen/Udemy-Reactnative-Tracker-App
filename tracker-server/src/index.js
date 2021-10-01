require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewears/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:password123%40@cluster0.imoh6.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(mongoUri, () => {
  useNewUrlParser: true;
  useCreateIndex: true;
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error Connecting to MongoDB", err);
});

app.get("/", requireAuth, (req, res) => {
  // Route Handler ; req (incoming request); '/'(root route)
  res.send(`Your Email is : ${req.user.email}`); // outgoing response
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
