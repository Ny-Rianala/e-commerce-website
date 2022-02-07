import React from 'react';
import NumericInput from 'react-numeric-input';

const MAX_STARS = 5
export function ProductWidget({ product }) {
  const rating = Math.round(Number(product?.rating?.rate)) | 0

  const numOfStarsGold = Array.apply(null, Array(rating)).map(function () { })
  const numOfStarsGray = Array.apply(null, Array(MAX_STARS - rating)).map(function () { })
  function myFormat(num) {
    if (num < 10) {
      return `${0}${num}`
    }
    return num;
  }

  return (
    <div className=" bg-#fbebee">
      <div>
        <div className="container mx-auto bg-backgroundContainer h-441px min-w-324 w-80 pl-12 pt-11 pr-10 pb-24 drop-shadow-xl">
          <div>
            <h1 className="font-medium text-2xl text-headingColor">{product?.title}</h1>
            <h2 className="uppercase font-medium text-subHeadingColor pt-2">{product?.category}</h2>
          </div>
          <div className="pt-6">
            <p className="text-paragraphColor text-base">{product?.description}</p>
          </div>
          <div className="flex flex-row justify-between pt-12">
            <div className="flex flex-row">
              {numOfStarsGold.map((_, i) => <div key={`${i}-gold-${product?.id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-#ECDB75"
                  fill="#ECDB75"
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
              {numOfStarsGray.map((_, i) => <div key={`${i}-gray-${product.id}`}> <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-#DED6D5"
                fill="#DED6D5"
                viewBox="0 0 24 24"
                stroke="#DED6D5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                /></svg></div>)}
            </div>
            <div className="flex flex-row justify-between">
              {`${product?.rating?.rate} - ${product?.rating?.count} reviews`}
            </div>
            <div>
              <p className="font-medium text-2xl">
                {`$${product?.price}`}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-8 mr-75px">
            <div className="relative inline-block rounded">
              <NumericInput noStyle={false} min={0} max={100} value={1} format={myFormat} style={{
                btn: {
                  position: 'absolute',
                  right: 2,
                  width: '2.26ex',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.1s',
                  background: 'rgba(0,0,0,.1)',
                  borderColor: 'none',
                  borderStyle: 'none',
                  boxShadow  : 'none'

                }, input: {
                  color: 'blue'
                },
              }}
                className="w-14 h-8 bg-gray text-white outline-none text-center rounded-sm" />
            </div>
            <button className="bg-dollarBill text-white text-xs font-semibold rounded py-px pl-5 pr-5">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
