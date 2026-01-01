@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    #TODO: Create scenarios that cover all the acceptance criteria
    
    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: The system should display the text "Secure Checkout".
        Then the page should display the text 'Secure Checkout'

    @sep07-2
    Scenario: The system should display the program name "Test Automation with Selenium".
        Then the program name should be displayed 'Test Automation with Selenium'

    @sep07-3
    Scenario: Users should see a footer on the left side of the page: logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
        Then the footer should display logo
        And the footer should display Terms and Conditions
        And the footer should display Privacy Policy
        And the footer should display Disclaimer
        And the footer should display Cookie Policy

    @sep07-4
    Scenario: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
        Then the footer should display Need help?

