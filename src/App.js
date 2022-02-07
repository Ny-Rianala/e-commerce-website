import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAsync, selectLoading, selectProduct } from './features/product/productSlice';
import { ProductWidget } from './features/product/ProductWidget';

function App() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getProductAsync());
  }, []); 


  return (
    <div>
      <header>
        {loading ? <p className="text-base text-center">Loading...</p> : <ProductWidget product={product}/>}
      </header>
    </div>
  );
}

export default App;
