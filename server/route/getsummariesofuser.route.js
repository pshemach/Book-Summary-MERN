const express = require("express");
const Summary = require("../database/models/summary");
const { authenticate } = require("../midware/auth");

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  try {
    const user = req.user;
    const summary = await Summary.find({ userId: user._id });

    if (summary.length === 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No summaries found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        summaries: summary,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

module.exports = router;
