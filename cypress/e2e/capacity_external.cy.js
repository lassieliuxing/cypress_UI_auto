describe('外协运力',()=>{
    beforeEach(()=>   
    cy.visit("https://tpl-test.newchiwan.cn/")

    )
    it('新增车辆-新增司机',()=>{
    cy.viewport(1920,1080)
    cy.get('#phone').type('18900000000')
    cy.get('#password').type('1111111l')
    cy.get('#code').type('1111')
    cy.get("[data-testid='signin-sumbit-button']").click()
    cy.title().should("include","TPL")
    cy.contains("运力管理").click()
    cy.contains("外协运力").click()
    cy.contains("车辆管理").click()
    cy.contains("添 加").click()
    cy.get("[data-testid='car-province-select']").click()
    cy.wait(1000)
    cy.contains("京").click({force: true})
    cy.get("[data-testid='car-plate-input']").type("20221017")
    cy.get("#plateColorCode").click()
    cy.contains("绿色").click({force: true})
    cy.get("#vehicleTypeCode").click()
    cy.contains("低栏").click({force: true})
    cy.get("#vehicleLengthCode").click()
    cy.contains("13").click({force: true})
    cy.contains("确 定").click()

    cy.contains("司机管理").click()
    cy.contains("添 加").click()
    cy.get("[data-testid='create-drivers-name']").type("司机姓名1")
    cy.get("[data-testid='create-drivers-phone']").type("16111111111")
    cy.contains("请选择或输入您的车牌号").click()
    cy.contains("京20221017").click()
    cy.contains("确 定").click()


    })
})