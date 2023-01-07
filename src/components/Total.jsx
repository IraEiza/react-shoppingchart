import React from 'react';
import '../assets/css/Total.css';

const Total = ({ prodInChart, subtotal, removeFromChart }) => {

  return (
    <div className="contain">
      <h3>Subtotal: {subtotal} €</h3>
      <ul>
        {prodInChart.map(product => {
          return (
            <div key={product.product_id}>
              <li >{product.name} x{product.quantity}</li>
              <button className="btn btn-light btn-sm" onClick={() => removeFromChart(product.product_id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default Total;