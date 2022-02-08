import React from 'react';
import NumericInput from 'react-numeric-input';
import StarIcon from '../../assets/StarIcon';

const MAX_STARS = 5;
export function ProductWidget({ product }) {
  const rating = Math.round(Number(product?.rating?.rate)) | 0

  const goldStars = new Array(rating).fill('#ECDB75')
  const grayStars = new Array(MAX_STARS - rating).fill("#DED6D5")
  const allStars =  goldStars.concat(grayStars);
  return (
    <div className=" bg-#fbebee">
      <div className="container mx-auto bg-backgroundContainer h-470px min-w-324px w-344px pt-10 pl-12 pb-24 pr-12 drop-shadow-xl">
        <div>
          <h1 className="font-bold text-2xl text-headingColor">{product?.title}</h1>
          <h2 className="uppercase text-xs font-extrabold text-subHeadingColor pt-3">{product?.category}</h2>
        </div>
        <div className="pt-6">
          <p className="text-paragraphColor font-medium text-0.6rem">{product?.description}</p>
        </div>
        <div className="flex flex-row justify-between pt-12">
          <div className="flex flex-row">
            {allStars.map((color, i) => <div key={`${i}-${color}-${product?.id}`}>
            <StarIcon starColor={color}/>
            </div>)}
          </div>
          <p className="text-0.6rem text-paragraphColor">
            {`(${product?.rating?.rate} - ${product?.rating?.count} reviews)`}
          </p>
          <p className="font-bold text-2xl -mt-8px text-headingColor">
              {`$${product?.price}`}
          </p>
        </div>
        <div className="flex flex-row pt-8 pt-11">
          <div className="relative inline-block rounded">
            <NumericInput noStyle={false} min={0} max={100} value={1} format={itemNumberFormat}
             style={numberInputStyle}
              className="w-12 h-8 bg-gray text-red outline-none text-center rounded-sm pt-0.5 pb-0.5" />
          </div>
          <button onClick = {() => alert('Add to cart not implemented')} className="bg-dollarBill text-white text-xs font-semibold rounded py-px pl-6 pr-6 ml-2">Add to cart</button>
        </div>
        <p className="text-0.6rem text-paragraphColor mt-7">
          (*Lorem ipsum dolor sit amet,faucibus consectetur amet,faucibus consectetur,faucibus.)
        </p>
      </div>
    </div>
  );
}

const numberInputStyle = {
  input: {
    paddingRight: '2ex',
    boxSizing   : 'border-box',
    fontSize    : '1.25ex',
    color: 'white',   
  },
  btn: {
    position: 'absolute',
    right: 2,
    width: '2.26ex',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.1s',
    background: 'none',
    borderColor: 'none',
    borderStyle: 'none',
    boxShadow: 'none',
    textColor: 'white'

  },
  arrowUp: {
    position   : 'absolute',
    top        : '95%',
    left       : '50%',
    width      : 0,
    height     : 0,
    borderWidth:'0 0.3ex 0.3ex 0.3ex',
    borderColor: 'transparent transparent rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    margin     : '-0.3ex 0 0 -0.56ex'
  },
  arrowDown: {
    position   : 'absolute',
    top: '30%',
    left: '50%',
    width      : 0,
    height     : 0,
    borderWidth: '0.3ex 0.3ex 0 0.3ex',
    borderColor: 'rgba(255, 255, 255, 1) transparent transparent ',
    borderStyle: 'solid',
    margin     : '-0.4ex 0 0 -0.56ex'
  },
}

const itemNumberFormat = (num) => {
  if (num < 10) {
    return `${0}${num}`
  }
  return num;
}