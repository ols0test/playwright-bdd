import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the product name should be displayed on the information card", async function () {
    const ACTUAL_PROGRAM_NAME_ON_INFO_CARD = await startApplicationPage.programNameOnInfoCard.innerText();
    const EXPECTED_PROGRAM_NAME_ON_INFO_CARD = "Test Automation with Selenium";
    expect(ACTUAL_PROGRAM_NAME_ON_INFO_CARD).toBe(EXPECTED_PROGRAM_NAME_ON_INFO_CARD);
});

Then("the price of the product should be displayed", async function () {
    await expect(startApplicationPage.programBasePrice).toHaveText("$500");
    await expect(startApplicationPage.discountedPrice).toHaveText("$400");
});

Then("the text indicating a flexible payment plan should be displayed", async function () {
    const ACTUAL_TEXT_ABOUT_FLEXIBLE_PLAN = await startApplicationPage.flexiblePaymentsPlanAvailableText.innerText();
    const EXPECTED_TEXT_ABOUT_FLEXIBLE_PLAN = "Flexible payments plan available";
    expect(ACTUAL_TEXT_ABOUT_FLEXIBLE_PLAN).toBe(EXPECTED_TEXT_ABOUT_FLEXIBLE_PLAN);
    expect(await startApplicationPage.flexiblePaymentsPlanAvailableText.isVisible()).toBe(true);
});

Then("the return policy should be displayed", async function () {
    const ACTUAL_RETURN_POLICY_TEXT = await startApplicationPage.refundPolicytext.innerText();
    const EXPECTED_RETURN_POLICY_TEXT = "100% refund policy until\nMay 10, 2025";
    expect(ACTUAL_RETURN_POLICY_TEXT).toBe(EXPECTED_RETURN_POLICY_TEXT);
    expect(await startApplicationPage.refundPolicytext.isVisible()).toBe(true);
});