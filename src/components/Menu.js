import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data/data";
const Menu = () => {
  const list = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {list.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine with {pizzaData.length} dishes to choose
            from—freshly prepared in our stone oven, all organic, and absolutely
            delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, index) => (
              <Pizza key={index} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
