/// <reference types="Cypress" />
import { DatepickerPo } from '../support/datepicker.po';
import { DropdownsPo } from '../support/dropdowns.po';
import { ModalsPo } from '../support/modals.po';
import { TabsPo } from '../support/tabs.po';
import { TypeaheadPo } from '../support/typeahead.po';
describe('blog_test',()=>{
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
    it('Verify_thechange',()=>{
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