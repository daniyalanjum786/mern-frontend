import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ToastContainer } from "react-toastify";
import Profile from "./components/pages/Profile";
import { rehydrateUserDetails } from "./store/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  // In your application initialization logic (e.g., in your main App component)
  const dispatch = useDispatch();
  useEffect(() => {
    // Check if there is any persisted user data in local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      // Dispatch the rehydration action to restore user data to the Redux store
      dispatch(rehydrateUserDetails(JSON.parse(storedUserData)));
    }
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
