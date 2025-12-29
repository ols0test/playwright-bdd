@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Verify Program Start Date and Refund date are displayed in Step 1
        Then the program start date is displayed
        And the program refund date is displayed

    Scenario: Verify that the program start date and refun date are correct
        Then the displayed start date for program is correct
        And the displayed refund date for program is correct



