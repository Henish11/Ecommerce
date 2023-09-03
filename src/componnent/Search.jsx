import React from 'react'
import { useState } from 'react'

const Search = ({setProducts,filterProducts}) => {
  const [searchText,setSearchText] = useState('')

  const handleSubmit = (e) =>{
     e.preventDefault()
     const newData = filterProducts.filter((item)=>{
          return item.title.toLowerCase().includes(searchText.toLowerCase())
     })
     setProducts(newData)
  }
  return (
    <div className='searchBar'>
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder='Search Here' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
           <input type="submit" value='Search' />
        </form>

    </div>
  )
}

export default Search