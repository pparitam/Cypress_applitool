/// <reference types="@applitools/eyes-cypress" />


describe('Test',()=>{

    it('login_blank',()=>{
      cy.eyesOpen({
        appName: 'AMTS_new_1',
        testName: 'login_screen_1',
        browser: { width: 1300, height: 800 },
      })
        cy.visit('http://qa-h47ppbq-43w4be57n67uu.us.platform.sh/user/login')
        cy.get('#edit-name').type('ceu_test@example.com')
        cy.eyesCheckWindow({
            target: 'region',
            selector: '#edit-name',
          });
        cy.get('#edit-pass').type('123456')
        cy.eyesClose()
    })
})