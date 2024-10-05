import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('visit to login page',()=>{
    cy.visit('https://the-internet.herokuapp.com/login');
})

When('enter valid credentials',(dataTable)=>{
    const credentials=dataTable.rowsHash();
    cy.get('#username').type(credentials.username);
    cy.get('#password').type(credentials.password);
    cy.get('button[type="submit"]').click();
})

Then('user should redirected to home page',()=>{
    cy.url().should('include','/secure')
})