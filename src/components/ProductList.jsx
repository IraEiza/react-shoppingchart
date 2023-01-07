import React, {useState} from 'react';
import '../assets/css/ProductList.css';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductList = ({ products, addToChart }) => {

  const [productList, setProductList] = useState(products)

  const searchFilter = (input) => {
    if (input === '') {
      setProductList(products)
    }
    else {
      setProductList(products.filter(product => product.name.toUpperCase().includes(input.toUpperCase())))
    }
  }

  return (
    <div className="product-list">
      <SearchBar searchFilter={searchFilter} />
      {productList.map(product => (
        <div key={product.product_id}>
        <ProductCard product={product} addToChart={addToChart} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;