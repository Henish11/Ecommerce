import React, { useEffect, useState } from 'react'

const Filter = ({products,setProducts,filterProducts}) => {

  console.log(products);
  const [range,setRange] = useState(1400)

   const newPRoducts = products.filter((item)=>{
        return item.price < range
   })
   useEffect(()=>{
    setProducts(newPRoducts)
   },[range])

  //  Price
  const allPrices = filterProducts.map(element => {
     return element.price
  });
  const maxPrice = Math.max(...allPrices)
  const minPrice = Math.min(...allPrices)

  return (
    <div className='filterWrap'>
        <div className="slider">
            <input type="range" min={minPrice + minPrice} max={maxPrice} value={range} onChange={(e)=>{setRange(e.target.value)}}/>
            <output className="bubble">{range}</output>
        </div>
    </div>
  )
}

export default Filter