describe('自动化',()=>{
    it('get',()=>{
        cy.request({url:'/user',methd:'GET'})
        .its('body')
        .should('include','sss')

    })
})