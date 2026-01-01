import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the text for upfront payment should be Upfront for the first line", async function () {
    const ACTUAL_UPFRONT_TEXT_1_ROW = await paymentPlanPage.upfrontPaymentOption.innerText();
    const EXPECTED_UPFRONT_TEXT_1_ROW = " Upfront ";
    expect(ACTUAL_UPFRONT_TEXT_1_ROW).toBe(EXPECTED_UPFRONT_TEXT_1_ROW);
});

Then("the text for upfront payment should be 400 pay once for the second row", async function () {
    const ACTUAL_TEXT_2_ROW = await paymentPlanPage.upfrontPaymentAmount.innerText();
    const EXPECTED_TEXT_2_ROW = "$400  pay once";
    
    expect(ACTUAL_TEXT_2_ROW).toBe(EXPECTED_TEXT_2_ROW);
    
});

Then("the text for upfront payment should be 5 Installments for the first row", async function () {
    const ACTUAL_TEXT_1_ROW = await paymentPlanPage.installmentsPaymentOption.innerText();
    const EXPECTED_TEXT_1_ROW = " 5 Installments";
    expect(ACTUAL_TEXT_1_ROW).toBe(EXPECTED_TEXT_1_ROW);
});

Then("the text for upfront payment should be 100 per month for the second row", async function () {
    const ACTUAL_TEXT_2_ROW = await paymentPlanPage.installmentsPaymentAmount.innerText();
    const EXPECTED_TEXT_2_ROW = " $100 per month";
    expect(ACTUAL_TEXT_2_ROW).toBe(EXPECTED_TEXT_2_ROW);
});

Then("there should be only two payment plans displayed", async function () {
    const PAYMENT_PLANS_COUNT = await paymentPlanPage.paymentPlanButtons.all()
    expect(PAYMENT_PLANS_COUNT.length).toBe(2);
});