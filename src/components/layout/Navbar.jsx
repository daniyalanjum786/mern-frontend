import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUserDetails } from "../../store/features/user/userSlice";
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = window.localStorage.getItem("userData");
  const userData = JSON.parse(user);
  const handleLogout = async () => {
    try {
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`, {
          withCredentials: true, // Axios automatically sends cookies when using withCredentials
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.success) {
            toast.success(response.data.message, { autoClose: 2000 });
            // Dispatch setUserDetails action to update Redux store with user details
            dispatch(setUserDetails(null));
            window.localStorage.removeItem("userData");
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
    } catch (error) {
      console.error("Login error:", error.response);
    }
  };
  return (
    <>
      <nav className="navbar shadow sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse ms-lg-5 navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <div className="btn-container d-flex ms-md-3">
                {userData ? (
                  <>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                      >
                        Profile
                      </button>
                      <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li>
                          <button className="dropdown-item" type="button">
                            Profile
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            Another action
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleLogout}
                            type="button"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline-dark me-2">
                      Login
                    </Link>
                    <Link to="/register" className="btn btn-outline-secondary">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
