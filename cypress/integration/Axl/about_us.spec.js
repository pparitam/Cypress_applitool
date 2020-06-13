/// <reference types="Cypress" />
describe('Homepage_test',()=>{
    beforeEach(()=>{
      cy.eyesOpen({
         appName: 'Axelerant',
         testName: 'CrossBrowser+Visual',
       });
     })
    
     it('test_about_us',()=>{
         cy.visit('https://www.axelerant.com/about')
         cy.eyesCheckWindow()
     })
     afterEach(()=>{
        cy.eyesClose()
    })
 })