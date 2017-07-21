export default class LedgerActs {

    static REGISTER_NEW_COMPANY = "REGISTER_NEW_COMPANY";
    static SET_REGISTERED_COMPANIES = "SET_REGISTERED_COMPANIES";

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
}