import React, { useState } from 'react'
import { CiSettings } from 'react-icons/ci'


export default function Settings({weatherState, toggleWeatherState, stocksState, toggleStocksState, setNewLocation}) {
    const [dropDown, setDropDown] = useState(false)
    
    function onSettingsClick() {
        setDropDown(!dropDown)
    }

    return (
        <div className='absolute top-[3%] right-[3%] z-100'>
            {
                dropDown ? (
                    <div className='flex flex-col border rounded-xl bg-black/80 px-4 py-2'>
                        <CiSettings size={20} onClick={onSettingsClick} className="flex flex-col absolute top-[5%] right-[5%] text-white hover:scale-110 cursor-pointer duration-200"/>
                        <label for="city" class="block m-1 pt-2 pb-1 text-md font-medium text-white font-lato">City</label>
                        <input onKeyDown={setNewLocation} autocomplete="off" type="city" id="city" aria-describedby="for-weather" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  font-lato focus:outline-none" placeholder="San Diego"></input>
                        <label class="relative inline-flex items-center mt-4 cursor-pointer">
                            {
                                weatherState ? (
                                    <input checked type="checkbox" value="" class="sr-only peer" onClick={toggleWeatherState}/>
                                ) : (
                                    <input type="checkbox" value="" class="sr-only peer" onClick={toggleWeatherState}/>
                                )
                            }
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-200 dark:peer-focus:ring-blue-800/50 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-md font-medium text-white dark:text-gray-300 font-lato font">Weather</span>
                        </label>
                        <label class="relative inline-flex items-center mt-4 pb-2 cursor-pointer">
                            {
                                stocksState ? (
                                    <input checked type="checkbox" value="" class="sr-only peer" onClick={toggleStocksState}/>
                                ) : (
                                    <input type="checkbox" value="" class="sr-only peer" onClick={toggleStocksState}/>
                                )
                            }
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-200 dark:peer-focus:ring-blue-800/50 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-md font-medium text-white dark:text-gray-300 font-lato">Indices</span>
                        </label>
                    </div>
                ) : (
                    <CiSettings size={20} onClick={onSettingsClick} className="text-white hover:scale-110 cursor-pointer duration-200"/>
                )
            }
        </div>
    )
}
