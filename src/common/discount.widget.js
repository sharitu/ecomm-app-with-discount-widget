/**
 * Starts with Currency code - one or more non-numeric characters
 * Next, price value with upto two decimals
 */
const priceExtractionRegex = /^(\D+)(\d+(\.\d{1,2})?)$/;

const getDiscount = (price) => {
  //The minimum cost of the item to receive a discount is $20.
  if (price < 20)
    return {
      percent: 0,
      discountedPrice: price,
    };

  // 20% discount if the cost of the item is less than $100.
  if (price < 100)
    return {
      percent: 20,
      discountedPrice: price * 0.8,
    };

  // 30% discount if the cost of the item is between $100 and $499.99.
  if (price < 500)
    return {
      percent: 30,
      discountedPrice: price * 0.7,
    };

  // 40% discount if the cost of the item is $500 or more.
  return {
    percent: 40,
    discountedPrice: price * 0.6,
  };
};

function displayDiscounts (productPriceElements) {
  try {
    productPriceElements.forEach((element) => {
      // Find the class `price-[id]` from the elements class list and extract the id (product id) from it
      const productId = [...element.classList]
        .find((c) => c.startsWith("price-"))
        .split("price-")[1];
  
      if (document.getElementsByClassName(`discount-${productId}`).length !== 0) return; // if discount already applied, do nothing
  
  
      // Extract currency code and price
      const price = element.textContent.trim();
      const matches = price.match(priceExtractionRegex);
      
      const { percent, discountedPrice } = getDiscount(Number(matches[2])); // compute applicable discount
      
      // Manipulate DOM only if discount is applicable
      if (percent > 0) {
        const discountElement = element.cloneNode(true); // create an element similar to Price element.
  
        // Make style updates
        discountElement.classList.remove(`price-${productId}`);
        discountElement.classList.add(`discount-${productId}`);
        element.style.textDecoration = 'line-through';
  
        discountElement.textContent = `${matches[1]}${discountedPrice} (${percent}%)`;
  
        // element.parentNode.appendChild(discountElement);
        element.parentNode.insertBefore(discountElement, element.nextSibling)
      }
    });
  } catch (error) {
    console.log({error});
  }
}

const DiscountWidget = {
  setDiscount: function () {
    try {
      let _interval;

      function scanPrices () {
        try {
          const productPriceElements = document.querySelectorAll('[class^="price-"]'); //get original price element
                
          if (productPriceElements.length === 0) return;

          clearInterval(scanPrices);
          _interval = null;
          displayDiscounts(productPriceElements);
        } catch (error) {
          console.log({error});
        }
      }

      window.onload = () => {
        if (!_interval) {
          _interval = setInterval(scanPrices, 1000);
        }
      }
    } catch (error) {
      console.log({error});
    }
  },
};

export default DiscountWidget;
