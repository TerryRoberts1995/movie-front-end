import React, { Component } from "react";
import axios from 'axios'
import Movie from './movie'

export default class MovieList extends Component {
    constructor() {
        super()

        this.state = {
            movies: []
        }
    }

    renderMovies() {
        return this.state.movies.map(movie => {
            return (
                <Movie
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    genre={movie.genre}
                />
            )
        });
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/movies")
            .then(response => {
                this.setState({
                    movies: response.data
                })
            })
            .catch(err => console.error("Fetch didn't work", err));
    }


    render() {
        return (
            <div>{this.renderMovies()}</div>
        )
    }
}