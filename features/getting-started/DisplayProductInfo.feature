@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep09-1
    Scenario: The product name should be displayed on the information card.
        Then the product name should be displayed on the information card

    @sep09-2
    Scenario: The product name on the information card matches the product name on the left side of the screen.
        Then the start application stepper circle color should be blue

    @sep09-3
    Scenario: The price of the product should be displayed.
        Then the price of the product should be displayed

    @sep09-4
    Scenario: The text indicating a flexible payment plan should be available and displayed.
        Then the text indicating a flexible payment plan should be displayed

    @sep09-5
    Scenario: The program start date should be displayed.
        Then the program start date is displayed

    @sep09-6
    Scenario: The return policy and the final date for returns should be displayed.
        Then the return policy should be displayed
        And the program refund date is displayed