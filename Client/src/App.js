import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products images={images} />
            <Filter
            />
          </div>
          <Cart images={images} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
