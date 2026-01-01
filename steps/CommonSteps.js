import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";


Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});


Given("user is on payment plan page", async function () {
  await startApplicationPage.login();
  await startApplicationPage.enterFirstName("John");
  await startApplicationPage.enterLastName("Doe");
  await startApplicationPage.enterEmail("johndoe@example.com");
  await startApplicationPage.enterPhoneNumber("1234567890");
  await startApplicationPage.selectHowDidYouHearAboutUs("Social media");
  await startApplicationPage.clickNextButton();
})
