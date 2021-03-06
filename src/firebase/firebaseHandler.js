import {firebaseAuth, firebaseDB} from './index';
import {UIActs, AuthActs, LedgerActs} from '../actions';

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
                    //dispatch(UIActs.navigateUser('/Companies')); 
                })
                .catch((err)=>{
                    console.log("Sign in err ", err );
                    dispatch(UIActs.hideLoadingGIF()); 
                    dispatch(UIActs.toggleNotificationMsgSnackbar({text : err.message, duration : 5000})); 
                });

        }
    },
    signoutCurrentUser : ()=>{
        return dispatch => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseAuth.signOut()
                .then(()=>{
                    dispatch(UIActs.hideLoadingGIF());
                });
        }

    }
}    


export const firebaseCompanies = {

    registerNewCompany : (uid, companyDetails) => {
        return (dispatch) => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseDB.ref("/Companies/"+ uid).push(companyDetails)
                .then((success)=>{
                    console.log("Company registration success ", success);
                    dispatch(UIActs.hideLoadingGIF()); 
                })
                .catch((err)=>{
                    console.log("Company registration err ", err );
                    dispatch(UIActs.hideLoadingGIF()); 
                    dispatch(UIActs.toggleNotificationMsgSnackbar({text : err.message, duration : 5000})); 
                });
        }
    },
    getRegisteredCompanies (uid) {
        return (dispatch) => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseDB.ref("/Companies/"+ uid)
                .on("value", ( snapshot ) => {
                    console.log( " snapshot ", snapshot.val());
                    dispatch(UIActs.hideLoadingGIF());
                    dispatch(LedgerActs.setRegisteredCompanies(snapshot.val()));
                });
        }

    },
    getSelectedCompany (uid, companyID) {
        return (dispatch) => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseDB.ref("/Companies/"+ uid + "/"+ companyID)
                .on("value", ( snapshot ) => {
                    console.log( " snapshot ", snapshot.val());
                    dispatch(UIActs.hideLoadingGIF());
                    dispatch(LedgerActs.setSelectedCompany(snapshot.val()));
                });
        }

    },
    getLedgerOfSelectedCompany (companyID) {
        return (dispatch) => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseDB.ref("/Ledgers/"+  companyID)
                .on("value", ( snapshot ) => {
                    console.log( " snapshot ", snapshot.val());
                    dispatch(UIActs.hideLoadingGIF());
                    dispatch(LedgerActs.setActiveLedger(snapshot.val()));
                });
        }

    },

    updateLedgerEntry (companyID, ledgerDetails) {
        return (dispatch) => {
            dispatch(UIActs.showLoadingGIF()); 
            firebaseDB.ref("/Ledgers/"+  companyID).push(ledgerDetails)
                .then(function(){
                    dispatch(UIActs.hideLoadingGIF());
                });
        }

    }

};

export const bindUserAuthEvents = ()=>{

    return (dispatch)=>{
        firebaseAuth.onAuthStateChanged((authState)=>{
            /*console.log("authState");
            console.log(authState);*/
            dispatch(UIActs.hideLoadingGIF());
            if(authState && authState.uid){
                dispatch(AuthActs.setSignedInUser({displayName : authState.displayName, email : authState.email, uid : authState.uid, photoURL: authState.photoURL}));
                dispatch(UIActs.setMenuOpts({loggedIn : true}));
            }
            else {
                dispatch(AuthActs.setSignedInUser(null));
                dispatch(UIActs.setMenuOpts({loggedIn : false}));
            }
        });
    }
}

export  {initEvents};