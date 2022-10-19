describe('承运商核销',()=>{
    beforeEach(()=>   
    cy.visit("https://tpl-test.newchiwan.cn/")

    )
    it("登录-承运商核销",()=>{
    cy.viewport(1920,1080)
    cy.get('#phone').type('18900000000')
    cy.get('#password').type('1111111l')
    cy.get('#code').type('1111')
    cy.get("[data-testid='signin-sumbit-button']").click()
    cy.title().should("include","TPL")
    cy.contains("财务管理").click()
    cy.contains("承运商结算").click()
    cy.contains("对账管理").click()
    cy.contains("对账核销").click()
    // cy.get(".ant-tabs-nav-list >div:nth-child(2) >#rc-tabs-0-tab-CARRIER_PENDING_STATEMENT").click()
    cy.get(".ant-table-tbody >tr:nth-child(2) >td:nth-child(2) >button").click()
    cy.contains("核销").click()

})
})
     
