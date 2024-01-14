const {
  GET_ALL_PRODUCTS,
  CREATE_NEW_PRODUCT,
} = require("../Routers/ProductRouter");

const ProductRouter = require("express").Router();

ProductRouter.get("/", GET_ALL_PRODUCTS);
ProductRouter.post("/create", CREATE_NEW_PRODUCT);

module.exports = ProductRouter;
