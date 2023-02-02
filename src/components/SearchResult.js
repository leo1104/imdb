import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchResult() {
  const {movie} = useParams();
  const url =`https://imdb-api.com/en/API/Search/k_uy8055ru/${movie}`

const [data, setData] = useState();
useEffect(() => {
  async function fun1() {
    const response =await axios.get(url)
    console.log(response);
    setData(response);
  }
fun1();
}, [url])


//what will I get in my console?
// The executed statement(JSOn) ro the url path itself
//extract image and title and show to user
  return (
    <div className='movieCards'>
        <div className='movieCard'>
            <Link className='movieCardLink' to='/'>
                <img src='null' alt='movie img' className='movieCardImg' />
                <h1 className='movieCardTitle'>Avengers</h1>
                
            </Link>
        </div>
    </div>
  )
}

export default SearchResult