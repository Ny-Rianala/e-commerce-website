import React from 'react';

const MAX_STARS = 5
export function ProductWidget({product}) {
const rating = Math.round(Number(product?.rating?.rate)) |0

const numOfStarsGold= Array.apply(null, Array(rating)).map(function () {})
const numOfStarsGray= Array.apply(null, Array(MAX_STARS -rating)).map(function () {})


  return (
    <div className="flex justify-center mt-28">
        <div className="container h-441px min-w-324  pl-12 pt-11 pr-10 pb-28 border w-80 drop-shadow-xl bg-white">
            <div>
                <h1 className="font-medium text-2xl">{product?.title}</h1>
                <h2 className="uppercase font-medium text-base pt-4">{product?.category}</h2>
            </div>
            <div className="pt-10">
                <p className="text-xs">{product?.description}</p>
            </div>
            <div className="flex flex-row justify-between pt-10">
                <div className="flex flex-row">
                    {numOfStarsGold.map(_=><div>x</div>)}
                    {numOfStarsGray.map(_=><div>O</div>)}
                </div>
                <p>
                  {product?.price}
                </p>
            </div>
            <div>
               <button>01</button>
               <button>Add to cart</button>
            </div>
        </div>
    </div>
  );
}
