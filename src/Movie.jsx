import React from 'react';
import Empty from './assets/images/poster/Empty.jpg';


const Movie = ({movie: {Title, Year, imdbID, Type , Poster}}) => 
{

  return (
      <div className='card-container' key={imdbID}>
          <div className='poster'>
              <img src={Poster != "N/A" ? Poster : Empty} />
          </div>
          <div className='details-section'>
                <div className='title'>
                    <p>
                        {Title}
                    </p>
                </div>
                <div className='type'>
                    <p>{Type}</p>
                </div>
                <div className='year'>
                    <p>{Year}</p>
                </div>
          </div>
      </div>
  )

}

export default Movie
