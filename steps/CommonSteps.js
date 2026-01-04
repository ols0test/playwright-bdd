import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";
import {faker} from "@faker-js/faker";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});


Given("user is on payment plan page", async function () {
  await startApplicationPage.login();
  await startApplicationPage.enterFirstName(faker.person.firstName());
  await startApplicationPage.enterLastName(faker.person.lastName());
  await startApplicationPage.enterEmail(faker.internet.email());
  await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
  await startApplicationPage.selectHowDidYouHearAboutUs("email");
  await startApplicationPage.clickNextButton();
});


Given("user already completed the payment plan page", async function () {
    const paymentPlans = ['upfront', 'installments'];
    const randomPlan = paymentPlans[Math.floor(Math.random() * paymentPlans.length)];
    await paymentPlanPage.selectPaymentPlan(randomPlan);
    await paymentPlanPage.clickNextButton();
});
