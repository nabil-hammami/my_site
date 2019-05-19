Feature: Navigation
  All links must work as expected

  Scenario: The logbook picture must load logBook.html in the main frame
    Given I am connected to the website
    When I click on the logbook picture
    Then the main frame must contain LogBook