import React, { useEffect, useState } from 'react'
import Light from "../assets/images/desert.jpeg"
import Dark from "../assets/images/forrest3.jpeg"

export default function BackgroundImg({mode}) {
    const [image, setImage] = useState()
    useEffect(() => {
        if (mode === "dark") {
            setImage(Dark)
        } else {
            setImage(Light)
        }
    }, [mode])

    return (
        <img src={image} className="flex relative flex-col w-full h-screen object-cover z-[-1]"/>
    )
}
