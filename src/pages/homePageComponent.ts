import { Locator, Page } from "@playwright/test";

export class homePageComponent {
  public page: Page;

  public logoTelpark: Locator;
  public vehiclesMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logoTelpark = this.page.locator(".brand");
    this.vehiclesMenuButton = this.page.getByRole("link", { name: "Veículos" });
  }
}
