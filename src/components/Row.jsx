import { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css'

function Row({title, fetchurl}) {
    const [allMovies,setAllMovies]=useState();
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData = async () => {
        const response=await instance.get(fetchurl);
        console.log(response);
        setAllMovies(response.data.results)
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log("===all movies===");
    console.log(allMovies);
    return (
        <div className="row">
            <h2 style={{ color: "white" }}>{title}</h2>
            <div className="movie-row">
                {
                    // allMovies?.map(item => (
                        allMovies?.map(movie=>(
                        <img className="movie" src={`${base_url}${movie.poster_path}`} alt="no-image" />
                    ))
                }

            </div>
        </div>
    )
}
export default Row;