import React from 'react';
export function ProductWidget({product}) {


  return (
    <div>
        <div className="container min-h-300 mx-100 p-5 border w-80 drop-shadow-xl bg-white">
            <div>
                <h1 className="font-medium text-2xl">{product?.title}</h1>
                <h2 className="uppercase font-medium text-base pt-4">{product?.category}</h2>
            </div>
            <div className="pt-6 pb-10">
                <p className="text-xs">{product?.description}</p>
            </div>
        </div>
    </div>
  );
}
