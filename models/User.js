const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    require: false,
    default: 0,
  },
});

const User = mongoose.model("users", userSchema);
