/// <reference types="Cypress" />
/// <reference types="cypress-file-upload" />
/// <reference types="cypress-iframe" />
/// <reference types = "cypress-xpath" />
import 'cypress-file-upload';
import 'cypress-iframe';
//import 'cypress-wait-until';


describe('Code Injection Test', ()=>{

    it.skip('Security Code Injection Testing My Stuff Profile Page', () => 
    {

        const scriptImagePath = '<script>alert(\'test\')<:script>.png';
        const dayjs = require('dayjs')
        const Timenow24hoursa = dayjs().format("Hmmss");
        const CAUser = 'CA_SuperAdmin_'+dayjs().format('DDMMYYYY')+Timenow24hoursa;
        cy.create_user_as_super_admin(CAUser)
        cy.login(CAUser+'@catest.com','pass1234')
        cy.get('.modal-active').click(-50, -50, { force: true });
        // Update Profile Name
        cy.get('#name').clear()
        cy.get('#name').type("<script>alert('test')</script>")
        cy.get('#profile-gender').select("Male")
        cy.get('.row > .col-md-3 > .btn').click()
        cy.get('.toast-message').invoke("text").should("eq","Profile updated")


        cy.logout()
    })

    it.skip('My Stuff Gallery Image Upload Code Injection not allowed', () => 
    {
        const scriptImagePath = '<script>alert(\'test\')<:script>.png';
        const dayjs = require('dayjs')
        const Timenow24hoursa = dayjs().format("Hmmss");
        const CAUser = 'CA_SuperAdmin_'+dayjs().format('DDMMYYYY')+Timenow24hoursa;
        cy.create_user_as_super_admin(CAUser)
        cy.login(CAUser+'@catest.com','pass1234')
        cy.wait(5000)
        cy.get('.modal-active').click(-50, -50, { force: true });
        cy.get('.menu-vertical > :nth-child(4) > a').click()
        cy.get(':nth-child(1) > .col-sm-4 > .btn').click()
        //upload image
        cy.wait(5000)
        cy.get('#images').attachFile(scriptImagePath)
        cy.get('.toast-message').invoke("text").should("eq","Added 1 images to your gallery!")
        cy.get('.modal-active').click(-50, -50, { force: true });
        cy.wait(5000)
        //update image title
        cy.get('.edit-image > .fa').click()
        cy.get('#swal2-content > #edit-image-form > .row > :nth-child(2) > #title2').type(scriptImagePath)
        cy.get('.swal2-confirm').click()
        cy.get('.toast-message').should('contain',"Updated image")
        //update image desc
        cy.wait(5000)
        cy.get('.edit-image > .fa').click()
        cy.get('#swal2-content > #edit-image-form > .row > :nth-child(2) > #title2')
        cy.get('.swal2-confirm').click()
        cy.get('.toast-message').should('contain',"Updated image") 
        //delete image
        cy.get('.delete-image > .fa').click()
        cy.get('.swal2-confirm').click()
        cy.get('.toast-message').should('contain',"Deleted image")
        //cy.get('.toast-message').should('not.include.text', 'test')
        cy.wait(5000)
        cy.get('.menu-vertical > :nth-child(5) > a').click()
        
    })

    it.skip('Security Code Injection Testing My Stuff Profile Page', () => 
    {

        const scriptImagePath = '<script>alert(\'test\')<:script>.png';
        const dayjs = require('dayjs')
        const Timenow24hoursa = dayjs().format("Hmmss");
        const CAUser = 'CA_SuperAdmin_'+dayjs().format('DDMMYYYY')+Timenow24hoursa;
        cy.create_user_as_super_admin(CAUser)
        cy.login(CAUser+'@catest.com','pass1234')
        cy.wait(5000)
        cy.get('.modal-active').click(-50, -50, { force: true });
        // Update Password
        cy.get(':nth-child(3) > .menu-vertical > :nth-child(2) > a').click()
        cy.get('#current_password').type('pass1234')
        cy.get('#password').type(scriptImagePath)
        cy.get('#password_confirmation').type(scriptImagePath)
        cy.get('.form-horizontal > .col-md-3 > .btn').click()
        cy.get('.toast-message').should('contain',"Password updated") 
        cy.get('.modal-active').click(-50, -50, { force: true });
        cy.get('.menu-vertical > :nth-child(5) > a').click()
        //cy.logout()
    })

    it.skip('Security Code Injection Testing Vshred Boost Questionaire', () => 
    {

        const scriptImagePath = '<script>alert(\'test\')<:script>.png';
        const dayjs = require('dayjs')
        const Timenow24hoursa = dayjs().format("Hmmss");
        const CAUser = 'CA_SuperAdmin_'+dayjs().format('DDMMYYYY')+Timenow24hoursa;
        
        cy.create_user_as_super_admin(CAUser)
        cy.login(CAUser+'@catest.com','pass1234')
        cy.wait(5000)
        cy.get('.modal-active').click(-50, -50, { force: true })
        // Update Password
        cy.get('#questionnaire').click()
        cy.get(':nth-child(2) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type(scriptImagePath)
        cy.get(':nth-child(4) > [data-v-e264feca=""] > .cdp-field > .cdp-input').invoke('removeAttr','type').type('1980-12-12{enter}');
        cy.get(':nth-child(5) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type(scriptImagePath)
        cy.get(':nth-child(6) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type(scriptImagePath)
        cy.get(':nth-child(7) > [data-v-e264feca=""] > .cdp-field > .cdp-input').select(3)
        cy.get(':nth-child(8) > [data-v-e264feca=""] > .cdp-field > .cdp-input').select(3)
        cy.get(':nth-child(9) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type('Test')
        cy.get(':nth-child(10) > [data-v-e264feca=""] > :nth-child(1) > :nth-child(2) > .radio-container > .checkmark').click()
        cy.get(':nth-child(11) > [data-v-e264feca=""] > :nth-child(1) > :nth-child(2) > .radio-container > .checkmark').click()
        cy.get(':nth-child(12) > [data-v-e264feca=""] > :nth-child(1) > :nth-child(2) > .radio-container > .radio-container-label').click()
        cy.get(':nth-child(12) > [data-v-e264feca=""] > :nth-child(1) > :nth-child(2) > .radio-container > .radio-container-label').click()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .radio-container > .radio-container-label').click()
        cy.get(':nth-child(14) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type(scriptImagePath)
        cy.get(':nth-child(15) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type(scriptImagePath)
        cy.get(':nth-child(16) > [data-v-e264feca=""] > .cdp-field > .cdp-input').type(scriptImagePath)
        cy.get('#recaptcha_daf684c020cdc47e9b4d21b4163e7ca0').click()
        cy.get('[data-modal-index="1"] > .modal-content > .boxed').should('contain',"Vshred Boost Questionnaire Submitted!") 
        cy.wait(5000)
        cy.get('[data-modal-index="1"]').click(-50, -50, { force: true })
        cy.wait(5000)
        cy.get('.menu-vertical > :nth-child(5) > a').click()
        //cy.logout()
    })
    
    describe('uncaught_exception', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        it.only('Security Code Injection Testing Order Form', () =>
          {
              const scriptImagePath = '<script>alert(\'test\')<:script>.png';
              const dayjs = require('dayjs')
              const Timenow24hoursa = dayjs().format("Hmmss");
              const CAUser = 'CA_SuperAdmin_'+dayjs().format('DDMMYYYY')+Timenow24hoursa;
              cy.visit('https://staging.vshred.com')
              cy.create_user_as_super_admin(CAUser)
              cy.login(CAUser+'@catest.com','pass1234')
              cy.wait(15000)
              cy.get('.modal-active').click(-50, -50, { force: true })
              // Go to Program
              cy.get('.menu-horizontal > :nth-child(2) > a').click()
              cy.get(':nth-child(1) > .programs__container > :nth-child(1) > .programs__image-link > .programs__image').click()
              cy.get('.btn').click()
              //Verify Order Form page
              cy.get('h2')
                  .contains('What You Get Today').should('be.visible')
              cy.wrap(Math.floor(Math.random() * 8999999999 + 1000000000)).as("randomInt")
              cy.get("@randomInt").then((rand) => {cy.log(rand)
                  cy.get('#phone').type(rand)
                  });
              cy.get(':nth-child(3) > .expand-area > .expand-inputs > .next-step').click()
              cy.wait(15000)
              ///PAYMENT INFORMATION SECTION
              cy.OrderFormCommandSecondStep()
              cy.logout()
          })
      })

})