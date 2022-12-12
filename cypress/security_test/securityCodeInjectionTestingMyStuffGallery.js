/// <reference types="Cypress" />
import 'cypress-file-upload'

describe('Code Injection Test', ()=>{

    it.only('Security Code Injection Testing My Stuff Profile Page', () => 
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

    it.skip('profile Page Code Injection not allowed', () => 
    {
        const scriptImagePath = '<script>alert(\'test\')<:script>.png';
        cy.visit('https://testing-06.vshred.com')
        cy.login('mc_member@test.com','pass1234')
        cy.get('.btn').click()
        cy.get('.menu-vertical > :nth-child(4) > a').click()
        cy.get('.btn__text').click()
        cy.get('#images').attachFile(scriptImagePath)
        cy.wait(5000)
        
        //cy.get('#images').a
        //(scriptImagePath)
        //cy.logout()
    })

    it.skip('profile Page Code Injection not allowed', () => 
    {
        const scriptImagePath = '<script>alert(\'test\')<:script>.png';
        cy.visit_vshred_test_env()
        cy.login('mc_member@test.com','pass1234')
        //cy.login('maryann.c@vshred.com','VshredPass@2')
        cy.get('.btn').click()
        cy.get('.menu-vertical > :nth-child(4) > a').click()
        cy.get('.btn__text').click()
        cy.get('#images').attachFile(scriptImagePath)
        cy.wait(5000)
        
        //cy.get('#images').a
        //(scriptImagePath)
        cy.logout()
    })

    it.only('My Stuff Gallery Image Upload Code Injection not allowed', () => 
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
        
    })
    
})