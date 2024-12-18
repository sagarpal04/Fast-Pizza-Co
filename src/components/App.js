import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const App = () => {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
