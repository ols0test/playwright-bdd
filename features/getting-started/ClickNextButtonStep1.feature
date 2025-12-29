@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep19-1 @smoke
    Scenario: Clicking next button after providing all the personal details will take the user to the payment plan step
        When user enters the first name
        And user enters lastname
        And user enters email address
        And user enters phone number
        And user select from How did you hear about us?
        And user clicks the next button on Start Application Step
        Then user will land on the Payment plan step
        And the start application stepper circle color should be green
        And the payment plan stepper circle color should be blue


