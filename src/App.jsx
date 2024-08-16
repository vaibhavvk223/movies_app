
import { useEffect } from 'react';
import Movie from './Movie';
import './App.css'
import Search from './assets/images/search/search.png';
import Logo from './assets/images/logo/Logo.png';
import { useState } from 'react';

//  omdbapi.com/aspikey.aspx
//  bb29156b 38ee4952

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=38ee4952';


const App = () =>
{

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);

}

  useEffect(() => 
  {
    searchMovies('galaxy')
  }, []);

  return (

    <div className='App'>
      <div className='logo'>
        <img src={Logo} alt="Movie Logo" />
      </div>
      <div className='search-bar'>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Enter movie name' />
        <img src={Search} alt="search_icon" onClick={() => searchMovies(search)} />
      </div>

      <div className='card-section'>
      {
        movies?.length > 0 ?
          (    
                movies.map((movie, i) => <Movie movie={movie} key={i} />)            
          ) 
          : 
          (
            
              <div className='not-found' style={{height: '100vh'}}>
                <p>Movies not found</p>
              </div>
           
          )
      }
      </div>

    </div>

  )
}

export default App
