const { default: mongoose } = require("mongoose");

/**
    CREATE SCHEMA
    WHAT IS SCHEMA?
    SCHEMA IS A PROTOTYPE OR BLUE PRINT OF WHAT YOUR DATA IS GOING TO LOOK LIKE
*/
const AuthSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: Array,
    default: ["customer"],
  },
});

module.exports = mongoose.model("user", AuthSchema);
