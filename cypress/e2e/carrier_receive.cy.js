import Login from '../integration/page/login'

describe('承运商运输',() => {
   
    const login=new Login()
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
    })

        // it("登录2",()=>{
        // cy.visit("https://tpl-test.newchiwan.cn/")
        // cy.viewport(1920,1080)
        // cy.fixture('userlogin').then((user) => {
        //     login.username().type(user.username)
        //     login.password().type(user.password)
        //     login.code().type(user.code)
        //     login.submit().click()         
        // })
        // cy.title().should("include","TPL")
        // })
    

     it("承运商付款",()=>{
        cy.contains("财务管理").click()
        cy.contains("承运商结算").click()
        cy.contains("付款管理").click()
        cy.get(".ant-table-tbody >tr:nth-child(2) >td button:nth-child(2)").click()
        cy.get("[data-testid='form-regex-input']").type(1)
        cy.get("#vouchers_0_payedAt").click()
        cy.contains("此刻").click()
        cy.contains("确 定").click()
        cy.wait(2000)

    })



   it("承运商核销",()=>{

    cy.contains("对账管理").click()
    cy.contains("对账核销").click()
    // cy.get(".ant-tabs-nav-list >div:nth-child(2) >#rc-tabs-0-tab-CARRIER_PENDING_STATEMENT").click()
    // cy.debug()
    cy.get(".ant-table-tbody >tr:nth-child(2) >td:nth-child(2) >button [data-testid='setting-icon']").click()
    cy.get(".ant-popover-inner-content button:nth-child(1)").click()
    cy.contains("确认核销").click()

})
})
