import LoginPage from "./page/loginpage"
context('登录',()=>{
    it('输入正确的用户名和密码',()=>{
        let login=new LoginPage()
        login.visit()
        login.login('','')
        cy.url().should('contain','')
    })
    it('输入错误的用户名和密码，提示错误',()=>{
        let login=new LoginPage()
        login.visit()
        login.login('','')
        login.promot().should('contain','')
    })

})