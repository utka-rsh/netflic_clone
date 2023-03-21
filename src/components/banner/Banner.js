import React, { useEffect, useState }  from 'react'
import axios from '../../axios'
import requests from '../../requests';
import "../banner/Banner.css"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

const Banner = () => {



    const [movie,setMovie]= useState([]);

    const [trailerUrl,setTrailerUrl]= useState("");




useEffect(()=>{
    async function updateData(){
        const request = await axios.get(requests.fetchTrending);

        const random =Math.random();
        console.log(random)

        const totalMovie = request.data.results.length;
        console.log(totalMovie)


        setMovie(request.data.results[ Math.floor(random * totalMovie - 1)]);
        return request;
    } 
    updateData()
},[])

// console.log(movie)

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...":str;
    }

// youtbe section

const opts = {
    height: '670',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


//   end

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
<>

{trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}






    <header className='banner' 
    style={{
      backgroundSize:"cover",
      backgroundImage:`url(
          "https://themoviedb.org/t/p/original${movie?.backdrop_path}"
      )`,
      backgroundPosition:"center center",
   
    }}
    >
      <div className="banner__content">
          <h1 className='banner__title'>
              {movie?.name || movie?.title || movie?.original_name}</h1>
  
          <div className="banner__buttons">
  
              <button onClick={()=>handleClick(movie)} className="banner__button">Play/Stop</button>
              <button className="banner__button">Add to list</button>
          </div>
  
          <h1 className="banner__description">
              {truncate(movie?.overview,150)}
          </h1>
  
  
      </div>
      <div className="banner__fadebottom"></div>
  
    
  
  
    </header>

  </>

  )
}

export default Banner