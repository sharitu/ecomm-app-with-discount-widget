import { combineReducers } from "redux";
import productsReducer from "../components/product-list/store/reducers/product.reducer";

export const rootReducer = combineReducers({
  products: productsReducer
});