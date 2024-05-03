import axios from "axios";
import { useEffect } from "react";
function Home() {
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/profile`,
        {
          withCredentials: true, // Axios automatically sends cookies when using withCredentials
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User details:", response);
      console.log("User details:", response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <main>
        <section
          id="banner"
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="text-center">
            <h2 className="text-center my-5">Welcome to Our Website</h2>
            <button className="btn btn-outline-dark">Shop Now</button>
          </div>
        </section>
        <h2 className="text-center py-5 fw-semibold">Our Latest Products</h2>
        <section id="featured-products">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="card">
                  <img
                    src="https://picsum.photos/200"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
