import './App.css';
import {useState,useEffect} from 'react';
import MovieList from './components/movi-list';
import MovieDetails from './components/movie-details';
import React from 'react';
import MovieForm from './components/movie-form';
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from './hooks/useFetch';

function App() {
  const [token, setToken, deleteToken] = useCookies(['mr-token']);

  const [movies,setMovies]=useState([]);
  const [selectedMovie,setSelectedMovie]=useState(null);
  const [editMovie,setEditMovie]=useState(null);
  const [data,loading,error]=useFetch()


useEffect(()=>{
setMovies(data)


},[data])

useEffect(()=>{
  console.log(token)
 if(!token['mr-token']) window.location.href = '/';
},[token])


const loadMovie=movie=>{
  setSelectedMovie(movie)
  setEditMovie(null)
}
const editClicked=movie=>{
  setEditMovie(movie)
  setSelectedMovie(null)
}
const updatedMovie=movie=>{
const newMovie=movies.map(mov=>{
  if (mov.id===movie.id){
    return movie
  }
  return mov
})
setMovies(newMovie)
}

const newMovie=()=>{
  setEditMovie({title:'',description:''})
  setSelectedMovie(null)
}
const MovieCreate=movie=>{
  const newMovies=[...movies,movie]
  setMovies(newMovies)
  
}
const removeClicked=movie=>{
  const newMovie=movies.filter(mov=>mov.id!==movie.id)
  setMovies(newMovie)

}
const logoutUser = () => {
  deleteToken(['mr-token']);
}

if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error loading movies{error}</h1>

  return (
    <div className="App">
   <header className="App-header">
   <h1>
          <FontAwesomeIcon icon={faFilm}/>
          <span>Movie rater</span>
       </h1>
       <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/>
   </header>
     <div className="layout">
      <div>
     <MovieList movies={movies} movieClick={loadMovie} editClicked={editClicked} removeClicked={removeClicked}/>
     <button onClick={newMovie}>New Movie</button>
     
     </div>

     <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
     {editMovie?<MovieForm movie={editMovie} updateMovie={updatedMovie} MovieCreate={MovieCreate}/>:null}

     
     </div>
    </div>
  );
}

export default App;
