import React, { useState } from 'react';
import '../assets/css/ProductCard.css';

const ProductCard = ({ product, addToChart }) => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={require("../assets/images/item_image2.jpg")} className="card-img-top" alt="Item"></img>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price} €/unit</p>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1" max="100"
          step="1"
          value={quantity}
          onChange={event => setQuantity(event.target.value)}
        ></input>
      </div>
      <button className="btn btn-primary" onClick={() => addToChart(product.product_id, quantity)}>Add to chart</button>
    </div>
  );
}

export default ProductCard;