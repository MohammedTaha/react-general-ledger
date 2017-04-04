export default class UIActs{

    static SHOW_LOGIN_FORM  = "SHOW_LOGIN_FORM";
    static SHOW_SIGNUP_FORM = "SHOW_SIGNUP_FORM";
    static SHOW_LOADING_GIF = "SHOW_LOADING_GIF";
    static HIDE_LOADING_GIF = "HIDE_LOADING_GIF";

    static showSignUpForm(){
        return {
            type : this.SHOW_SIGNUP_FORM
        };
    }
    static showLoginForm(){
        return {
            type : this.SHOW_LOGIN_FORM
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