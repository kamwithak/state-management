import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "harry potter",
            price: "10$",
            id: 1
        },
        {
            name: "game of thrones",
            price: "14$",
            id: 2
        },
        {
            name: "inception",
            price: "8$",
            id: 3
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}