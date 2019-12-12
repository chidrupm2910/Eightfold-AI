import { UPDATE_MOVIE_TITLES_FROM_SEARCH,UPDATE_DROPDOWN_STATE,UPDATE_SELECTED_MOVIE_LIST } from '../../constants/actionTypes';

const initialState = () => ({
    selectedMovieList: [],
    dropdownMovieList: [],
    dropdownOpen: false
})

const movieReducer = (state = initialState(), action = {}) => {
    switch(action.type) {

        case UPDATE_MOVIE_TITLES_FROM_SEARCH: {
            console.log('Action', action)
            return {
                ...state,
                dropdownMovieList: action.dropdownMovieList,
                dropdownOpen: (action.dropdownMovieList.length > 0)
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
        default: {
            return state;
          }
    }
}

export default movieReducer;