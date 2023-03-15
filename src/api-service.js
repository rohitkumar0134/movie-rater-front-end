
export class API{

    static loginUser(body){
        return  fetch(`http://127.0.0.1:8000/auth/`,{
             method:'POST',
             headers:{
               'Content-Type': 'application/json'
             },
             body:JSON.stringify(body)
           }).then(apires=>apires.json())
         
     }
     static registerUser(body){
      return  fetch(`http://127.0.0.1:8000/api/users/`,{
           method:'POST',
           headers:{
             'Content-Type': 'application/json'
           },
           body:JSON.stringify(body)
         }).then(apires=>apires.json())
       
   }

    static updateMovie(mov_id ,body,token){
       return  fetch(`http://127.0.0.1:8000/api/movie/${mov_id}/`,{
            method:'PUT',
            headers:{
              'Content-Type': 'application/json',
              'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
          }).then(apires=>apires.json())
        
    }

    static createMovie(body,token){
        return  fetch(`http://127.0.0.1:8000/api/movie/`,{
             method:'Post',
             headers:{
               'Content-Type': 'application/json',
               'Authorization':`Token ${token}`
             },
             body:JSON.stringify(body)
           }).then(apires=>apires.json())
         
     }
     static getMovies(token){

     return fetch("http://127.0.0.1:8000/api/movie/",{
        method:'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization':`Token ${token}`
        }
      })
      .then(apires=>apires.json())


     }

     static deleteMovie(mov_id, token) {
      return fetch(`http://127.0.0.1:8000/api/movie/${mov_id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
    }

}