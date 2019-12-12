import { UPDATE_MOVIE_TITLES_FROM_SEARCH,
        UPDATE_DROPDOWN_STATE,
        UPDATE_SELECTED_MOVIE_LIST,
        UPDATE_ERROR_MESSAGE } from '../../constants/actionTypes';

const initialState = () => ({
    selectedMovieList: [],
    dropdownMovieList: [],
    dropdownOpen: false,
    errorMsg: ''
})

const movieReducer = (state = initialState(), action = {}) => {
    switch(action.type) {

        case UPDATE_MOVIE_TITLES_FROM_SEARCH: {
            return {
                ...state,
                dropdownMovieList: action.dropdownMovieList,
                dropdownOpen: (action.dropdownMovieList.length > 0),
                errorMsg: action.errorMsg
            }
        }
        case UPDATE_DROPDOWN_STATE: {
            return {
                ...state,
                dropdownOpen: action.dropdownOpen
            }
        }
        case UPDATE_SELECTED_MOVIE_LIST: {
            return {
                ...state,
                selectedMovieList: action.selectedMovieList
            }
        }
        case UPDATE_ERROR_MESSAGE: {
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        }
        default: {
            return state;
          }
    }
}

export default movieReducer;