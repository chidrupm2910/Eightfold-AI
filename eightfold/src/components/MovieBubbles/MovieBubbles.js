import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_SELECTED_MOVIE_LIST } from '../../constants/actionTypes';

const MovieBubble = (props) => {
    const { selectedMovieList } = props;

    const deleteMovie = (movie) => {
        const {selectedMovieList,  updateSelectedList} = props
        updateSelectedList(selectedMovieList.filter(el=> el !== movie));
    }
    return (
        <React.Fragment>
            {selectedMovieList.map(movie => 
                 <div className="movie-bubble">
                 <span>{movie}</span>
                 <span onClick={() => {deleteMovie(movie)}}><i className="fa fa-close" /></span>
              </div>
                )}
       
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    selectedMovieList: state.movies.selectedMovieList
});

const mapDispatchToProps = dispatch => ({
    updateSelectedList: (selectedMovieList) => dispatch({ type: UPDATE_SELECTED_MOVIE_LIST, selectedMovieList})
})
export default connect(mapStateToProps,mapDispatchToProps)(MovieBubble);