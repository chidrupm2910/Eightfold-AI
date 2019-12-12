import React from 'react';
import { connect } from 'react-redux';
import DropDownInput from '../DropDownInput/DropDownInput';
import MovieBubbles from '../MovieBubbles/MovieBubbles'
import './MovieSearch.css';
const MovieSearch = (props) => {
    const { selectedMovieList, errorMsg } = props;

    // Movie Pills and Dropdown Input Section
    return (
        <React.Fragment>
         {errorMsg ? <div className="max-limit">{errorMsg}</div>: null}
         
       {selectedMovieList.length === 5 ? <div className="max-limit">Maximum limit reached - 5</div>: null}
      
        <div className="movie-search-bar" onClick={(event) => {event.stopPropagation()}}>
         <div className="movie-bubbles">
         < MovieBubbles />
        </div>  
       
         <DropDownInput />
        </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    selectedMovieList: state.movies.selectedMovieList,
    errorMsg: state.movies.errorMsg
})

export default connect(mapStateToProps, null)(MovieSearch);