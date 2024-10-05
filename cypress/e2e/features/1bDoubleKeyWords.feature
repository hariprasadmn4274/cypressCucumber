Feature: User Login

  Scenario: Successful login with valid credentials

    Given the user is on the login page

    When the user enters valid credentials
      | username | tomsmith               |
      | password | SuperSecretPassword!   |

    And the user clicks on the login button
    
    Then the user should be redirected to the secure area
    And a success message should be displayed
