@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.

    Background:
        Given user is on payment plan page


    @sep16-1
    Scenario: The next button should be enabled when plan is selected
        When user selects a payment plan
        Then the next button should be enabled

    @sep16-2
    Scenario: Clicking next button after selecting a plan will take the user to the Step 3 Review page
        When user selects a payment plan
        And user clicks the next button on Payment Plan page
        Then the Review page should be displayed

    @sep16-3
    Scenario: Clicking next button after selecting a plan will take the user to the Step 3 Review page
        When user selects a payment plan
        And user clicks the next button on Payment Plan page
        Then the start application stepper circle color should be green
        And the payment plan stepper circle color should be green
        And the review stepper circle color should be blue

    @sep16-4
    Scenario:Payment component for Upfront should be displayed on Step 3 Review page
        When user selects an Upfront payment plan
        And user clicks the next button on Payment Plan page
        Then the Upfront payment component should be displayed on Review page

    @sep16-5
    Scenario:Payment component should be displayed on Step 3 Review page
        When user selects a 5 Installments payment plan
        And user clicks the next button on Payment Plan page
        Then the 5 Installments payment component should be displayed on Review page

    @sep16-6
    Scenario: The back button should be displayed
        Then the back button should be displayed


