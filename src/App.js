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
    <div className="grid place-items-center h-screen bg-cover bg-center"
     style={{

       "background-image": `linear-gradient(rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 1)), url(${product?.image})`}}>
        {loading ? <p className="text-base text-center">Loading...</p> : <ProductWidget product={product}/>}   
    </div>
  );
}

export default App;
