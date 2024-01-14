const express = require("express");

const APP_SERVER = express();

// INJECT ALL THE CONTROLLERS INSIDE THE APP
APP_SERVER.use("/auth", require("./Controllers/AuthenticationController"));
APP_SERVER.use("/products", require("./Controllers/ProductController"));
APP_SERVER.use("/offers", require("./Controllers/OfferController"));

module.exports = APP_SERVER;
