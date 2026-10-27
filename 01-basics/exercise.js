// 01-basics — your work goes in this file.
//
// The lesson is in example.js:  node 01-basics/example.js
// Check your work with:         npm test 01

/**
 * Says what type a value is.
 * describeValue(45) -> "45 is a number"
 */
export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

/**
 * Builds a price label.
 * priceLabel("Notebook", 45) -> "Notebook costs 45 EGP"
 */
export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

/**
 * Is this price over 100 EGP?
 */
export function isExpensive(amount) {
  return amount > 100;
}

/**
 * Orders over 500 EGP ship free. Everything else costs 50 EGP.
 */
export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    return 0;
  }
  return 50;
}

/**
 *   0          -> "Out of stock"
 *   1 to 9     -> "Low stock"
 *   10 or more -> "In stock"
 */
export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}
