Feature: Navigation
  All links must work as expected
# Comments

  Scenario: The logbook link must load logBook.html in the main frame
    Given I am connected to the website
    When I click on the logbook link
    Then the main frame must contain LogBook

  Scenario: The Latest test result link must load the Cucumberjs Report in the main frame
    Given I am connected to the website
    When I click on the Latest test results link
    Then the main frame must contain Cucumberjs Report

  Scenario: The Roadmap link must load the roadmap picture in the main frame
    Given I am connected to the website
    When I click on the Roadmap link
    Then the main frame must contain roadmap.png