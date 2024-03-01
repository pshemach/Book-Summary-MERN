const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Summary = mongoose.model("Summary", SummarySchema, "summary");

module.exports = Summary;
