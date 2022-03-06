import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "./data.json";
import { useState } from "react";
import Products from "./components/Products/Products";



function App() {
  const [products, setProducts] = useState(data);
  console.log(products);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filter-wrapper">Filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
