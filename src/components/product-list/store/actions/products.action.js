import { __http } from "../../../../common/utils";
import { getProducts } from "../types/products.types";

export const getProductsRequest = (req) => {
  return async function(dispatch) {
    try {
      const productsResponse = await __http.get("data.json");
      dispatch(getProductsSuccess(productsResponse.data));
    } catch (error) {
      dispatch(getProductsError(error))
    }
  };
};
export const getProductsSuccess = (req) => {
  return {
    type: getProducts.GET_PRODUCTS_SUCCESS,
    payload: req
  };
};
export const getProductsError = (req) => {
  return {
    type: getProducts.GET_PRODUCTS_ERROR,
    payload: req
  };
};
