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

    cy.get("[data-testid='confirm-button']").should("contain","确 定")
    cy.get("[data-testid='car-province-select']").click()

    cy.get('.ant-select-item-option-content').eq(0).click({force: true})
    const data=Math.random().toString(36).slice(3,8)
    console.log(data)
    cy.get("[data-testid='car-plate-input']").type(data)
    cy.get("#plateColorCode").click()
    cy.get('#plateColorCode_list + div .ant-select-item-option-content').eq(0).click({force: true})
    cy.get("#vehicleTypeCode").click()
    cy.get('#vehicleTypeCode_list + div .ant-select-item-option-content').eq(0).click({force: true})
    cy.get("#vehicleLengthCode").click()
    cy.get('#vehicleLengthCode_list + div .ant-select-item-option-content').eq(0).click({force: true})
    cy.contains("确 定").click()

    cy.contains("司机管理").click()
    cy.contains("添 加").click()
    cy.get("[data-testid='create-drivers-name']").type("司机姓名1")
    cy.get("[data-testid='create-drivers-phone']").type("16111111111")
    cy.get(".ant-select-selection-overflow").click({force: true} )

    // cy.get('#vehicles_list + div').contains("京" + data).click()
    cy.contains("确 定").click()


    })
})