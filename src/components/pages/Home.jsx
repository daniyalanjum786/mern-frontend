import Product from "../Product";
import useDocumentTitle from "../../hooks/useDocumentTitle.js";

function Home() {
  // setting title
  useDocumentTitle("Home");
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
            <Product />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
