describe('承运商运输',()=>{
    beforeEach(()=>   
    cy.visit("https://tpl-test.newchiwan.cn/")

    )
     it("登录-开单-调度-承运商",()=>{
    cy.viewport(1920,1080)
    cy.get('#phone').type('18900000000')
    cy.get('#password').type('1111111l')
    cy.get('#code').type('1111')
    cy.get("[data-testid='signin-sumbit-button']").click()
    cy.title().should("include","TPL")
    cy.contains("财务管理").click()
    cy.contains("承运商结算").click()
    cy.contains("付款管理").click()

    
})
})
