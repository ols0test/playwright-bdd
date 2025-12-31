@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in transparent.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page


    @sep08-1
    Scenario: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
        Then the stepper should display 'Start Application'
        And the stepper should display 'Payment Plan'
        And the stepper should display 'Review'

    @sep08-2
    Scenario: The system should highlight "Start Application" in blue.
        Then the start application stepper circle color should be blue

    @sep08-3
    Scenario: The system should display "Payment Plan" and "Review" in transparent.
        Then the payment plan stepper circle color should be transparent
        And the review stepper circle color should be transparent