import React, { Component } from "react";
import axios from 'axios'


export default class HandleMovie extends Component {
    constructor() {
        super()

        this.state = {
            test: 0
        }
    }

    // handleAdd = () => {
    //     axios.post("http://127.0.0.1:5000/movie", {
    //         title: ,
    //         description: ,
    //         rating: ,
    //         genre: 
    //     }).then(function (response) {
    //         console.log(response);
    //     })
    // }

    render() {
        return (
            <div className="movie-wrapper">
                <h1>Add a Movie</h1>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Rating" />
                <input type="text" placeholder="Type" />
                <input type="text" placeholder="Description" />
            </div>
        )
    }
}