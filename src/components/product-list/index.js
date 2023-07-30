import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "./store/actions/products.action";
import Product from "./product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ProductList () {
  const dispatch = useDispatch();
  const productStore = useSelector(store => store.products);

  const [productList, setProductList] = useState(productStore.data);

  useEffect(() => {
    setProductList(productStore.data);
  }, [productStore.data]);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (<div className="flex justify-evenly items-center">
    {productStore.loading ?
      <FontAwesomeIcon icon={faSpinner} /> :
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 py-8">
        {productList?.map(product => <Product key={product.id} details={product} />)}
      </div>
    }
  </div>
  );
}