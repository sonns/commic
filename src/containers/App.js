import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestComics } from '../actions';

import MainPage from '../components/MainPage'

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchComics.searchField,
    comics: state.requestComics.comics,
    isPending: state.requestComics.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestComics: () => dispatch(requestComics())
  }
}

class App extends Component {
  render() {
    return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
