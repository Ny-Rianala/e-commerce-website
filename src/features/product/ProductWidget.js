import React from 'react';

const MAX_STARS = 5
export function ProductWidget({product}) {
const rating = Math.round(Number(product?.rating?.rate)) |0

const numOfStarsGold= Array.apply(null, Array(rating)).map(function () {})
const numOfStarsGray= Array.apply(null, Array(MAX_STARS -rating)).map(function () {})


  return (
    <div className="flex justify-center mt-20">
        <div className="container h-441px min-w-324  pl-12 pt-11 pr-10 pb-24 border w-80 drop-shadow-xl bg-white">
            <div>
                <h1 className="font-medium text-2xl">{product?.title}</h1>
                <h2 className="uppercase font-medium text-base pt-4">{product?.category}</h2>
            </div>
            <div className="pt-10">
                <p className="text-xs">{product?.description}</p>
            </div>
            <div className="flex flex-row justify-between pt-10">
                <div className="flex flex-row">
                    {numOfStarsGold.map(_=><div>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-yellow-300 fill-current hover:text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeLinecap="currentColor"
                      >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    /></svg>
                    </div>)}
                    {numOfStarsGray.map(_=><div> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-yellow-300 hover:text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    /></svg></div>)}
                </div>
                <div>
                  <p className="font-medium text-2xl">
                    {product?.price}
                  </p>

                </div>
            </div>
            <div className="flex flex-row justify-between pt-10 mr-75px">
               <div className="relative inline-block rounded">
                  <input type="number" minLength="01" maxLength="8" size="10" className="w-12 h-8 bg-gray-300 text-white outline-none text-center rounded-sm"/>
               </div>
               <button className="bg-dollarBill text-white text-xs font-semibold rounded py-px pl-5 pr-5">Add to cart</button>
            </div>
        </div>
    </div>
  );
}
