import React from 'react';

const DropdownListItem = (props) => {

    const { movie, selectedMovieList, clickedCallBack} = props;
    return (
        <div onClick={() => { clickedCallBack(movie.Title)}} className={(selectedMovieList.includes(movie.Title)) ? "list-item selected" : 'list-item'} key={ movie.Title}>
        <div>
            <img alt="No Image" src={movie.Poster}/>
        </div>
   <div className="movie-details">
        <span className="name">{ movie.Title}</span>
    <span className="year">{movie.Year}</span>
        </div>
        </div>
    )
}

export default DropdownListItem;