import { Given,When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('going to login page',()=>{
    cy.visit('https://demo.guru99.com/test/newtours/')

})
When('entering valid credentials {string} and {string}',(username,password)=>{
    cy.xpath("//input[@name='userName']").type(username)
    cy.xpath("//input[@name='password']").type(password)
})
And('click on submit button',()=>{
    cy.xpath("//input[@name='submit']").click()
})
Then('the title should be {string}',(title)=>{
    cy.title().should('eq','Login: Mercury Tours')
})