import {UIActs} from '../../actions'


const UIStates = (state={showLoginForm:false}, action)=>{

    let newState = {...state};
    switch(action.type){
        case UIActs.SHOW_LOGIN_FORM:
            newState.showLoginForm = !newState.showLoginForm;
            break;
        default:
            break;
    }

    return newState;
}

export default UIStates; 