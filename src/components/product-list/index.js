import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "./store/actions/products.action";
import Product from "./product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import DiscountWidget from '../../common/discount.widget';

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

  useEffect(() => {
    setProductList(_productList => {
      let list = [..._productList];
      const discounts = [...DiscountWidget.scanPrices()];
      if (discounts.length) {
        discounts.forEach(discountedProduct => {
          const _productIndex = list.findIndex(({id}) => id === discountedProduct.id);
          list.splice(_productIndex, 1, {
            ...list[_productIndex],
            discount: discountedProduct.discount
          });
        })
      }
      return list;
    });
  }, [productStore.data, setProductList])

  return (<div className="flex justify-evenly items-center">
    {productStore.loading ?
      <FontAwesomeIcon icon={faSpinner} /> :
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 py-8">
        {productList?.map(product => <Product details={product} />)}
      </div>
    }
  </div>
  );
}