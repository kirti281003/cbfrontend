import {GET_SUB_FAIL, GET_SUB_REQUEST, GET_SUB_SUCCESS, POST_SUB_FAIL,POST_SUB_REQUEST,POST_SUB_SUCCESS,USER_SUB_FAIL,USER_SUB_SUCCESS,USER_SUB_REQUEST,ALL_SUB_FAIL,ALL_SUB_REQUEST,ALL_SUB_SUCCESS,ACCEPTED_SUB_FAIL,ACCEPTED_SUB_REQUEST,ACCEPTED_SUB_SUCCESS} from "../constants/subConstants";
import axios from "axios";
export const registerSub=(body,links,photo,id,name)=>async(dispatch)=>{
    try {
        console.log(links);
        dispatch({ type: POST_SUB_REQUEST });
    
        const config = { headers: { "Content-Type": " multipart/form-data " } };
    
        const { data } = await axios.post(
          `/api/v1/setSubmission/${id}/${name}`,
          { body,links,photo },
          config
        );
        console.log(data);
    
        dispatch({ type: POST_SUB_SUCCESS, payload: data.sub });
      } catch (error) {
          console.log(error);
        dispatch({ type: POST_SUB_FAIL, payload:error.response.data.error});
      }

}

export const getSubmission=(id)=>async(dispatch)=>{
    try{
        dispatch({type:GET_SUB_REQUEST})
       const {data}=await axios.get(`/api/v1/getSubmission/${id}`)
       dispatch({type:GET_SUB_SUCCESS,payload:data.sub})
    }
    catch(error)
    {
        dispatch({type:GET_SUB_FAIL,payload:error.response.data.error});
    }
}
export const submissions=()=>async(dispatch)=>{
    try{
        dispatch({type:USER_SUB_REQUEST})
       const {data}=await axios.get(`/api/v1/user/submissions`)
       dispatch({type:USER_SUB_SUCCESS,payload:data.sub})
    }
    catch(error)
    {
        dispatch({type:USER_SUB_FAIL,payload:error.response.data.error});
    }
}

export const postsubmissions=(id)=>async(dispatch)=>{
    try{
        dispatch({type:ALL_SUB_REQUEST})
       const {data}=await axios.get(`/api/v1/submissions/${id}`)
       dispatch({type:ALL_SUB_SUCCESS,payload:data.sub})
    }
    catch(error)
    {
        dispatch({type:ALL_SUB_FAIL,payload:error.response.data.error});
    }
}

export const acceptedsubmissions=()=>async(dispatch)=>{
    try{
        dispatch({type:ACCEPTED_SUB_REQUEST})
       const {data}=await axios.get(`/api/v1/accepted/submissions`)
       dispatch({type:ACCEPTED_SUB_SUCCESS,payload:data.sub})
    }
    catch(error)
    {
        dispatch({type:ACCEPTED_SUB_FAIL,payload:error.response.data.error});
    }
}

export const acceptsub=(id,msg)=>async(dispatch)=>{
try{
dispatch({
    type:ACCEPTED_SUB_REQUEST
})
const {data}=await axios.put(`/api/v1/getSubmission/${id}/${msg}`)
dispatch({
    type:ACCEPTED_SUB_SUCCESS,
    payload:data.message
})
}
catch(error)
{
    dispatch({
        type:ACCEPTED_SUB_FAIL,
        payload:error.response.data.error
    })
}
}