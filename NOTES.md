# Workbook notes

Short revision notes on what each part of the workbook covers.

## Part 1 — JavaScript (modules 00–08, Checkpoint A)

- **Template literals** build strings with values inside: `` `${name} costs ${price} EGP` ``.
- **Arrow functions** with no braces return their expression automatically: `(n) => n * 2`.
- **Default parameters** fill in a missing argument: `(amount, currency = "EGP")`.
- **Objects:** use a dot for a fixed key (`product.name`) and brackets for a key held in a variable (`product[field]`).
- **Spread** copies an object without changing the original: `{ ...product, price: 30 }`.
- **Array methods:** `map` transforms, `filter` keeps some, `find` returns one item (or `undefined`), and `reduce` combines everything into one value (always give it a starting value).
- **JSON:** `JSON.stringify` turns an object into text, and `JSON.parse` turns text back into an object.
- **Modules:** named exports are imported in `{ }`; the default export is imported without braces.
- **npm:** `dependencies` are needed to run the code, `devDependencies` only to build or test it. `^` allows minor and patch updates, never a new major version.
- **async / await:** `await` waits for a promise. A rejected promise must be caught with `try / catch`, or it crashes whatever called the function.

## Part 2 — The browser (modules 09–13, Checkpoint B)

- **HTML structure:** `header`, `main` and `footer`; the stylesheet is linked in the head and the script at the end of the body.
- **Flexbox:** `display: flex`, `justify-content`, `align-items`, `gap` and `flex-wrap`.
- **Contrast:** text has to stay readable against its background.
- **Reading the DOM:** `querySelector` returns one element, `querySelectorAll` returns a NodeList, and `Array.from` makes it an array so `map` and `filter` work.
- **Changing the DOM:** `createElement`, `textContent`, `classList.add`, `append` and `remove`.
- **Events:** `addEventListener("click", fn)` hands over a function that the browser calls later.
- **Forms:** `event.preventDefault()` stops the page reloading. Validate the input first, then update the data array and redraw the list from it.
