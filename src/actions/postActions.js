import { REGISTER_POST_REQUEST,REGISTER_POST_SUCCESS,REGISTER_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, ALL_POST_FAIL,USER_POST_FAIL,USER_POST_REQUEST,USER_POST_SUCCESS } from "../constants/postConstants";
import axios from "axios";
const baseURL = process.env.NODE_ENV === "development" ? "localhost:5000" : "https://earnsidemoneybackend.onrender.com"
export const registerPost=(heading,category,body)=>async(dispatch)=>{
    try {
      dispatch({ type: REGISTER_POST_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/api/v1/createPost`,
        { heading,category,body },
        config
      );
      console.log(data);
  
      dispatch({ type: REGISTER_POST_SUCCESS, payload: data.post });
    } catch (error) {
        console.log(error);
      dispatch({ type: REGISTER_POST_FAIL, payload:error.response.data.error});
    }

  }

  export const allPosts=(keyword="")=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:ALL_POST_REQUEST
            }
        )
        const {data}=await axios.get(`/api/api/v1/posts?keyword=${keyword}`);
        console.log(data);
        dispatch(
            {
                type:ALL_POST_SUCCESS,
                payload:data.posts
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:ALL_POST_FAIL,
                payload:error.response.data.error
            }
        )
        
    }
  }
  export const userPosts=()=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:USER_POST_REQUEST
            }
        )
        const {data}=await axios.get("/api/api/v1/posts/user");
        console.log(data);
        dispatch(
            {
                type:USER_POST_SUCCESS,
                payload:data.posts
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:USER_POST_FAIL,
                payload:error.response.data.error
            }
        )
        
    }
  }