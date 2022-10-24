import locator from './locator.json'
export default class LoginPage{
    constructor(){
        this.url=''
    }
    get username(){
        return cy.get(locator.loginpage.username)
    }
    get password(){
        return cy.get(locator.loginpage.password)
    }
    get subimit(){
        return cy.get(locator.loginpage.subimit)
    }
    visit(){
        cy.visit(this.url)
    }
    login(name,pwd){
        if(name!==""){
            this.username.type(name)
        }
        if(pwd!==""){
            this.password.type(pwd)
        }
        this.subimit.click()

    }
}
