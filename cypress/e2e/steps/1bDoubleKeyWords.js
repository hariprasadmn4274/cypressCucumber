const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('the user is on the login page', () => {
    cy.visit('https://the-internet.herokuapp.com/login'); // navigate to the login page
});

When('the user enters valid credentials', (dataTable) => {
    const data = dataTable.rowsHash();
    cy.get('#username').type(data.username); // typing username
    cy.get('#password').type(data.password); // typing password
});

When('the user clicks on the login button', () => {
    cy.get('button[type="submit"]').click(); // click the login button
});

Then('the user should be redirected to the secure area', () => {
    cy.url().should('include', '/secure'); // Verify user is on the secure area page
});

Then('a success message should be displayed', () => {
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!'); // Verify success message
});
