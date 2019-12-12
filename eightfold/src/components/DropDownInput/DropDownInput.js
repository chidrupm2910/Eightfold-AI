import React from 'react';
import { connect } from 'react-redux';
import { movieNameSearch } from '../../store/actions/movieActions';
import { bindActionCreators } from 'redux';
import { UPDATE_DROPDOWN_STATE,UPDATE_SELECTED_MOVIE_LIST } from '../../constants/actionTypes';
import Input from '../../common/Input';
import DropdownListItem from '../../common/DropdownlListItem';

const DropDownInput = (props) => {

    const handleChange = (value) => {
        const { movieNameSearch } = props;
        if(value.length > 0) {
        movieNameSearch(value);
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
            <Input clickCallBack={() => {updateDropDownState((movies.dropdownMovieList.length > 0))}} callBack={(value) => {handleChange(value)}} placeholder="Enter Movie Title..." type="text"/>
            { movies.dropdownOpen ? <div className="dropdown">
        {movies.dropdownMovieList.map(movie=> 
            <DropdownListItem key={movie.Title} selectedMovieList={movies.selectedMovieList} movie={movie} clickedCallBack={(title) => {listItemClicked(title)}} />
            )}
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