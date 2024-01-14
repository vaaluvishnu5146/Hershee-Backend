const OfferModel = require("../Models/OfferModel");

function GET_ALL_OFFERS(req, res, next) {
  OfferModel.find()
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Offers fetched successfully",
          data: response,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "No Offers found!",
          data: [],
        });
      }
    })
    .catch((error) =>
      res.status(500).json({
        success: false,
        error: error,
      })
    );
}

function CREATE_NEW_OFFER(req, res, next) {
  const Offer = new OfferModel(req.body);

  // STORE THE OFFER DATA GENERATED FROM OFFER MODEL INSTANCE
  Offer.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "Offer created successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
}

module.exports = {
  GET_ALL_OFFERS,
  CREATE_NEW_OFFER,
};
