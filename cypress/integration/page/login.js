class login{
    username(){
        return cy.get('#phone')
    }
    password(){
        return cy.get('#password')
    }
    code(){
        return cy.get('#code')
    }
    submint(){
        return cy.get("[data-testid='signin-sumbit-button']")
    }

}
export default login