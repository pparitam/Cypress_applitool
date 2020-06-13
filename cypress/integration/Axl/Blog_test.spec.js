/// <reference types="Cypress" />
describe('blog_test',()=>{

     afterEach(()=>{
         cy.eyesClose()
     })
     it('Verify_thechange',()=>{
        cy.eyesOpen({
            appName: 'Axelerant',
            testName: 'blog_page',
            browser: { width: 1300, height: 800 }
          });
         cy.visit('https://www.axelerant.com/resources/team-blog')
         cy.eyesCheckWindow()
     })
     it('Verify_thechange',()=>{
        cy.eyesOpen({
            appName: 'Axelerant',
            testName: 'Article',
            browser: { width: 1300, height: 800 },
          });
         cy.visit('https://www.axelerant.com/resources/articles')
         cy.eyesCheckWindow()
     })
 })