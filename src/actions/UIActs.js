export default class UIActs{

    static SHOW_LOGIN_FORM  = "SHOW_LOGIN_FORM";
    static SHOW_SIGNUP_FORM = "SHOW_SIGNUP_FORM";
    static SHOW_LOADING_GIF = "SHOW_LOADING_GIF";
    static HIDE_LOADING_GIF = "HIDE_LOADING_GIF";
    static SHOW_FORM_ON_HOME_PAGE = "SHOW_FORM_ON_HOME_PAGE";

    static showFormOnHome(formType){
        return {
            type : this.SHOW_FORM_ON_HOME_PAGE,
            payload : formType
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