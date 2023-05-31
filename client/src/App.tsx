import { useEffect, useState } from 'react'
import './App.css'

interface Product {
  name: string,
  type: string,
  storage: number,
  id: string
}

const App = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/products');
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <nav className='navbar'>
        <h1 className='navbar-brand'>THE MILK STORE</h1>
      </nav>
    </>
  )
}

export default App
