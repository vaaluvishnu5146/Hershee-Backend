const AuthorizationShield = require("../Middlewares/AuthorizationShield");
const TokenShield = require("../Middlewares/TokenSheild");
const { GET_ALL_OFFERS, CREATE_NEW_OFFER } = require("../Routers/OfferRouter");

const OfferRouter = require("express").Router();

OfferRouter.get("/", GET_ALL_OFFERS);
OfferRouter.post("/create", TokenShield, AuthorizationShield, CREATE_NEW_OFFER);

module.exports = OfferRouter;
