import React, { Component } from 'react';

import MovieList from './components/movie_list'
import HandleMovie from './components/handleMovie'
import './style/movie.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <HandleMovie />
      </div >
    )
  }
}
