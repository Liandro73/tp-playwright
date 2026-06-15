import { expect, Page } from "@playwright/test";
import { vehiclePageComponent } from "../pages/vehiclePageComponent";
import { getRandomInt, getRandomIntMin } from "../utils/utils";
import { LETTERS_PLATES_OTHER } from "../constants/vehicleData";

export class VehicleSteps {
  public page: Page;
  private vehiclePage: vehiclePageComponent;
  private plateId: string;
  private registeredVehicles: number;

  private intervals: number[] = [200, 500, 1_000];
  private timeout: number = 10_000;

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
    this.registeredVehicles = 0;
  }

  async clickOnAddNewVehicleButton(): Promise<void> {
    await this.vehiclePage.buttonAddNewVehicle.click();
  }

  async fillAddVehicleFormOut(
    vehicleName: string,
    country: string,
  ): Promise<void> {
    await expect(async () => {
      await this.clickOnAddNewVehicleButton();
      await expect(this.vehiclePage.inputVehicleName).toBeVisible();
    }).toPass({
      intervals: this.intervals,
      timeout: this.timeout,
    });
    await this.vehiclePage.inputVehicleName.fill(vehicleName);
    await this.vehiclePage.inputVehicleRegistration.fill(this.plateId);
    await this.vehiclePage.selectVehicleCountry.selectOption(country);
    await this.vehiclePage.buttonNewVehicleSave.click();
    await expect(this.page.getByText(this.plateId)).toBeVisible();
  }

  async validateThatVehicleHasBeenAdded(): Promise<void> {
    await expect(async () => {
      await expect(
        this.page.locator(`//span[text()="${this.plateId}"]`),
      ).toBeVisible();
    }).toPass({
      intervals: this.intervals,
      timeout: this.timeout,
    });
  }

  async clickOnVehicleEditButton(): Promise<void> {
    await this.page
      .locator(`//span[text()="${this.plateId}"]/following::a[1]`)
      .click();
  }

  async clickOnVehicleRemoveButton(): Promise<void> {
    await expect(async () => {
      await this.clickOnVehicleEditButton();
      await expect(
        this.page.locator(`//input[@value="${this.plateId}"]`),
      ).toBeVisible();
    }).toPass({
      intervals: this.intervals,
      timeout: this.timeout,
    });
    await this.vehiclePage.buttonRemoveVehicle.click();
  }

  async clickOnVehicleConfirmDeletionButton(): Promise<void> {
    await this.vehiclePage.buttonRemoveVehicleConfirm.click();
  }

  async validateThatVehicleHasBeenRemoved(): Promise<void> {
    await expect(async () => {
      await expect(
        this.page.locator(`//span[text()="${this.plateId}"]`),
      ).toHaveCount(0);
    }).toPass({
      intervals: this.intervals,
      timeout: this.timeout,
    });
  }

  async removingOldAutomatedTestingData(): Promise<void> {
    await expect(this.vehiclePage.buttonAddNewVehicle).toBeVisible();
    const count = await this.vehiclePage.labelRegisteredVehicle.count();
    this.registeredVehicles = count;

    if (this.registeredVehicles > 0) {

      while (this.registeredVehicles > 0) {
        this.registeredVehicles = this.registeredVehicles - 1;
        await expect(async () => {
          await this.vehiclePage.buttonEditVehicle.click();
          await this.vehiclePage.buttonRemoveVehicle.click();
          await this.vehiclePage.buttonRemoveVehicleConfirm.click();
        }).toPass({
          intervals: this.intervals,
          timeout: 30_000,
        });
      }

    }
    await expect(this.vehiclePage.labelRegisteredVehicle).toHaveCount(0);
  }
}
