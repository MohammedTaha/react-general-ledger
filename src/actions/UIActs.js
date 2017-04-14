export default class UIActs{

    static SHOW_LOGIN_FORM  = "SHOW_LOGIN_FORM";
    static SHOW_SIGNUP_FORM = "SHOW_SIGNUP_FORM";
    static SHOW_LOADING_GIF = "SHOW_LOADING_GIF";
    static HIDE_LOADING_GIF = "HIDE_LOADING_GIF";
    static SHOW_FORM_ON_HOME_PAGE = "SHOW_FORM_ON_HOME_PAGE";
    static SET_MENU_OPTS = "SET_MENU_OPTS";
    static SET_NOTIFICATION_MSG_SNACKBAR = "SET_NOTIFICATION_MSG_SNACKBAR";
    

    static showFormOnHome(formType){
        return {
            type : this.SHOW_FORM_ON_HOME_PAGE,
            payload : formType
        };
    }

    static setMenuOpts(obj){

        let opts = ["Sign in", "Sign up", "Services", "Contact us"];
        if(obj.loggedIn){
            opts = ["Companies", "Sign out"];
        }

        return {
            type : this.SET_MENU_OPTS,
            payload : opts
        }
    }

    static toggleNotificationMsgSnackbar(msg){
        return {
            type : this.SET_NOTIFICATION_MSG_SNACKBAR,
            payload : (msg && msg.text ? {text : msg.text, duration : msg.duration} : null)
        };
    }

    static showLoadingGIF(){
        return {
            type : this.SHOW_LOADING_GIF
        };
    }
    static hideLoadingGIF(){
        return {
            type : this.HIDE_LOADING_GIF
        };
    }
}