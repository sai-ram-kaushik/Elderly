// dependencies
const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  country: String,
  city: String,
  dateOfBirth: Date,
  interests: Array,
});

// hashing the password before saving in database.
UserSchema.pre("save", { query: true, document: true }, async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

// To check the user credentials of the use logging in
UserSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Export Model
module.exports = model("user", UserSchema);
