import React  from 'react';
import SimpleCard from '../Card/Card'

const cardListStyle = {
 display: 'flex',
 flexWrap: 'wrap',
} 

const MovieList = (props) => {
   const { movieOfDirector, handleMovieDelete } = props
  return (
    <div style={cardListStyle}>
       {movieOfDirector.map((item, index) => {
         return (
          <SimpleCard
            movieData={item} 
            key={index}
            handleMovieDelete={handleMovieDelete}
            />
         )
       })}
     
    </div>
  );
}

export default MovieList;