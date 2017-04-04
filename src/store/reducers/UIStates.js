import {UIActs} from '../../actions'

let UIStateObj = {
    showLoginForm : true,
    showSignUpForm : true,
    showLoadingGif : false
};
const UIStates = (state = UIStateObj, action)=>{

    let newState = {...state};
    switch(action.type){
        case UIActs.SHOW_LOGIN_FORM:
            newState.showSignUpForm = false;
            newState.showLoginForm = !newState.showLoginForm;
            break;
        case UIActs.SHOW_SIGNUP_FORM:
            newState.showLoginForm = false;
            newState.showSignUpForm = true;
            break;
        case UIActs.SHOW_LOADING_GIF:
            newState.showLoadingGif = true;
            break;
        case UIActs.HIDE_LOADING_GIF:
            newState.showLoadingGif = false;
            break;
        default:
            break;
    }

    return newState;
}

export default UIStates; 