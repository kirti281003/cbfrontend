import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS,LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../constants/userConstants";
export const userReducer = (state = { post:{}}, action) => {
    console.log(action.payload);
    switch (action.type) {
      case REGISTER_REQUEST:
    case LOGIN_REQUEST:
        return {
          loading: true,
          isAuthenticated:false
        };
      case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated:true,
          user: action.payload,
        };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
   
              return {
                ...state,
                loading: false,
                isAuthenticated:false,
                error: action.payload,
              };
        default:
                return state;
    }
}

export const logoutReducer=(state={},action)=>
{
    switch(action.type)
    {
        case LOGOUT_REQUEST:
        return{
            loading:true,
            isAuthenticated:true
        }
        case LOGOUT_SUCCESS:
            return{
                loading:false,
                isAuthenticated:false,
            }
            case LOGOUT_FAIL:
                return{
                loading:false,
                isAuthenticated:true,
            }
        default:
            return state;

    }
}