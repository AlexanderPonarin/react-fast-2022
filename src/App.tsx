import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Product } from './components/product';
import { IProduct } from './models';

function App() {

  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoadidng] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoadidng(true)
      const response = await axios.get<IProduct[]>('https://fakestoreap.com/products')
      setProducts(response.data)
      setLoadidng(false)
    } catch(e) {

    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto max-w-2xl pt-5" >
      {loading && <p className="text-center">Loading...</p>}
      {products.map(product => <Product product={product} key={product.id}/> )}

    </div>
 );
}

export default App;
