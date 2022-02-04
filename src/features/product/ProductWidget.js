import React, { useState } from 'react';
import { useSelector} from 'react-redux';




import { selectProduct } from '../product/productSlice';

export function ProductWidget() {
  const product = useSelector(selectProduct);

  return (
    <div>
      <div className="text-3xl font-bold underline">
        {product?.title}
      </div>
    </div>
  );
}
