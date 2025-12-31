import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then("the page should display the text 'Secure Checkout'", async function () {
    const ACTUAL_CHECKOUT_TEXT = await leftMainPage.secureCheckout.innerText();
    const EXPECTED_CHECKOUT_TEXT = "Secure checkout ";
    expect(ACTUAL_CHECKOUT_TEXT).toBe(EXPECTED_CHECKOUT_TEXT);
});

Then("the program name should be displayed 'Test Automation with Selenium'", async function () {
    const ACTUAL_PROGRAM_NAME_FROM_LEFT_SIDE = await leftMainPage.programName.innerText();
    const EXPECTED_PROGRAM_NAME = "Test Automation with Selenium";
    expect(ACTUAL_PROGRAM_NAME_FROM_LEFT_SIDE).toBe(EXPECTED_PROGRAM_NAME);
});

Then("the footer should display logo", async function () {
    await expect(leftMainPage.cydeoImageAtLeftWindow).toBeVisible();
});

Then("the footer should display Terms and Conditions", async function () {
    await expect(leftMainPage.termsAndConditions).toBeVisible();
    await expect (leftMainPage.termsAndConditions).toHaveText("Terms and conditions");
    await expect(leftMainPage.termsAndConditions).toHaveAttribute("href", "https://cydeo.com/terms-conditions/");
});

Then("the footer should display Privacy Policy", async function () {
    await expect(leftMainPage.privacyPolicy).toBeVisible();
    await expect(leftMainPage.privacyPolicy).toHaveText("Privacy Policy");
    await expect(leftMainPage.privacyPolicy).toHaveAttribute("href", "https://cydeo.com/privacy-policy/");
});

Then("the footer should display Disclaimer", async function () {
    await expect(leftMainPage.disclaimer).toBeVisible();
    await expect(leftMainPage.disclaimer).toHaveText("Disclaimer");
    await expect(leftMainPage.disclaimer).toHaveAttribute("href", "https://cydeo.com/disclaimer/");
});

Then("the footer should display Cookie Policy", async function () {
    await expect(leftMainPage.cookiePolicy).toBeVisible();
    await expect(leftMainPage.cookiePolicy).toHaveText("Cookie Policy");
    await expect(leftMainPage.cookiePolicy).toHaveAttribute("href", "https://cydeo.com/cookie-policy/");
});

Then("the footer should display Need help?", async function () {
    const ACTUAL_NEED_HELP_TEXT = await startApplicationPage.footer.innerText();
    const EXPECTED_NEED_HELP_TEXT = "Need help? Contact us at enrollment@cydeo.com";
    expect(ACTUAL_NEED_HELP_TEXT).toBe(EXPECTED_NEED_HELP_TEXT);
});


