import { Link } from "react-router-dom";
function Product({ product }) {
  // TODO: for star rating feature 5:11:39
  return (
    <>
      <Link className="text-decoration-none" to={`/product/${product._id}`}>
        <div className="card">
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6>{product.category}</h6>
            <p className="card-text">{product.description}</p>
            <p>${product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
