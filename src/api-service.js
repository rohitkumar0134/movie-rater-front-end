const REACT_APP_API_URL='https://course-django-react-api-production.up.railway.app'
export class API{

    static loginUser(body){
        return  fetch(`https://course-django-react-api-production.up.railway.app/auth/`,{
             method:'POST',
             headers:{
               'Content-Type': 'application/json'
             },
             body:JSON.stringify(body)
           }).then(apires=>apires.json())
         
     }
     static registerUser(body){
      return  fetch(`https://course-django-react-api-production.up.railway.app/api/users/`,{
           method:'POST',
           headers:{
             'Content-Type': 'application/json'
           },
           body:JSON.stringify(body)
         }).then(apires=>apires.json())
       
   }

    static updateMovie(mov_id ,body,token){
       return  fetch(`https://course-django-react-api-production.up.railway.app/api/movies/${mov_id}/`,{
            method:'PUT',
            headers:{
              'Content-Type': 'application/json',
              'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
          }).then(apires=>apires.json())
        
    }

    static createMovie(body,token){
        return  fetch(`https://course-django-react-api-production.up.railway.app/api/movies/`,{
             method:'Post',
             headers:{
               'Content-Type': 'application/json',
               'Authorization':`Token ${token}`
             },
             body:JSON.stringify(body)
           }).then(apires=>apires.json())
         
     }
     static getMovies(token){

     return fetch(`https://course-django-react-api-production.up.railway.app/api/movies/`,{
        method:'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':`Token ${token}`
        }
      })
      .then(apires=>apires.json())


     }

     static deleteMovie(mov_id, token) {
      return fetch(`https://course-django-react-api-production.up.railway.app/api/movies/${mov_id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
    }

}