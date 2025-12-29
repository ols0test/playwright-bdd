import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('the program start date is displayed', async function () {
    expect(await startApplicationPage.programStartDate.isVisible());
});

Then('the program refund date is displayed', async function () {
    expect(await startApplicationPage.programRefundDate.isVisible());
});

Then('the displayed start date for program is correct', async function () {
    const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
    const EXPECTED_START_DATE = productInfo.startDate;
    expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);
});

Then('the displayed refund date for program is correct', async function () {
    const ACTUAL_REFUND_DATE = await startApplicationPage.programRefundDate.innerText();
    const EXPECTED_REFUND_DATE = productInfo.refundDate;    
    expect(ACTUAL_REFUND_DATE).toBe(EXPECTED_REFUND_DATE);
});