import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useCookies } from "react-cookie";


function MovieDetails(props) {
    const [highlighted,setHighlighted]=useState(-1)
    const mov = props.movie;
    const highlightedRate=high=>evnt=>{
        setHighlighted(high);
    }

    const [token] = useCookies(['mr-token']);
    
    const rateClicked=rate=>evt=>{
        fetch(`http://127.0.0.1:8000/api/movie/${mov.id}/rate_movie/`,{
            method:'Post',
            headers:{
              'Content-Type': 'application/json',
              'Authorization':`Token ${token['mr-token']}`
            },
            body:JSON.stringify({
                stars:rate+1
            })
          })
          .then(()=>getDetails())
          .catch(error=>console.log(error))
        

    }


    const getDetails=()=>{
        fetch(`http://127.0.0.1:8000/api/movie/${mov.id}/`,{
            method:'GET',
            headers:{
              'Content-Type': 'application/json',
              'Authorization':`Token ${token['mr-token']}`
            }
          })
          .then(apires=>apires.json())
          .then(apires=>props.updateMovie(apires))
          .catch(error=>console.log(error))

    }




    return (
        <React.Fragment>
            {mov ? (
                <div>
                    <h1>
                        {mov.title}
                    </h1>
                    <p>
                        {mov.description}

                    </p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_of_rating > 0 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_of_rating > 1 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_of_rating > 2 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_of_rating > 3 ? 'orange' : ''} />
                    <FontAwesomeIcon icon={faStar} className={mov.avg_of_rating > 4 ? 'orange' : ''} />

                    ({mov.no_of_rating})
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        {
                            [...Array(5)].map((e, i) => {
                                return <FontAwesomeIcon icon={faStar} key={i} className={highlighted > i-1 ? 'purple' : ''} 
                                onMouseEnter={highlightedRate(i)}
                                onMouseLeave={highlightedRate(-1)}
                                onClick={rateClicked(i)}/>

                            })
                        }
                    </div>
                </div>


            ) : null}


        </React.Fragment>
    )
}

export default MovieDetails;