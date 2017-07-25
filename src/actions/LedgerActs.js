export default class LedgerActs {

    static REGISTER_NEW_COMPANY = "REGISTER_NEW_COMPANY";
    static SET_REGISTERED_COMPANIES = "SET_REGISTERED_COMPANIES";
    static SET_SELECTED_COMPANY = "SET_SELECTED_COMPANY";
    static SET_ACTIVE_LEDGER    = "SET_ACTIVE_LEDGER";

    static registerNewCompany (companyDetails) {
        return {
            type : this.REGISTER_NEW_COMPANY,
            payload : companyDetails
        }
    }

    static setRegisteredCompanies (companies) {
        return {
            type : this.SET_REGISTERED_COMPANIES,
            payload : companies
        }
    }
    static setSelectedCompany (company) {
        return {
            type : this.SET_SELECTED_COMPANY,
            payload : company
        }
    }
    static setActiveLedger (ledgerDetails) {
        return {
            type : this.SET_ACTIVE_LEDGER,
            payload : ledgerDetails
        }
    }
}