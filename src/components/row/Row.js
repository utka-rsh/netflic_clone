import React, { useState , useEffect} from 'react'
import axios from '../../axios';
import  "../row/Row.css"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

const baseURL="https://themoviedb.org/t/p/original"

const Row = ({titleName, fetchURL , isLargeRow}) => {

    const [movies,setMovies]= useState([]);

    const [trailerUrl,setTrailerUrl]= useState("")

// let {title}= movies;

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]);

   

    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick= (movie)=>{
         if(trailerUrl){
            setTrailerUrl("");
        } else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url)=>{

                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=> console.log(error));
        }

    };


  return (
    <div className='row'>
        <h2>{titleName}</h2>

        <div className="row__posters">
    {movies.map(movie=>(
        <img
        key={movie.id}
        onClick={()=>handleClick(movie)}
         className={`row__poster ${isLargeRow && "row_posterLarge"}`}
         src={`${baseURL}${isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
    ))}
        </div>
        
       {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row