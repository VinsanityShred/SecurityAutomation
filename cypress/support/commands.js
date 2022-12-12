// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

Cypress.Commands.add('login',(email,password) =>{
    cy.get('.btn__text').click()
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get(':nth-child(3) > .btn').click()
})

Cypress.Commands.add('logout',() => {
    cy.get('.menu-horizontal > :nth-child(8)').click()
    cy.get('.btn').click()
    cy.get('.menu-vertical > :nth-child(5) > a').click()
    cy.wait(5000)

})

Cypress.Commands.add('visit_vshred_test_env',() => {
    cy.visit('https://testing-07.vshred.com')
    cy.clearCookies()
})

Cypress.Commands.add('create_user_as_super_admin', (CAUser) => 
    {   
        cy.visit_vshred_test_env()
        cy.login('super@example.com','asdfasdf')
        //cy.login('maryann.c@vshred.com','VshredPass@2')
        cy.get(':nth-child(14) > .nav-link').click()
        cy.get('.btn > span').click()
        cy.wait(5000)
        cy.get('div > #user-name').type(CAUser)
        cy.get('div > #user-email').type(CAUser+'@catest.com')
        cy.get('div > #user-password').type('pass1234')
        cy.get('div > #user-confirm').type('pass1234')
        cy.get('#createFormModal___BV_modal_footer_ > .btn-primary').click()
        cy.wait(5000)
        cy.get('.navbar > .nav > :nth-child(2) > .nav-link').click()
    })