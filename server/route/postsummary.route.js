const express = require("express");
const Summary = require("../database/models/summary");
const { authenticate } = require("../midware/auth");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const summaryContent = {
      book: req.body.book,
      author: req.body.author,
      summary: req.body.summary,
      userId: req.user._id,
    };

    const summary = new Summary(summaryContent);
    await summary.save();

    res.status(200).json({
      status: "success",
      data: {
        summary,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
});

module.exports = router;
