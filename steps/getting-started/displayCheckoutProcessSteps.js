import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the stepper should display 'Start Application'", async function () {
    const ACTUAL_STEPPER_1_TEXT = await startApplicationPage.startApplicationText.innerText();
    const EXPECTED_STEPPER_1_TEXT = "Start Application";
    expect(ACTUAL_STEPPER_1_TEXT).toBe(EXPECTED_STEPPER_1_TEXT);
});

Then("the stepper should display 'Payment Plan'", async function () {
    const ACTUAL_STEPPER_2_TEXT = await startApplicationPage.paymentPlanText.innerText();
    const EXPECTED_STEPPER_2_TEXT = "Payment plan";
    expect(ACTUAL_STEPPER_2_TEXT).toBe(EXPECTED_STEPPER_2_TEXT);
});

Then("the stepper should display 'Review'", async function () {
    const ACTUAL_STEPPER_3_TEXT = await startApplicationPage.reviewText.innerText();
    const EXPECTED_STEPPER_3_TEXT = "Review";
    expect(ACTUAL_STEPPER_3_TEXT).toBe(EXPECTED_STEPPER_3_TEXT);
});

Then("the payment plan stepper circle color should be transparent", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
});

Then("the review stepper circle color should be transparent", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
});

