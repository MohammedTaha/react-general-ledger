import {LedgerActs} from '../../actions'

let LedgerStateObj = {
    companies: [],
    selectedCompany : {},
    ledger : []
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
                newState.selectedCompany = action.payload;
            } else {
                newState.selectedCompany = {};
            }
            break;
        case LedgerActs.SET_ACTIVE_LEDGER : 
            let activeLedger = [];
            for(let key in action.payload){
                activeLedger.push(action.payload[key]);
            }
            newState.ledger = activeLedger;
            break;
        default:
            break;
    }
    return newState;
}


export default LedgerStates; 