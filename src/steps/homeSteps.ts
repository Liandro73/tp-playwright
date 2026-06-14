import { expect, Page } from "@playwright/test";
import { homePageComponent } from "../pages/homePageComponent";

export class HomeSteps {
  public page: Page;
  private homePage: homePageComponent;

  constructor(page: Page) {
    ((this.homePage = new homePageComponent(page)), (this.page = page));
  }

  async validateLoginSucessfully(): Promise<void> {
    await expect(this.homePage.logoTelpark).toBeVisible();
  }

  async clickOnVehicleMenuButton(): Promise<void> {
    await this.homePage.vehiclesMenuButton.click();
  }
}
