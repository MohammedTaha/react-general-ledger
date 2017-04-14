export default class AuthActs{
    static SET_SIGNEDIN_USER  = "SET_SIGNEDIN_USER";

    static setSignedInUser(user){
        return {
            type : this.SET_SIGNEDIN_USER,
            payload : user
        };
    }


}