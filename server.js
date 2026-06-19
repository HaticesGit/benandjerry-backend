require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const orderRoutes = require("./routes/orders");

app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API works" });
});

console.log("Trying to connect...");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connectie");
  })

  .catch((error) => {
  console.log("ERROR:");
  console.log(error.message);
  console.log("Oei oei er klopt iets niet");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});