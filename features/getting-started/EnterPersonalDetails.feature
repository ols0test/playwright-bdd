@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: The system should display default field type and value for First Name and Last name fields
        Then the first name field should have default value as First Name
        And the last name field should have default value as Last Name

    @sep10-2
    Scenario: Verify system  does not accept emails in incorrect format
        When user enters the first name
        And user enters lastname
        And user enters invalid email address
        And user enters phone number
        And user clicks the next button on Start Application Step
        Then user stays on the Start Application step
        And the start application stepper circle color should be blue

    @sep10-3
    Scenario: Verify phone field doesn't accept letters
        When user enters invalid data in the phone field
        And user clicks the next button on Start Application Step
        Then user stays on the Start Application step
        And the start application stepper circle color should be blue

