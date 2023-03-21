import React from "react";
import Row from "./components/row/Row";
import './App.css';
import requests from "./requests";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">

<Navbar/>      

{/* banner start */}

    <Banner/>

{/* banner end */}

      {/* row component start */}
      <Row isLargeRow titleName="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row titleName="Popular" fetchURL={requests.fetchPopular}/>
      <Row titleName="NowPlaying" fetchURL={requests.fetchNowPlaying}/>
      <Row titleName="TopRated" fetchURL={requests.fetchTopRated}/>
      <Row titleName="UpComing" fetchURL={requests.fetchUpComing}/>
      <Row titleName="TV Shows" fetchURL={requests.fetchTvShows}/>

{/* row component end */}

    </div>
  );
}

export default App;
