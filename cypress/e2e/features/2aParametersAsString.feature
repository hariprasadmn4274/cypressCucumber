Feature: newtours demoguru web page login
Scenario: valid user login with credentials

Given going to login page

When entering credentials 'mercury' and 'mercury' 

And click on submit button

Then  the title should be 'Login: Mercury Tours'