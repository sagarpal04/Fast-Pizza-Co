import React from "react";
import Pizza from "./Pizza";
import pizzaData from "./data";
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} {...pizza} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
