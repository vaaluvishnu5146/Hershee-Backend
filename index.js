const express = require("express");
const parser = require("body-parser");
const env = require("dotenv");
const cors = require("cors");

// CONFIGURING ENVIRONMENT VARIABLES
env.config();

// INJECTING DATABASE CONNECTION SCRIPTS
require("./database");

const HTTP_SERVER = express();

// ENABLE CORS
HTTP_SERVER.use(cors());

// CONFIGURE APPLICATION TO READ REQUEST BODY AS JSON
HTTP_SERVER.use(parser.json());

// INJECT THE APPLICATION SERVER IN HTTP_SERVER
HTTP_SERVER.use("/api", require("./app"));

HTTP_SERVER.listen(5000, "0.0.0.0", () => {
  console.log("Server started successfully");
});
