import Login from '../integration/page/login'

describe('承运商运输',() => {
   
    const login=new Login()
    before(() => {
        cy.clearLocalStorageSnapshot();
      });
    beforeEach(function(){
        cy.restoreLocalStorage()
        cy.fixture('userlogin').then((user) => {
            this.user = user
        })
       
    
    })
    afterEach(function(){
        cy.saveLocalStorage()
    })
    
    it("登录1",function() {
        cy.visit("https://tpl-test.newchiwan.cn/")
        cy.viewport(1920,1080)
        login.username().type(this.user.username)
        login.password().type(this.user.password)
        login.code().type(this.user.code)
        login.submit().click()           
        cy.title().should("include","TPL")
        cy.wait(1000)
    })
    it("创建审批流",function(){
        cy.contains("")


    })
})