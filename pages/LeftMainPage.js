import { BasePage } from "./BasePage.js";

export class LeftMainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.cydeoImageAtLeftWindow = page.locator(
      "//a[@href='https://cydeo.com']/img[@src='assets/images/logo.svg']"
    );

    this.secureCheckout = page.locator("//p[@class='checkout-title']");

    this.footerElements = page.locator(
      "//a[contains(@href, 'https://cydeo.com/')]"
    );

    this.termsAndConditions = page.getByRole('link', { name: 'Terms and conditions' })

    this.privacyPolicy = page.getByRole('link', { name: 'Privacy policy' })

    this.disclaimer = page.getByRole('link', { name: 'Disclaimer' })

    this.cookiePolicy = page.getByRole('link', { name: 'Cookie policy' })

    this.programName = page.locator("//p[@class='course-name']/a");
    
  }

  
}
