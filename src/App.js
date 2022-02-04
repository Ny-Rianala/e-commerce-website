import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsync, selectProduct } from './features/product/productSlice';
import { ProductWidget } from './features/product/ProductWidget';

function App() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductAsync());
  }, []); 


  return (
    <div>
      <header>
        <ProductWidget product={product}/>
      </header>
    </div>
  );
}

export default App;
