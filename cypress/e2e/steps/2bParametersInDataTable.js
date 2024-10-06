import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('be in login page',()=>{
    cy.visit('https://demo.guru99.com/test/newtours/')
})

When('enter username and password through datatable',(dataTable)=>{
        // Convert the dataTable into an array of objects (each row as an object)
        dataTable.hashes().forEach((element) => {
        cy.xpath("//input[@name='userName']").type(element.username)
        cy.xpath("//input[@name='password']").type(element.password)
        cy.xpath("//input[@name='submit']").click()

    });
})


Then('verify title, it should be like {string}',(title)=>{
    cy.title().should('eq','Login: Mercury Tours')
})