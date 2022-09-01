// useParams => url 중 변경되는 값을 보여준다.
import { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"

function Details(){
    const [detailMovie , setDetailMovie] = useState([]) 
    const { id } = useParams()
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setDetailMovie(json.data.movie)
    }
    console.log(detailMovie)
    useEffect (() => {
        getMovie()
    },[])
    return <div>
        <h1>Detail of {detailMovie.title}</h1>
        <img src={`${detailMovie.medium_cover_image}`} alt={`${detailMovie.id}`}/>
    </div>
}
export default Details