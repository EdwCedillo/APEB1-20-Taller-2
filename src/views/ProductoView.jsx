import React from "react";
import "./ProductoView.css";

function ProductoView({ producto: producto }) {
  return (
    <div className="ProductoView">
      <h1>{producto.name}</h1>
      <h2>{producto.description}</h2>
      <img src={producto.image} alt={producto.name + " image"} />
    </div>
  );
}

export default ProductoView;