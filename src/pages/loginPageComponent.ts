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

    this.inputEmail = this.page.getByRole("textbox", {
      name: "E-mail",
    });
    this.inputPassword = this.page.getByRole("textbox", {
      name: "Palavra-passe",
    });
    this.buttonLogin = this.page.getByRole("button", {
      name: "Entrar",
    });
    this.errorMessageLabel = this.page.locator(".kc-feedback-text");
  }
}
