import React from 'react'
import { assets } from '../../assets/assets'

const SearchBar = () => {
  return (
    <form><img src={assets.search_icon} className='md:w-auto w-10 px-3' alt="" /></form>
  )
}

export default SearchBar