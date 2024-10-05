Feature: user login

Scenario: valid credentials

Given visit to login page

When  enter valid credentials
        | username | tomsmith |
        | password | SuperSecretPassword! |

Then user should redirected to home page