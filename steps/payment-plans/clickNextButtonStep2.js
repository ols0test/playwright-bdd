import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, paymentPlanPage, page, reviewPaymentPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When('user selects a payment plan', async function () {
    const paymentPlans = ['upfront', 'installments'];
    const randomPlan = paymentPlans[Math.floor(Math.random() * paymentPlans.length)];
    await paymentPlanPage.selectPaymentPlan(randomPlan);
});

When('user selects an Upfront payment plan', async function () {
    await paymentPlanPage.selectPaymentPlan('upfront');
});

When('user selects a 5 Installments payment plan', async function () {
    await paymentPlanPage.selectPaymentPlan('5 installments');
});

Then('the next button should be enabled', async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
    await expect(paymentPlanPage.inactiveNextButton).toBeHidden()
});

When('user clicks the next button on Payment Plan page', async function () {
    await paymentPlanPage.clickNextButton();
});

Then('the Review page should be displayed', async function () {
    await expect(reviewPaymentPage.paymentForm).toBeVisible();
});

Then('the payment plan stepper circle color should be green', async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color", "rgb(172, 245, 138)");
});

Then('the review stepper circle color should be blue', async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then('the Upfront payment component should be displayed on Review page', async function () {
    await expect(reviewPaymentPage.productPriceText).toBeVisible();
    await expect(reviewPaymentPage.productPriceAmount).toHaveText("$500");
    await expect(reviewPaymentPage.totalAmount).toHaveText("$412");
});

Then('the 5 Installments payment component should be displayed on Review page', async function () {
    await expect(reviewPaymentPage.installmentPriceText).toBeVisible();
    await expect(reviewPaymentPage.installmentPriceAmount).toHaveText("$100");
    await expect(reviewPaymentPage.subtotalText).toBeVisible();
    await expect(reviewPaymentPage.subtotalAmount).toHaveText("$100");
    await expect(reviewPaymentPage.totalAmount).toHaveText("$103");
});

Then('the back button should be displayed', async function () {
    await expect(paymentPlanPage.backButton).toBeVisible();
});