import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from './axios'
import Flipmove from 'react-flip-move'

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);

  return (
    <div className='results'>
        <Flipmove>
        {movies.map((movie) => (
           <VideoCard key={movie.id} movie={movie}/>
        ))}
        </Flipmove>
        
        
    </div>
  );
}

export default Results