const ProductModel = require("../Models/ProductModel");

function GET_ALL_PRODUCTS(req, res, next) {
  ProductModel.find()
    .populate("offerId")
    .then((response) => {
      if (response.length > 0) {
        return res.status(200).json({
          success: true,
          message: "product fetched successfully",
          data: response,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "No Products found!",
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

function CREATE_NEW_PRODUCT(req, res, next) {
  const Product = new ProductModel(req.body);

  // STORE THE PRODUCT DATA GENERATED FROM PRODUCT MODEL INSTANCE
  Product.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "Product created successfully",
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
  GET_ALL_PRODUCTS,
  CREATE_NEW_PRODUCT,
};
