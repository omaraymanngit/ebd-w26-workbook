// 06-modules/discounts.js — a module written for someone else to import.

// Named export: half of any price.
export function halfPrice(amount) {
  return amount / 2;
}

// Default export: the name of the sale.
export default "Winter sale";
