/// <reference types="@applitools/eyes-cypress" />


describe('LoginPage',()=>{
    beforeEach(()=>{
        cy.eyesOpen({
           appName: 'AMTS_new',
           testName: 'login_screen_1',
           browser: { width: 1300, height: 800 },
         })
       })
    afterEach(()=>{
        cy.eyesClose()
    })
    it('login_blank',()=>{
        cy.visit('http://qa-h47ppbq-43w4be57n67uu.us.platform.sh/user/login')
        cy.eyesCheckWindow('blank_form')
        cy.get('#edit-name').type('ceu_test@example.com')
        cy.eyesCheckWindow({
            target: 'region',
            selector: '#edit-name',
          });
        cy.get('#edit-pass').type('123456')
        cy.eyesCheckWindow('filled_form')
        cy.get('#edit-submit').click()
        cy.wait(100)
        cy.eyesCheckWindow('termsandcondition')
    })
})