import useDocumentTitle from "../hooks/useDocumentTitle.js";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../store/features/product/productSlice.js";
import Loading from "../components/Loading.jsx";

function Home() {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const { productsArr, pageSize, page, total, success } = products;

  // setting title
  useDocumentTitle("Home");
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <>
      {status == "loading" ? (
        <Loading />
      ) : (
        <main>
          <section
            id="banner"
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
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
                {productsArr &&
                  productsArr.map((product) => {
                    return (
                      <div key={product._id} className="col-lg-4 col-md-6 mb-3">
                        <Product product={product} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Home;
