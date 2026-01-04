import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import {faker} from "@faker-js/faker";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});


Given("user is on payment plan page", async function () {
  await startApplicationPage.login();
  await startApplicationPage.enterFirstName(faker.person.firstName());
  await startApplicationPage.enterLastName(faker.person.lastName());
  await startApplicationPage.enterEmail(faker.internet.email());
  await startApplicationPage.enterPhoneNumber(faker.phone.number(10));
  await startApplicationPage.selectHowDidYouHearAboutUs("email");
  await startApplicationPage.clickNextButton();
})
