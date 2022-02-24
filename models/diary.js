const mongoose = require("mongoose");

const diaryEntrySchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  date: {type: Date, default: Date.now}
})

const DiaryEntry = mongoose.model("DiaryEntry", diaryEntrySchema);

exports.DiaryEntry = DiaryEntry;
