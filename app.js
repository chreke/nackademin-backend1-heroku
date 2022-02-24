const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { DiaryEntry } = require("./models/diary");

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express()

app.use(express.urlencoded({extended: true}));

app.get("/", async (_req, res) => {
  console.log("Hello");
  const entries = await DiaryEntry.find();
  res.render("index.ejs", {entries});
});

app.post("/", async (req, res) => {
  const {title, content} = req.body;
  const entry = new DiaryEntry({title, content});
  await entry.save();
  res.redirect("/");
});

mongoose.connect(DATABASE_URL);

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
