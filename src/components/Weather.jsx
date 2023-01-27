import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Weather({location, visibility}) {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        console.log('loading or state change')
        const storedLocation = localStorage.getItem("location")
        if (storedLocation) {
            location = storedLocation
        } 
        let data = {
            "city": location,
        }
        let config = {
            method: 'post',
            url: '/api/weather',
            data: data
        }
        axios(config).then((response) => {
            if (response.data === "error") {
                setWeather({})
            } else {
                setWeather(response.data)
            }
        }).catch((error) => {
            console.log("error from client for weather")
        })
    }, [location])

    return (
        <div className='m-auto hidden items-start md:flex'>
            {
                visibility ? (
                    <div>
                        {
                            weather && weather.name !== undefined ? (
                                <div className="">
                                    <div className="text-white uppercase font-bold text-md">
                                        <p>{weather.name}</p>
                                    </div>
                                    <div className="text-white uppercase font-bold text-md">
                                        {weather.main ? <h1>{weather.main.temp.toFixed()} °F</h1> : null}
                                    </div>
                                    <div className="text-white uppercase text-sm pt-4">
                                        {weather.weather ? <p>{weather.weather[0].description}</p> : null}
                                    </div>
                                    <div className="text-white uppercase text-sm">
                                        {weather.main ? <p>Feels like {weather.main.feels_like.toFixed()}°F</p> : null}
                                    </div>
                                    <div className="text-white uppercase text-sm">
                                        {weather.main ? <p>Humidity: {weather.main.humidity}</p> : null}
                                    </div>
                                </div>      
                            ) : (
                                <div className="animate-pulse">
                                    <div className="rounded-xl bg-slate-200 flex w-20 h-4 m-2"></div>
                                    <div className="rounded-xl bg-slate-200 flex w-20 h-2 m-2"></div>
                                    <div className="rounded-xl pt-2"></div>
                                    <div className="rounded-xl bg-slate-200 flex w-20 h-2 m-2"></div>
                                    <div className="rounded-xl bg-slate-200 flex w-20 h-2 m-2"></div>
                                    <div className="rounded-xl bg-slate-200 flex w-20 h-2 m-2"></div>
                                </div> 
                            )
                        }
                     </div>

                ) : (
                    <div>
                    </div>
                )
            }
        </div>
    )
}
