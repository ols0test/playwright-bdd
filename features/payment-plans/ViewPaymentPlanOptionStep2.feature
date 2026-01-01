@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)
    #*            Installment plans should be unique



    Background:
        Given user is on payment plan page

    @sep17-1
    Scenario: The system should display only one upfront price.
        Then the text for upfront payment should be Upfront for the first line
        And the text for upfront payment should be 400 pay once for the second row

    @sep17-2
    Scenario: The system should display installment plan correctly.
        Then the text for upfront payment should be 5 Installments for the first row
        And the text for upfront payment should be 100 per month for the second row
    
    @sep17-3
    Scenario: The system should show only 2 payments plans.
        Then there should be only two payment plans displayed



    
