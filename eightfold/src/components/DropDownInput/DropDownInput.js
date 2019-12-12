import React from 'react';
import { connect } from 'react-redux';
import { movieNameSearch } from '../../store/actions/movieActions';
import { bindActionCreators } from 'redux';
import { UPDATE_DROPDOWN_STATE,UPDATE_SELECTED_MOVIE_LIST } from '../../constants/actionTypes';


const DropDownInput = (props) => {

    const handleChange = (value) => {
        const { movieNameSearch } = props;
        movieNameSearch(value);
    }

   const debounce = (func, delay) => {
        let context = this;
        let timeout;
        return (...args) => {
       
            const key = args[0].target.value;

            const functionCall = () => {
            
                func.call(context, key);
            }
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, delay);
        }
    }
    
    const listItemClicked = (movieName) => {
        const { movies, updateSelectedList } = props;
       const selectedMovieList = [...movies.selectedMovieList]
        if(!(selectedMovieList.includes(movieName)) && movies.selectedMovieList.length < 5) {
            updateSelectedList(selectedMovieList.concat(movieName))
        }
    }
       
       const {movies, updateDropDownState } = props;
        return (
            <div className="movie-dropdown">
            <input onClick={() => {updateDropDownState((movies.dropdownMovieList.length > 0))}} onChange={debounce(handleChange, 200)} type="text" placeholder="Enter title"/>
            { movies.dropdownOpen ? <div className="dropdown">
        {movies.dropdownMovieList.map(movie=> 
        <div onClick={() => {listItemClicked(movie.Title)}} className={(movies.selectedMovieList.includes(movie.Title)) ? "list-item selected" : 'list-item'} key={movie.Title}>
            <div>
                <img alt="No Image" src={movie.Poster}/>
            </div>
       <div className="movie-details">
            <span className="name">{movie.Title}</span>
        <span className="year">{movie.Year}</span>
            </div>
            </div>)}
            </div>
             : null}
           </div>
        )
}

const mapStateToProps = state => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({movieNameSearch}, dispatch),
    updateDropDownState: (dropdownOpen) => dispatch({ type: UPDATE_DROPDOWN_STATE, dropdownOpen}),
    updateSelectedList: (selectedMovieList) => dispatch({ type: UPDATE_SELECTED_MOVIE_LIST, selectedMovieList})
})
export default connect(mapStateToProps,mapDispatchToProps)(DropDownInput);