        Feature: Login on homepage.
        
        Scenario: Successful login
        Given I visit the homepage.
        When I click on the "login" button.
        Then I should see the login form.
        When I input the email "testlogin@atest.com".
        And I input the password "password1".
        And I click the "submit" button.
        Then I should see the users welcome page.

        Scenario: Unsuccessful login 
        Given I visit the homepage.
        When I click on the "login" button.
        Then I should see the login form.
        When I input the email "fakeEmail@fake.com".
        And I input the password "not a password".
        And I click the "submit" button.
        Then I should see an error message under the login form.