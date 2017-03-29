export default class UIActs{

    static SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM";

    static showLoginForm(){
        return {
            type : this.SHOW_LOGIN_FORM
        }
    }
}