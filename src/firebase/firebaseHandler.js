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
                    user.sendEmailVerification();
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
                });
        }
    }
}    


const bindUserAuthEvents = ()=>{

    return (dispatch)=>{
        firebaseAuth.onAuthStateChanged((authState)=>{
            console.log("authState");
            console.log(authState);
        });
    }
}

export  {initEvents, bindUserAuthEvents};