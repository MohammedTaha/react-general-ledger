import {AuthActs} from '../../actions'

let AuthStateObj = {
    signedInUser: null
};

const AuthStates = (state = AuthStateObj, action)=>{
    let newState = {...state};
    switch(action.type){
        case AuthActs.SET_SIGNEDIN_USER : 
            if(action.payload){
                newState.signedInUser = action.payload;
            } else {
                newState.signedInUser = null;
            }
            break;
        default:
            break;
    }
    return newState;
}


export default AuthStates; 