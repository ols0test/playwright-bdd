@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.

    Background:
        Given user is on payment plan page

    @sep14-1
    Scenario: The Next button is disabled by default
        Then the next button should be disabled

    @sep14-2
    Scenario: The Upfront payment plan is highlighted when the user selects it
        When user selects an Upfront payment plan
        Then the Upfront payment plan should be highlighted
        And the next button should be enabled

    @sep14-3
    Scenario: The 5 Installments payment plan is highlighted when the user selects it
        When user selects a 5 Installments payment plan
        Then the 5 Installments payment plan should be highlighted

    @sep14-4
    Scenario: The user can change their plan selections
        Given user selects an Upfront payment plan
        When user selects a 5 Installments payment plan
        Then the 5 Installments payment plan should be highlighted