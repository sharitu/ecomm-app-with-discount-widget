import { getProducts } from "../types/products.types";

const initialState = {
  loading: false,
  count: 0,
  data: []
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getProducts.GET_PRODUCTS_REQUEST:
      return({
        ...state,
        loading: true,
      });
    case getProducts.GET_PRODUCTS_SUCCESS:
      return({
        ...state,
        loading: false,
        ...action.payload
      });
    case getProducts.GET_PRODUCTS_ERROR:
      return({
        ...state,
        loading: false,
        error: action.payload.message
      });
  
    default:
      return ({
        ...state
      })
  }
};

export default productsReducer;