// Checkpoint A — solution for GitHub account omaraymanngit.
//
// Spec: checkpoint-a/spec.md
// Check with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. Every order from the database.
 * @returns {Promise<Array<object>>}
 */
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

/**
 * 2. Only the orders from Giza whose status is cancelled.
 * @param {Array<object>} orders
 * @returns {Array<object>}
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "cancelled"
  );
}

/**
 * 3. The highest single price in the list (quantity ignored). 0 when empty.
 * @param {Array<object>} orders
 * @returns {number}
 */
export function summarize(orders) {
  return orders.reduce(
    (highest, order) => (order.price > highest ? order.price : highest),
    0
  );
}

/**
 * 4. "{student} ordered {quantity} x {item}", or "No order with id {id}".
 * Never throws.
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const { student, quantity, item } = await findOrderById(id);
    return `${student} ordered ${quantity} x ${item}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

/**
 * 5. JSON text of the orders, keeping only student and item.
 * @param {Array<object>} orders
 * @returns {string}
 */
export function toJsonLines(orders) {
  const slim = orders.map(({ student, item }) => ({ student, item }));
  return JSON.stringify(slim);
}
