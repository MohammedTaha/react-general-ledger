import {UIActs} from '../../actions'

let UIStateObj = {
    activeFormType: "INTRO_FORM",
    menuLinks : [{desc : "Home", link: "/"},{desc : "Companies", link: "/Companies"}],
    menuOpts : ["Sign in", "Sign up"],
    showLoadingGif : false,
    navigationgationDrawerVisibility:false,
    notificationMsg : {
        text : "",
        duration : 0
    }
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
        case UIActs.TOGGEL_NAVIGATION_DRAWER:
            newState.navigationgationDrawerVisibility = !newState.navigationgationDrawerVisibility;
            break;
        case UIActs.SET_MENU_OPTS:
            newState.menuOpts = action.payload;
            break;
        case UIActs.SET_NOTIFICATION_MSG_SNACKBAR:
            if(action.payload && action.payload.text){
                newState.notificationMsg = {
                    text : action.payload.text,
                    duration : 5000
                };
            } else {
                newState.notificationMsg = {
                    text : "",
                    duration : 0
                };
            }
            break;
        default:
            break;
    }

    return newState;
}

export default UIStates; 