import React from 'react'
import { useState, useEffect } from 'react'

export default function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })


    return (
        <div className='text-white flex m-auto pl-[10%] md:pl-[5%] justify-center items-center invisible md:visible'>
            <h1 className='text-3xl dark:text-white text-white font-bold'>{date.toLocaleTimeString("it-IT", {hour: "2-digit", minute: "2-digit", hour12: false })}</h1>
            {/* <h1 className='text-xl pt-2 pl-5 dark:text-white text-black m-auto justify-center items-center'>{date.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"})}</h1> */}
        </div>
    )
}
