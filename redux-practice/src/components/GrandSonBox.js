import React from 'react'
import { useSelector} from 'react-redux'

const GrandSonBox = () => {
    const number = useSelector((state) => state.number)
    return (
        <div>
            <h1> Hi i', GrandSonBox {number}</h1>
        </div>
    )
}

export default GrandSonBox