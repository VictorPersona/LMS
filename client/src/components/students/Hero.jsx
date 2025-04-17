import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-5xl md:leading-tight text-3xl leading-tight relative font-bold text-gray-800 max-w-3xl mx-auto">
        Empower your future with courses designed to then
        <span className="text-blue-600"> fit your choice</span>
        <img
          src={assets.sketch}
          className="md:block hidden absolute bottom-7 right-0"
          alt=""
        />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde non
        tempora soluta adipisci omnis, tenetur odit sunt eos voluptatem fugiat
        deleniti vitae ad, cupiditate expedita debitis velit nulla
        necessitatibus temporibus.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto text-base">
        lorem
      </p>
      <SearchBar/>
    </div>
  )
}

export default Hero
