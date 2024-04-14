const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    college: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
  },
  { timestamps: true }
);

const userModel = mongoose.model("mernusers", userSchema);

module.exports = userModel;
