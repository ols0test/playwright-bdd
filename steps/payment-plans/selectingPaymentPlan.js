import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then('the next button should be disabled', async function () {
    await expect(paymentPlanPage.activeNextButton).toBeHidden();
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
    await expect(paymentPlanPage.inactiveNextButton).toBeVisible();
});

Then('the Upfront payment plan should be highlighted', async function () {
    await expect(paymentPlanPage.upfrontPaymentFrame).toHaveCSS("border", "2px solid rgb(40, 201, 251)")
    await expect(paymentPlanPage.installmentsPaymentFrame).toHaveCSS("border", "0px none rgba(0, 0, 0, 0.87)")
});

Then('the 5 Installments payment plan should be highlighted', async function () {
    await expect(paymentPlanPage.installmentsPaymentFrame).toHaveCSS("border", "2px solid rgb(40, 201, 251)")
    await expect(paymentPlanPage.upfrontPaymentFrame).toHaveCSS("border", "0px none rgba(0, 0, 0, 0.87)")
});

