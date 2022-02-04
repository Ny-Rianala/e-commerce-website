import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getProductAsync } from './features/product/productSlice';
import { ProductWidget } from './features/product/ProductWidget';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <ProductWidget />
        <button
          onClick={() => dispatch(getProductAsync())}
        >
          Fetch product
        </button>
      </header>
    </div>
  );
}

export default App;
