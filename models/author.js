const mongoose = require("mongoose");

const authorScehma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorScehma);

debugger;
