import axios from 'axios';
import { UPDATE_MOVIE_TITLES_FROM_SEARCH, UPDATE_ERROR_MESSAGE } from '../../constants/actionTypes';

export const movieNameSearch = (movie) => {
    const url = `http://www.omdbapi.com/?apikey=818b96a1&s=${movie}`;

   return dispatch => axios.get(url)
    .then(response => {
        dispatch({ type: UPDATE_MOVIE_TITLES_FROM_SEARCH,
             dropdownMovieList: (response.data.Response.toLowerCase() === 'true') ? response.data.Search : [],
             errorMsg: (response.data.Error) ? response.data.Error : ''
            });
    })
    .catch(() => {
        dispatch({ type: UPDATE_ERROR_MESSAGE, errorMsg: 'Server is unavailable'})
    })
}