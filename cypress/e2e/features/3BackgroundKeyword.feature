Feature: newtour web page login through datatable 

    Background:             #this key word make sure that function within backgroud will be performed before evrey scenario
        Given go to login page

    Scenario: enetering valid credentials as parameters in datatable

        

        When enter username and password through datatable
            | username | password |
            | mercury  | mercury |

        Then verify title, it should be like 'Login: Mercury Tours'

    
    Scenario: enetering invalid credentials as parameters in datatable


        When enter username and password through datatable
            | username | password |
            | hari     | prasad   |

        Then verify error message, it should be like 'Enter your userName and password correct'


