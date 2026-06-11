import { Locator, Page } from "@playwright/test";

export class vehiclePageComponent {
  public page: Page;

  public buttonAddNewVehicle: Locator;
  public inputVehicleName: Locator;
  public inputVehicleRegistration: Locator;
  public selectVehicleCountry: Locator;
  public buttonNewVehicleSave: Locator;

  public buttonEditVehicle: Locator;
  public buttonRemoveVehicle: Locator;
  public buttonRemoveVehicleConfirm: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAddNewVehicle = this.page.getByRole("link", {
      name: "Novo Veículo",
    });
    this.inputVehicleName = this.page.getByRole("textbox", {
      name: "Nome (ex: VW Azul)",
    });
    this.inputVehicleRegistration = this.page.getByPlaceholder("Matrícula");
    this.selectVehicleCountry = this.page.getByRole("combobox");
    this.buttonNewVehicleSave = this.page.getByRole("link", {
      name: "Guardar",
    });

    this.buttonEditVehicle = this.page
      .locator('//div[@class="span2 bg vehicles"]/a')
      .first();
    this.buttonRemoveVehicle = this.page.locator('//a[@class="close"]');
    this.buttonRemoveVehicleConfirm = this.page.getByText("Remover", {
      exact: true,
    });
  }
}
