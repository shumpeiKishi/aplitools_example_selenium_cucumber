Feature: Compare images
As an test learner
In order to confirm no visual regression
I want to compare image using applitools

  Scenario: Compare Applitools Hello world
    Given I start Applitools test named "My second JS test"
    When I go to "https://applitools.com/helloworld"
    Then I should see the same page visual of "Second Main Page"

  Scenario: Compare Applitools Hello World after clicking button
    Given I start Applitools test named "My another JS test"
    When I go to "https://applitools.com/helloworld"
    And I click the button
    Then I should see the same page visual of "Clicked page"