import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "./data.json";
import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";

// Images
import img1 from "./Images/airePods.jpg";
import img2 from "./Images/camera.jpg";
import img3 from "./Images/laptop.jpg";
import img4 from "./Images/shoes.jpg";
import store from "./store/store";


function App() {
  let images = [img1, img2, img3, img4];
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data)
    }
    else {
      let productsClone = [...products];
      let newProducts = productsClone.filter((p) => p.sizes.indexOf(e.target.value) != -1);
      console.log("newProducts", newProducts);
      setProducts(newProducts);
    }
  }
  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (order === "lowest") {
        return a.price - b.price;
      }
      else if (order === "highest") {
        return b.price - a.price;
      }
      else {
        return a.id < b.id ? 1 : -1;
      }
    })
    setProducts(newProducts);
  }
  const AddToCart = (product) => {
    const cartItemsClone = [...cartItems]
    let isProductExists = false;
    cartItemsClone.forEach(p => {
      if (p.id == product.id) {
        p.qty++;
        isProductExists = true;
      }
    })
    if (!isProductExists) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  }

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter(p => p.id !== product.id));
  }
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} images={images} AddToCart={AddToCart} />
            <Filter
              productsNum={products.length}
              size={size}
              sort={sort}
              handleFilterByOrder={handleFilterByOrder}
              handleFilterBySize={handleFilterBySize}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} images={images} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
