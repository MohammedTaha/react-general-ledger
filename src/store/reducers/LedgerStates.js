import {LedgerActs} from '../../actions'

let LedgerStateObj = {
    companies: [],
    selectedCompany : {}
};

const LedgerStates = (state = LedgerStateObj, action)=>{
    let newState = {...state};
    switch(action.type){
        case LedgerActs.SET_REGISTERED_COMPANIES : 
            if(action.payload){
                newState.companies = [];
                for(let cID in action.payload){
                    action.payload[cID].uid = cID;
                    newState.companies.push(action.payload[cID]);
                }
            } else {
                newState.companies = [];
            }
            break;
        case LedgerActs.SET_SELECTED_COMPANY : 
            if(action.payload){
                console.log("SELECTED COMPANY ++ ", action.payload)
                newState.selectedCompany = action.payload;
            } else {
                newState.selectedCompany = {};
            }
            break;
        default:
            break;
    }
    return newState;
}


export default LedgerStates; 