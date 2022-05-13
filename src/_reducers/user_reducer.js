import {LOGIN_USER, REGISTER_USER} from "../_actions/types";

const initialState = {
        email: "",
        password: ""
};

export default function(prevState={initialState}, action){
    switch(action.type){
        case LOGIN_USER:
            return{
                ...prevState,
                loginSuccess: action.payload
            }
            break;
        case REGISTER_USER:
            return{
                ...prevState,
                registerSuccess: action.payload
            }
            break;
        default:
            return prevState;
    }
}