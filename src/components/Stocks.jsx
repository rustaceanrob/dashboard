import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Stocks({visibility}) {
    const stockList = ["SPX", "RUT", "NDX", "VIX"] // "RUT", "DIJA", "NDX", "BTC"
    const [prices, setPrices] = useState({})

    useEffect(() => {
        let config = {
            method: 'post',
            url: '/api/indices'
        }
        axios(config).then((response) => {
            setPrices(response.data)
        }).catch((error) => {
            setPrices({})
        })
    }, [])

    return (
        <div className='text-white m-auto hidden md:flex'>
                {
                    visibility ? (
                        <div>
                            {
                                prices ? (
                                    <div className='ml-20'>
                                        {stockList.map((stock) => {
                                            return (
                                                <div className='flex flex-row grid grid-cols-2 justify-center items-center'>
                                                    <h1 className='text-white font-bold'>{stock}</h1>
                                                    {
                                                        prices[stock] === "NaN" || prices[stock] === undefined ? (
                                                            <div className="animate-pulse rounded-xl bg-slate-200 flex w-10 h-4"></div>
                                                        ) : (
                                                            <div className="flex flex-row w-10">{prices[stock]}</div>
                                                        )
                                                    }
                                                </div> 
                                            )
                                        })}
                                    </div>
                                )   : (
                                    <div className='ml-20'>
                                        {stockList.map((stock) => {
                                            return (
                                                <div className='flex flex-row grid grid-cols-2 justify-center items-center'>
                                                    <h1 className='text-white font-bold'>{stock}</h1>
                                                    <div className="animate-pulse rounded-xl bg-slate-200 flex w-10 h-4"></div>
                                                </div> 
                                            )
                                        })}
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <div></div>
                    )
                }
        </div>
    )
}
