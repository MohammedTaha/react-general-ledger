import {UIActs} from '../../actions'

let UIStateObj = {
    activeFormType: "INTRO_FORM",
    showLoadingGif : false
};
const UIStates = (state = UIStateObj, action)=>{

    let newState = {...state};
    switch(action.type){
        case UIActs.SHOW_FORM_ON_HOME_PAGE:
            newState.activeFormType = action.payload;
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