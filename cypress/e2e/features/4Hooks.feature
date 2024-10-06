Feature: newtour web page login through datatable 

    Background:  # This keyword ensures that functions within the background will be performed before every scenario
        Given go to login page

    Scenario: entering valid credentials as parameters in datatable
        When enter username and password through datatable
            | username | password |
            | mercury  | mercury |
        Then verify title, it should be like 'Login: Mercury Tours'

    Scenario: entering invalid credentials as parameters in datatable
        When enter username and password through datatable
            | username | password |
            | hari     | prasad   |
        Then verify error message, it should be like 'Enter your userName and password correct'
