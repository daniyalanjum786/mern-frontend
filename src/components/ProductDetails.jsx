// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useEffect } from "react";
import { fetchProductDetailsAsync } from "../store/features/productDetails/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function ProductDetails() {
  const dispatch = useDispatch();
  const { productDetails, status } = useSelector(
    (state) => state.productDetails
  );
  console.log(productDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetailsAsync(id));
  }, [dispatch, id]);

  return (
    <>
      {status == "loading" ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-6 bg-info">
              <Swiper className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </div>
            <div className="col-md-6 bg-warning">
              {/* <h2>{product.name}</h2>
              <h2>{product.description}</h2>
              <h3>{product.price}</h3>
              <h3>{product.category}</h3> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
