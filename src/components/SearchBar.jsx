import React from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'

export default function SearchBar() {
  return (
    <div className='flex text-white col-span-3 justify-center items-center'>
        <form role="search" method="get" id="searchform" class="searchform" action="https://www.google.co.uk/search?hl=en-GB&source=hp&q=" target="_blank">
          <span className='flex flex-row justify-center items-center'>
            <AiOutlineGoogle size={30} className="m-2"/>
            <input type="text" autocomplete="off" name="q" className='font-lato text-lg dark:bg-gray-800/80 bg-white/80 text-black rounded-xl px-4 py-1 dark:text-white shadow-lg shadow-gray-400 justify-center items-center focus:outline-none'></input>
          </span>
        </form>
    </div>
  )
}
