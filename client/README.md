# Flash Deal Product Reservation

Frontend-only product reservation app matching the reference UI and flow at [Figma reference](https://loud-salty-64036442.figma.site/).

## State management approach

- **React `useState`** in the root `App` component:
  - `totalStock` — global product stock (starts at 5, reduced only on Checkout).
  - `cart` — array of reserved items (each item has `id`, `name`, `price`); max 2 items.
  - `showSuccess` — toggles the post-checkout success screen.
- **Derived values** (no extra state): `reservedCount = cart.length`, `availableStock = totalStock - reservedCount`, `canReserve = availableStock > 0 && reservedCount < 2`.
- All updates are done via `setTotalStock`, `setCart`, and `setShowSuccess` so state stays predictable and in one place.

## Assumptions made

- Single product only (Wireless Headphones, $99) as per spec; no backend or API.
- “Reserved” and “Available” refer to this session only: reserved = items in cart, available = total stock minus reserved.
- Checkout permanently reduces `totalStock` by the number of items in the cart, then clears the cart and shows the success state.
- Cancel removes one item from the cart and returns that unit to “available” (no change to `totalStock`).
- Success state includes a “Back to Product” action to return to the main flow; `totalStock` remains at its new value (no reset).

## Run

- `npm install`
- `npm run dev`

Live demo: optional (run locally with `npm run dev`).
