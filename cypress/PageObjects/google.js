class googlePage {
    _SearchInputSelector = '#APjFqb'

    _AcceptCookies = '#L2AGLb > .QS5gu'
    _RejectCookies = '#W0wltc > .QS5gu'
    _CustomiseCookies = '.eOjPIe'

    getSearchInput(){
        return cy.get(this._SearchInputSelector)
    }
    typeInSearchInput(text){
        return this.getSearchInput().clear().type(text)
    }

    getAcceptCookies(){
        return cy.get(this._AcceptCookies)
    }
    getRejectCookies(){
        return cy.get(this._RejectCookies)
    }
    getCustomiseCookies(){
        return cy.get(this._CustomiseCookies)
    }


} export default googlePage

    
