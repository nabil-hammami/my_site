Feature: Project Online Store : Authentication on the login page
  Only registered customer should be able to log in
  Valid credentials are login=Peter and password=Parker

  Scenario: I shouldn't be able to log in if the login is missing
    Given I am connected on the log in page
    When I fill the password
    And the login is empty
    And I click on the submit button
    Then an error message telling me "The login is mandatory" must be displayed

  Scenario: I shouldn't be able to login if the password is missing
    Given I am connected on the log in page
    When I fill the login
    And the password is empty
    And I click on the submit button
    Then an error message saying "The password is mandatory" must be displayed


  Scenario: As a registered user, I should be able to log in with my login and password
    Given I am a registered user
    When I fill my login
    And I fill my password
    And I click on the submit button
    Then the Order page must be displayed

  Scenario Outline: Login and passwords are case sensitive
    Given I am a registered user
    When I fill a <login>
    And I fill a <password>
    And I click on the submit button
    Then an error message saying "Invalid credentials" must be displayed
    Examples:
      | login | password |
      | peter | parker   |
      | pEtEr | pArkeR   |

  Scenario Outline: I shouldn't be able to log in with invalid credentials
    Given I am not a registered user
    When I fill a <login>
    And I fill a <password>
    And I click on the submit button
    Then an error message saying "Invalid credentials" must be displayed
    Examples:
      | login | password |
      | admin | 1234     |
      | Chuck | Norris   |




