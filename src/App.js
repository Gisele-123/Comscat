import React from "react";
import NavBar from "./Components/navbar";
import Solution from "./Components/solution";
import Summary from "./Components/summary";
import About from "./Components/about";
import Services from "./Components/services";
import Product from "./Components/products";
import Work from "./Components/work";
import Footer from "./Components/footer";

const App=() => {
  return (
    <section className="App">
      <NavBar />
      <Solution />
      <Summary />
      <About />
      <Services />
      <Product />
      <Work />
      <Footer />
    </section>
  );
}

export default App;
