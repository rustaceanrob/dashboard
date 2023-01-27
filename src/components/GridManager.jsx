import React, { useEffect, useState } from 'react'
import Clock from './Clock'
import LinkDirectory from './LinkDirectory'
import SearchBar from './SearchBar'
import Weather from './Weather'
import Stocks from './Stocks'
import Settings from './Settings'


export default function GridManager() {
    const [location, setLocation] = useState("San Diego")
    const [showWeather, setShowWeather] = useState(true)
    const [showStocks, setShowStocks] = useState(true)

    useEffect(() => {
        const storedWeather = localStorage.getItem('weatherToggle')
        if (storedWeather) {
            setShowWeather(JSON.parse(storedWeather))
        } 
        const storedStocks = localStorage.getItem('stockToggle')
        if (storedStocks) {
            setShowStocks(JSON.parse(storedStocks))
        } 
        const storedLocation = localStorage.getItem("location")
        if (storedLocation) {
            setLocation(storedLocation)
        } 
    },[location])

    function toggleWeather() {
        setShowWeather(!showWeather)
        const stored = showWeather ? "false" : "true"
        localStorage.setItem('weatherToggle', stored)
    } 

    function toggleStocks() {
        setShowStocks(!showStocks)
        const stored = showStocks ? "false" : "true"
        localStorage.setItem('stockToggle', stored)
    } 

    function newLocation(e) {
        if (e.key === "Enter") {
            setLocation(e.target.value)
            localStorage.setItem("location", e.target.value)  
        }
    }

    return (
        <div className='absolute top-0 left-0 p-16 grid md:grid-cols-3 grid-cols-1 gap-4 z-1 w-screen h-screen items-center justify-between'>
            <Weather location={location} visibility={showWeather}/>
            <Clock/>
            <Stocks visibility={showStocks}/>
            <SearchBar/>
            <LinkDirectory/>
            <Settings weatherState={showWeather} toggleWeatherState={toggleWeather} stocksState={showStocks} toggleStocksState={toggleStocks} setNewLocation={newLocation}/>
        </div>
    )
}
