import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import styled from 'styled-components';

function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <NavBar>
            <h1>Dev Ed</h1>
            <p>List of Movies: {movies.length}</p>
        </NavBar>
    )
}

const NavBar = styled.div`
    background: #50C7C7;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    h1, p {
        margin: 10px;
    }
`
export default Nav;