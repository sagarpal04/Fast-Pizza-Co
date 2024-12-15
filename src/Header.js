import React from "react";

const Header = () => {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
};

export default Header;
