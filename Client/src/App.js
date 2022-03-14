import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Images
import img1 from "./Images/airePods.jpg";
import img2 from "./Images/camera.jpg";
import img3 from "./Images/laptop.jpg";
import img4 from "./Images/shoes.jpg";
import store from "./store/store";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar/Navbar";


function App() {
  let images = [img1, img2, img3, img4];
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home images={images} />} exact />
              <Route path="/orders" element={<Orders images={images} />} exact />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
