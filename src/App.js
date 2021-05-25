import './App.css';
import AddMovies from './AddMovie';
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovies />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
