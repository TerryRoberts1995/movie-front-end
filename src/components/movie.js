import React from "react";


export default function (props) {
    const { id, title, description, rating, genre } = props


    return (
        <div className="movie-wrapper">

            <div className="title-wrapper">
                <div className="title-id">
                    <h4>{id}.</h4>
                </div>
                <div className="title-id">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="movie-meta-wrapper">

                <div className="critic-info">

                    <div className="rating">
                        <h3>Rating: {rating}</h3>
                    </div>

                    <div className="genre">
                        <h3>Type: {genre}</h3>
                    </div>
                </div>

                <div className="description">

                    Discription: {description}

                </div>

            </div>
        </div>
    )
}