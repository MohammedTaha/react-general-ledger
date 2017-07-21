import {LedgerActs} from '../../actions'

let LedgerStateObj = {
    companies: []
};

const LedgerStates = (state = LedgerStateObj, action)=>{
    let newState = {...state};
    switch(action.type){
        case LedgerActs.SET_REGISTERED_COMPANIES : 
            if(action.payload){
                console.log("INSIDE IF ", action.payload);
                newState.companies = [];
                for(let cID in action.payload){
                    action.payload[cID].uid = cID;
                    newState.companies.push(action.payload[cID]);
                }
            } else {
                newState.companies = [];
            }
            break;
        default:
            break;
    }
    return newState;
}


export default LedgerStates; 