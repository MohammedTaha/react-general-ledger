import {firebaseAuth} from './index';
import {UIActs} from '../actions';

const initEvents = ()=>{



};


export const firebaseUser = {

    attemptToSignUp  : (data)=>{
        return dispatch =>{
            dispatch(UIActs.showLoadingGIF()); 
            firebaseAuth.createUserWithEmailAndPassword(data.userName, data.password)
                .then((user)=>{
                    return (
                        user.updateProfile({
                                displayName : data.displayName
                            }).then(()=>{
                                dispatch(UIActs.hideLoadingGIF()); 
                                dispatch(UIActs.showFormOnHome('INTRO_FORM')); 
                            })
                    );
                })
                .catch((err)=>{
                    console.log("Sign up err ", err );
                    dispatch(UIActs.hideLoadingGIF()); 
                    dispatch(UIActs.toggleNotificationMsgSnackbar({text : err.message, duration : 5000})); 
                });
        }
    },
    attemptToSignIn : (data)=>{
        return dispatch => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseAuth.signInWithEmailAndPassword(data.userName, data.password)
                .then((success)=>{
                    console.log("Sign in success ", success);
                    dispatch(UIActs.hideLoadingGIF()); 
                })
                .catch((err)=>{
                    console.log("Sign in err ", err );
                    dispatch(UIActs.hideLoadingGIF()); 
                    dispatch(UIActs.toggleNotificationMsgSnackbar({text : err.message, duration : 5000})); 
                });

        }
    }
}    


export const bindUserAuthEvents = ()=>{

    return (dispatch)=>{
        firebaseAuth.onAuthStateChanged((authState)=>{
            console.log("authState");
            console.log(authState);
        });
    }
}

export  {initEvents};