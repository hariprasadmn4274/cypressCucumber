import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";

// No need to mention background keyword here

Given('go to login page', () => {
    cy.visit('https://demo.guru99.com/test/newtours/');
});

Before(() => {  // This will execute before the start of the first scenario
    cy.reload();
});

After(() => {   // This will execute after the last scenario
    cy.reload();
});

When('enter username and password through datatable', (dataTable) => {
    // Convert the dataTable into an array of objects (each row as an object)
    dataTable.hashes().forEach((element) => {
        cy.xpath("//input[@name='userName']").type(element.username);
        cy.xpath("//input[@name='password']").type(element.password);
        cy.xpath("//input[@name='submit']").click();
    });
});

Then('verify title, it should be like {string}', (title) => {
    cy.title().should('eq', title);  // Use the passed title parameter for comparison
});

Then('verify error message, it should be like {string}', (errorMessage) => {
    cy.xpath("//span[normalize-space()='Enter your userName and password correct']")
      .invoke('text')  // Get the text content of the element
      .then((text) => {
          expect(text.trim()).to.equal(errorMessage);  // Trim whitespace and compare
      });
});
