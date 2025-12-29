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
        Given user is on the enrollment page
        And user has completed Step 1 with valid information
        And user navigates to Step 2 Payment Plans


    #TODO: Create scenarios that cover all the acceptance criteria

    Scenario: Verify that the next button is disabled by default
        Then the Next button will be disabled by default

    Scenario: Verify that the next button is enabled when user selects upfront payment plan
        When user clicks on Upfront payment Option
        Then the Next button will be enabled

    Scenario: Verify that the next button is enabled when user selects installment payment plan
        When user clicks on Installment payment Option
        Then the Next button will be enabled

    #TODO: Create scenarios that cover all the acceptance criteria


