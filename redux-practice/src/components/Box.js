import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

const Box = () => {
    const number = useSelector((state) => state.number)
    return (
        <div>
            <h1>BOX : {number}</h1>
            <GrandSonBox/>
        </div>
    )
}

export default Box