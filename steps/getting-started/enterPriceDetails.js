import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the first name field should have default value as First Name", async function () {
    const EXPECTED_FIRST_NAME = "First Name";
    const ACTUAL_FIRST_NAME = await startApplicationPage.firstNamedefaultValue.innerText()
    expect(ACTUAL_FIRST_NAME).toBe(EXPECTED_FIRST_NAME);
});

Then("the last name field should have default value as Last Name", async function () {
    const EXPECTED_LAST_NAME = "Last Name";
    const ACTUAL_LAST_NAME = await startApplicationPage.lastNamedefaultValue.innerText();
    expect(ACTUAL_LAST_NAME).toBe(EXPECTED_LAST_NAME);
});

When("user enters invalid email address", async function () {
   await startApplicationPage.enterEmail("invalid_email@example.com"); 
})

Then("user stays on the Start Application step", async function () {
    const ACTUAL_STEP_TITLE = await startApplicationPage.programNameOnInfoCard.innerText();
    const EXPECTED_STEP_TITLE = "Test Automation with Selenium";
    expect(ACTUAL_STEP_TITLE).toBe(EXPECTED_STEP_TITLE);
});

Then("the start application stepper circle color should be blue", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
})

When("user invalid data in the phone field", async function () {
    await startApplicationPage.enterPhoneNumber("abcer");
});  
