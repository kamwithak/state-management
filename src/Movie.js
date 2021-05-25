import React from 'react';

function Movie({name, price}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
        </div>
    )
}

export default Movie;