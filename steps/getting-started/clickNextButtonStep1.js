import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { paymentPlanPage} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import {faker} from "@faker-js/faker";

When('user enters the first name', async function () {
    await startApplicationPage.enterFirstName(faker.person.firstName());
});

When('user enters lastname', async function () {
    await startApplicationPage.enterLastName(faker.person.lastName());
});

When('user enters email address', async function () {
    await startApplicationPage.enterEmail(faker.internet.email());
});

When('user enters phone number', async function () {
    await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
});

When('user selects from How did you hear about us?', async function () {
    await startApplicationPage.selectHowDidYouHearAboutUs("Google");
});

When('user clicks the next button on Start Application Step', async function () {
    await startApplicationPage.clickNextButton();
});

Then('user will land on the Payment plan step', async function () {
    const ACTUAL_CHOOSE_PAYMENT_TEXT = await paymentPlanPage.chooseAPaymentPlanText.innerText();
    const EXPECTED_CHOOSE_PAYMENT_TEXT = "Choose a payment plan";
    expect(ACTUAL_CHOOSE_PAYMENT_TEXT).toBe(EXPECTED_CHOOSE_PAYMENT_TEXT);
});

Then('the start application stepper circle color should be green', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
});

Then('the payment plan stepper circle color should be blue', async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});
