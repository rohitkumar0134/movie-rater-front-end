import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieList(props) {
    const [token] = useCookies(['mr-token']);

const movieClick=movie=>event=>{
    props.movieClick(movie)
}
const editClicked=movie=>{
    props.editClicked(movie)
}
const removeClicked=movie=>{
    API.deleteMovie(movie.id,token['mr-token'])
    .then(()=> props.removeClicked(movie))
    .catch(err=>console.log(err))
   
}



    return (
        <div>
            {props.movies && props.movies.map(movie => {
                return (
                    <div key={movie.id} className='movie-item'>
                        <h1 onClick={movieClick(movie)}>{movie.title}</h1>
                        <FontAwesomeIcon icon={faEdit} onClick={()=>editClicked(movie)} />
                        <FontAwesomeIcon icon={faTrash} onClick={()=>removeClicked(movie)} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList;