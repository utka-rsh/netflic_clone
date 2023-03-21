const API_KEY= "a3887c1b9e9e3cc06b3f26407b8efe71";


const requests={

    fetchTrending:`/trending/all/week?api_key=a3887c1b9e9e3cc06b3f26407b8efe71`,

    fetchPopular:`/movie/popular?api_key=a3887c1b9e9e3cc06b3f26407b8efe71&language=en-US&page=1`,

    fetchNowPlaying:`/movie/now_playing?api_key=a3887c1b9e9e3cc06b3f26407b8efe71&language=en-US&page=1`,

    fetchTopRated:`/movie/top_rated?api_key=a3887c1b9e9e3cc06b3f26407b8efe71&language=en-US&page=1`,

    fetchUpComing:`/movie/upcoming?api_key=a3887c1b9e9e3cc06b3f26407b8efe71&language=en-US&page=1`,

    fetchTvShows:`/tv/top_rated?api_key=a3887c1b9e9e3cc06b3f26407b8efe71&language=en-US&page=1`

    // fetchLatest:`/movie/latest?api_key=a3887c1b9e9e3cc06b3f26407b8efe71&language=en-US`

}

export default requests;