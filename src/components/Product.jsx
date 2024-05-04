import { Link } from "react-router-dom";

function Product() {
  // TODO: for star rating feature 5:11:39
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-3">
          <Link className="text-decoration-none">
            <div className="card">
              <img
                src="https://picsum.photos/200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
