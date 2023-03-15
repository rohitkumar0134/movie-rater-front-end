import React, { useEffect } from "react";
import { useState } from "react";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function MovieForm(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [token] = useCookies(['mr-token']);


    useEffect(()=>{
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    },[props.movie])

    const updateClicked = () => {
        console.log('update loh')
        API.updateMovie(props.movie.id,{title,description},token['mr-token'])
        .then(apires=>props.updateMovie(apires))
        .catch(err=>console.log(err))
    }

    const createClicked = () => {
        console.log('update loh')
        API.createMovie({title,description},token['mr-token'])
        .then(apires=>props.MovieCreate(apires))
        .catch(err=>console.log(err))
    }
    const isDisabled = title.length === 0 || description.length === 0;

    return (
        <React.Fragment>
            {props.movie ? (
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input id="title" type="text" placeholder="title" value={title}
                        onChange={evt => setTitle(evt.target.value)}
                    /><br />
                    <label htmlFor="description">Descriptiom</label><br />
                    <textarea id="description" type="text" placeholder="Descriptiom" value={description}
                        onChange={evt => setDescription(evt.target.value)}
                    ></textarea><br />
                    {
                        props.movie.id?
                        <button onClick={updateClicked} disabled={isDisabled}>Update</button> : 
                        <button onClick={createClicked} disabled={isDisabled}>Create</button>

                    }
                    

                </div>
            ) : null}
        </React.Fragment>
    )

}

export default MovieForm