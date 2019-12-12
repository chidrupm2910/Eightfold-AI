import React from 'react';
import { connect } from 'react-redux';
import MovieSearch from './components/MovieSearch/MovieSearch';
import { UPDATE_DROPDOWN_STATE } from './constants/actionTypes';
import './App.css';

function App(props) {
  const { updateDropDownState } = props;
  return (
    <div className="app" onClick={() => {;updateDropDownState(false)}}>
      <MovieSearch />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateDropDownState: (dropdownOpen) => dispatch({ type: UPDATE_DROPDOWN_STATE, dropdownOpen})
})
export default connect(null, mapDispatchToProps)(App);
