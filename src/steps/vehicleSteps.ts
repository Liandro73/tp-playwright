import { expect, Page } from "@playwright/test";
import { vehiclePageComponent } from "../pages/vehiclePageComponent";
import { getRandomInt, getRandomIntMin } from "../utils/utils";
import { LETTERS_PLATES_OTHER } from "../constants/vehicleData";

export class VehicleSteps {
  private vehiclePage: vehiclePageComponent;
  private plateId: string;
  public page: Page;

  constructor(page: Page) {
    ((this.vehiclePage = new vehiclePageComponent(page)), (this.page = page));

    const numberPlateOne = getRandomIntMin(10, 100);
    const numberPlateTwo = getRandomIntMin(0, 10);

    const indexOne = getRandomInt(26);
    const indexTwo = getRandomInt(26);
    const indexThree = getRandomInt(26);

    const letterOnePlate = `${LETTERS_PLATES_OTHER[indexOne]}`;
    const letterTwoPlate = `${LETTERS_PLATES_OTHER[indexTwo]}`;
    const letterThreePlate = `${LETTERS_PLATES_OTHER[indexThree]}`;

    this.plateId = `${letterOnePlate}${letterTwoPlate}${numberPlateOne}${letterThreePlate}${numberPlateTwo}`;
  }

  async clickOnAddNewVehicleButton(): Promise<void> {
    await this.vehiclePage.buttonAddNewVehicle.click();
  }

  async fillAddVehicleFormOut(
    vehicleName: string,
    country: string,
  ): Promise<void> {
    await expect(this.vehiclePage.inputVehicleName).toBeVisible();
    await this.vehiclePage.inputVehicleName.fill(vehicleName);
    await this.vehiclePage.inputVehicleRegistration.fill(this.plateId);
    await this.vehiclePage.selectVehicleCountry.selectOption(country);

    await this.vehiclePage.buttonNewVehicleSave.click();

    await expect(this.page.getByText(this.plateId)).toBeVisible();
  }

  async clickOnVehicleEditButton(): Promise<void> {
    await this.page
      .locator(`//span[text()="${this.plateId}"]/following::a[1]`)
      .click();
  }

  async clickOnVehicleRemoveButton(): Promise<void> {
    await expect(
      this.page.locator(`//input[@value="${this.plateId}"]`),
    ).toBeVisible();
    await this.vehiclePage.buttonRemoveVehicle.click();
  }

  async clickOnVehicleConfirmDeletionButton(): Promise<void> {
    await this.vehiclePage.buttonRemoveVehicleConfirm.click();
  }
}
