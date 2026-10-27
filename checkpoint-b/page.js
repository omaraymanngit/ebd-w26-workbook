// Checkpoint B — your behaviour. Built to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes <li class="goods-item">{name}</li>.
 *
 * @param {Array<object>} list
 * @returns {void}
 */
export function renderItems(list) {
  const target = document.querySelector("#list");
  target.innerHTML = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name}`;
    target.append(li);
  }
}

/**
 * Only the items under 100 EGP.
 *
 * @returns {Array<object>}
 */
export function matching() {
  return items.filter((item) => item.price < 100);
}

/**
 * Draws every item, then redraws with only the matching ones when
 * #filter-button is clicked.
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}

