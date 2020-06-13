/// <reference types="Cypress" />
describe('Homepage_test',()=>{
   beforeEach(()=>{
     cy.eyesOpen({
        appName: 'Axelerant',
        testName: 'My first JavaScript test!',
        browser: { width: 1300, height: 800 },
      });
    })
    afterEach(()=>{
        cy.eyesClose()
    })
    it('Test_text',()=>{
        cy.visit('https://www.axelerant.com/')
        // cy.get('.banner__title').should('have.text','You need to take them higher with digital.')
        cy.eyesCheckWindow('my custom page.')
        // cy.eyesClose();
    })
    it('test_about_us',()=>{
        cy.visit('https://www.axelerant.com/about')
        cy.eyesCheckWindow('About_Us')
    })
})