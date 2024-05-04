import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Register() {
  useDocumentTitle("Register");
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
          `${import.meta.env.VITE_BASE_URL}/api/v1/users/create`,
          inputValue
        )
        .then((response) => {
          if (response.data.success) {
            toast.success(response.data.message, { autoClose: 2000 });
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.message) {
            toast.error(error.response.data.message, { autoClose: 2000 });
          }
        });

      setInputValue({});
    } catch (error) {
      console.error("Register error:", error.response);
    }
  };
  return (
    <>
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2 className="text-center py-3">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  onChange={handleChange}
                  value={inputValue.name || ""}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  onChange={handleChange}
                  value={inputValue.email || ""}
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
                  onChange={handleChange}
                  value={inputValue.password || ""}
                />
              </div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <button className="btn btn-dark">Register</button>
                <span>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark fw-semibold"
                  >
                    Login
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

export default Register;
