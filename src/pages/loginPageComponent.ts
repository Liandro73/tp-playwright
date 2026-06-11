import { Locator, Page } from "@playwright/test";

export class loginPageComponent {
  public page: Page;

  public inputEmail: Locator;
  public inputPassword: Locator;
  public buttonLogin: Locator;

  //Error handling
  public errorMessageLabel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inputEmail = this.page.locator("#username");
    this.inputPassword = this.page.locator("#password");
    this.buttonLogin = this.page.locator("#kc-login");
    this.errorMessageLabel = this.page.locator(".kc-feedback-text");
  }
}
