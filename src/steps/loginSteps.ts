import { expect, Page } from "@playwright/test";
import { loginPageComponent } from "../pages/loginPageComponent";
import { ERROR_MESSAGES } from "../constants/errorHandlingMessages";

export class LoginSteps {
  public page: Page;
  private loginPage: loginPageComponent;

  constructor(page: Page) {
    ((this.loginPage = new loginPageComponent(page)), (this.page = page));
  }

  async fillLoginFormOut(userEmail: string, password: string): Promise<void> {
    await this.loginPage.inputEmail.fill(userEmail);
    await this.loginPage.inputPassword.fill(password);
    await this.loginPage.buttonLogin.click();
  }

  async errorMessageValidation_EmailOrPassInvalid(): Promise<void> {
    await expect(this.loginPage.errorMessageLabel).toContainText(
      ERROR_MESSAGES[0],
    );
  }
}
