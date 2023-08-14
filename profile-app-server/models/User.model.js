const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String
    },
    password: {
      type: String
    },
    campus: {
      type: String,
      enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon", "Remote"]
    },
    course: {
      type: String,
      enum: ["Web Dev", "UX/UI", "Data Analytics", "Cyber Security"]
    },
    image: {
      type: String,
      default: "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
