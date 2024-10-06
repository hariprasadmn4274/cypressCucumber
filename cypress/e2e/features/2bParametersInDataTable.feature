Feature: newtour web page login through datatable 

    Scenario: enetering valid credentials as parameters in datatable

        Given be in login page

        When enter username and password through datatable
            | username | password |
            | mercury  | mercury |

        Then verify title, it should be like 'Login: Mercury Tours'


