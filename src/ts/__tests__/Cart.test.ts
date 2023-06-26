import Cart from "../service/Cart";
import Movie from "../domain/Movie";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("add item to cart", () => {
  const cart = new Cart();
  cart.add(
    new Movie(
      5000,
      "Крестный отец",
      "The Godfather",
      1972,
      "USA",
      "Настоящая сила не может быть дана, она может быть взята...",
      ["драма", "криминал"],
      "175 мин. / 02:55",
      "img.jpg",
      600
    )
  );

  expect(cart.items.length).toBe(1);
});
