import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Login() {
  useDocumentTitle("Login");
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/users/login`,
          inputValue,
          {
            withCredentials: true, // Axios automatically sends cookies when using withCredentials
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            toast.success(response.data.message, { autoClose: 2000 });
            window.localStorage.setItem("user", JSON.stringify(response.data)); // saving user details to local storage
            setTimeout(() => {
              navigate("/");
            }, 3000);
          }
        })
        .catch((error) => {
          if (error.response.data.message) {
            toast.error(error.response.data.message, { autoClose: 2000 });
          }
        });

      setInputValue({});
    } catch (error) {
      console.error("Login error:", error.response);
    }
  };

  return (
    <>
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2 className="text-center py-3">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={inputValue.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={inputValue.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <button className="btn btn-dark">Login</button>
                <span>
                  Do not have an account?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
