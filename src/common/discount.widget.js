/**
 * Starts with Currency code - one or more non-numeric characters
 * Next, price value with upto two decimals
 */
const priceExtractionRegex = /^(\D+)(\d+(\.\d{1,2})?)$/;

const getDiscount = (price, code) => {
  //The minimum cost of the item to receive a discount is $20.
  if (price < 20)
    return {
      percent: 0,
      value: 0,
      code,
      discountedPrice: price,
    };

  // 20% discount if the cost of the item is less than $100.
  if (price < 100)
    return {
      percent: 20,
      value: price * 0.2,
      code,
      discountedPrice: price * 0.8,
    };

  // 30% discount if the cost of the item is between $100 and $499.99.
  if (price < 500)
    return {
      percent: 30,
      value: price * 0.3,
      code,
      discountedPrice: price * 0.7,
    };

  // 40% discount if the cost of the item is $500 or more.
  return {
    percent: 40,
    value: price * 0.4,
    code,
    discountedPrice: price * 0.6,
  };
};
const DiscountWidget = {
  scanPrices: () => {
    const productPriceElements = document.querySelectorAll('[class^="price-"]'); //get original price element
    const discounts = [];

    productPriceElements.forEach((element) => {
      // Find the class `price-[id]` from the elements class list and extract the id (product id) from it
      const productId = [...element.classList]
        .find((c) => c.startsWith("price-"))
        .split("price-")[1];

      const price = element.textContent.trim();
      const matches = price.match(priceExtractionRegex);

      discounts.push({
        id: productId,
        discount: {...getDiscount(Number(matches[2]), matches[1])},
      });
    });

    return discounts;
  },
};

export default DiscountWidget;
