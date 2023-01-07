import './assets/css/App.css';
import NavBar from './components/NavBar';
import Total from './components/Total';
import ProductList from './components/ProductList';
import Mercadona from './assets/data/datamarket_productos_de_supermercados_2023_01_mercadona.json'
import { useState, useEffect } from 'react';

function App() {

  const products = Mercadona.slice(0, 10)
  const [prodInChart, setProdInChart] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  /* Add product to chart */

  const addToChart = (id, quantity) => {

    let inChart = false;

    prodInChart.forEach(product => {
      if (Object.values(product).includes(id)) {
        inChart = true;
      }
    })

    if (inChart === true) {
      setProdInChart(
        prodInChart.map(product => {
          if (product.product_id === id) {
            product.quantity += Number(quantity);
          }
          return product
        })
      )
    }
    else {
      const newProduct = products.filter(product => product.product_id === id)
      newProduct[0].quantity = Number(quantity)
      setProdInChart([...prodInChart, ...newProduct])
    }
  }

  /* Remove product in chart */

  const removeFromChart = (id) => {
    setProdInChart(
      prodInChart.filter(product => product.product_id !== id)
    )
  }  

  /* Update subtotal */

  useEffect(() => {
    setSubtotal(prodInChart.reduce((acc, curr) => Math.round((acc + Number(curr.price * curr.quantity)) * 100) / 100, 0))
  }, [prodInChart])

  return (
    <div className="App">
      <NavBar />
      <Total prodInChart={prodInChart} subtotal={subtotal} removeFromChart={removeFromChart}/>
      <ProductList products={products} addToChart={addToChart} />
    </div>
  );
}

export default App;
