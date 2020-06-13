/// <reference types="Cypress" />
describe('blog_test',()=>{
    beforeEach(()=>{
      cy.eyesOpen({
         appName: 'Axelerant',
         testName: 'Axelerant AboutUs page',
         browser: { width: 1300, height: 800 },
       });
     })
     afterEach(()=>{
         cy.eyesClose()
     })
     it('Verify_thechange',()=>{
         cy.visit('https://www.axelerant.com/resources/team-blog')
         cy.eyesCheckWindow()
     })
 })