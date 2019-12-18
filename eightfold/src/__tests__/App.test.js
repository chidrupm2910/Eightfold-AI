import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import { Provider } from 'react-redux';
import App from '../App';
import * as actionTypes from '../constants/actionTypes';
import * as actions from '../store/actions/movieActions';

// Mock Store
const initialState = {
    movies: {
        selectedMovieList: ['Movie 1', 'Movie 2', 'Movie 3'],
        dropdownMovieList: [{ Title: 'Movie 1', Poster: '' },
        { Title: 'Movie 2', Poster: '' },
        { Title: 'Movie 3', Poster: '' },
        { Title: 'Movie 4', Poster: '' },
        { Title: 'Movie 5', Poster: '' },
        { Title: 'Movie 6', Poster: '' }],
        dropdownOpen: true,
        errorMsg: ''
    }
}

// Mock Response Structure
const response = {
    data: {
        Response: 'true',
        Search: []
    },
    
};
const mockStore = configureMockStore([thunk]);
describe('MOVIE INPUT TESTS', () => {
   
    let wrapper;
    const store = mockStore(initialState);
    beforeEach(() => {
       

        wrapper = mount(<Provider store={store}><App /></Provider>);
    });
    afterEach(() => moxios.uninstall());
    it('Application should render without crashing', () => {
        console.log(wrapper.debug());
        expect(wrapper).toBeTruthy();
    });

    it('Should Render One Input Component', () => {
        const listItem = wrapper.find('.movie-dropdown input');
        expect(listItem.length).toBe(1);
    });    it('Should Render One Input Component', () => {
        const listItem = wrapper.find('.movie-dropdown input');
        expect(listItem.length).toBe(1);
    })

    it('Should render the same number of Dropdown items as available in selected movies list', () => {

        const listItem = wrapper.find('.movie-bubble');
        expect(listItem.length).toBe(initialState.movies.selectedMovieList.length);
    })

    it('Should Dispatch the corresponding action when searched for a  movie title', () => {
        moxios.stubRequest('http://www.omdbapi.com/?apikey=818b96a1&s=shawshank%20redemption', {
            status: 200,
            response
          });

          const expectedAction = [{ type: actionTypes.UPDATE_MOVIE_TITLES_FROM_SEARCH, dropdownMovieList: response.data.Search, errorMsg: '' }];
          store.dispatch(actions.movieNameSearch())
            .then(() => {
              expect(store.getActions()).toEqual(expectedAction);
            });
    });

    it('Should Render Respective number of movie titles available in the reducer in dropdown', () => {
        const listItem = wrapper.find('.list-item');
        expect(listItem.length).toBe(initialState.movies.dropdownMovieList.length);
    });

    it('Checking Dispatched actions in the component when a list item is clicked', () => {
        const movie = wrapper.find('.list-item').at(4);
        movie.simulate('click');
        const expectedAction = [ { type: actionTypes.UPDATE_ERROR_MESSAGE,
        errorMsg: 'Server is unavailable' },{ type: actionTypes.UPDATE_SELECTED_MOVIE_LIST, selectedMovieList: [...initialState.movies.selectedMovieList,'Movie 5']}]
        expect(store.getActions()).toEqual(expectedAction);

    });

    it('Click on main application to close the dropdown', () => {
        const app = wrapper.find('.app');
        app.simulate('click');
        expect(store.getActions()[2]).toEqual({ type: 'UPDATE_DROPDOWN_STATE', dropdownOpen: false })
    })


});