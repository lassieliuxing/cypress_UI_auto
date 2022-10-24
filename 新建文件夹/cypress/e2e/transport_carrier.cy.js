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
    cy.contains("受理开单").click()
    cy.get(".ant-menu-title-content").should("contain","创建受理单")
    cy.contains("创建受理单").click()
    cy.get("#customerId").click()
    cy.contains('客户企业2').click()
    cy.get("#clientCode").type("20221013")
    cy.get("#shipperName").type("发货人1")
    cy.get("#shipperAddress").type("发货地址1")
    cy.get("#takeDeliveryAddress").type("收货地址1")
    cy.get("#orderCargoes_0_name").type("货物名称 11")
    cy.get("[data-testid='cargo-total-weight-input']").click({force:true}).type("200")
    cy.get("[data-testid='form-fee-input']").type("300")
    cy.get("[data-testid='create-order-submit-button']").click()
    cy.contains("运输管理").click()
    cy.contains("调度计划").click()
    cy.get(".ant-table-row.ant-table-row-level-0.custom-table-row button").contains('调度').click()  
    cy.contains('承运商调度').click()  
    cy.get("#rc-tabs-0-panel-2 [data-testid='dispatch-waybill-drivers-select']").click()
    cy.contains('承运商30-1').click()

    cy.get("#rc-tabs-0-panel-2 #planLoadingAt").click({force: true})
    
    cy.contains("此刻").click({force: true})

    cy.get("[data-testid='form-fee-input']").type(3000)
    cy.get("#rc-tabs-0-panel-2 [data-testid='confirm-button']").click()
    cy.contains("承运商运输").click()
    cy.get(".ant-table-tbody >tr:nth-child(2) >td button").click()
    cy.contains("异常上报").click()
    cy.get("#anomalyTypeCode").click()
    cy.contains("货损").click()
    cy.get("#revisedAmount").type(20)
    cy.contains("确 定").click()
    cy.title().should("include","TPL")
    cy.get(".ant-table-tbody >tr:nth-child(2) >td button > [data-testid='setting-icon']").click()  
    cy.contains("签收").click()
    cy.contains("财务管理").click()
    cy.contains("承运商结算").click()
    cy.contains("对账管理").click()
    cy.get("#carrierName").click()
    cy.contains("承运商30-1").click()
    cy.contains("查询").click()
    cy.get(".ant-table-tbody  >tr:nth-child(2) >td:nth-child(1) >label >span").click({force: true})
    cy.contains("对 账").click()

  })


})