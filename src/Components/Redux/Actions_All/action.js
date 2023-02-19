import * as types from "./actiontype"
import axios from "axios"


const getdata =(query)=>(dispatch)=> {

 dispatch({type:types.GET_GETDATA_REQUEST})

  return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

  .then((res) => {

      dispatch({
        type:types.GET_GETDATA_SUCCESS,
         payload:res.data
        })

      console.log(res.data)
     
  })

  .catch((err) =>{
    
    dispatch({
        type: types.GET_GETDATA_FAILURE
    })
      console.log(err) })

  
}

const getsingledata =(id)=>(dispatch)=> {

    dispatch({
        type:types.GET_GETSINGLEDATA_REQUEST
    })
     return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     .then((res) => {
         dispatch({type:types.GET_GETSINGLEDATA_SUCCESS, payload:res.data.meals[0]})
         console.log(res)
        
     })
     .catch((err) =>{
        dispatch({
            type: types.GET_GETSINGLEDATA_FAILURE
        })
         console.log(err) })
   
     
   }
                

export {getdata,getsingledata};