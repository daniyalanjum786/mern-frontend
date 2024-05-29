import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
