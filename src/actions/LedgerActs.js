export default class LedgerActs {

    static REGISTER_NEW_COMPANY = "REGISTER_NEW_COMPANY";

    static registerNewCompany (companyDetails) {
        return {
            type : this.REGISTER_NEW_COMPANY,
            payload : companyDetails
        }
    }
}