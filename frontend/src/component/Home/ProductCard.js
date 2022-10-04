import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const productCard = ({ product }) => {
  const options = {
    color: "rgba(20,20,20,0.1)",
    size: "small",
    value: product.ratings,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <div className="productCardimgdiv">
        <img src={product.images[0].url} alt={product.name} />
      </div>
      <p>{product.name}</p>
      <div>
        <Rating name="read-only" {...options} readOnly />
        <span className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default productCard;
