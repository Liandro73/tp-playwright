import { test } from "../../../fixtures/merge";

test.describe("Vehicle Feature", () => {
  test.beforeEach('Common vehicles steps', async ({
    page,
    homeSteps,
    vehicleSteps,
  }) => {
    await test.step("Go to vehicle page", async () => {
      await page.goto("/");
      await homeSteps.clickOnVehicleMenuButton();
    });

    await test.step("Click on add new vehicle", async () => {
      await vehicleSteps.clickOnAddNewVehicleButton();
    });

    await test.step("Fill new vehicle form out and save", async () => {
      await vehicleSteps.fillAddVehicleFormOut("BMW X1", "Other");
    });
  });

  test("The user can add a vehicle with success for the country “Other”", async ({
    vehicleSteps,
  }) => {
    await test.step("Validate that the vehicle has been added successful", async () => {
      await vehicleSteps.validateThatVehicleHasBeenAdded();
    });
  });

  test("The user can remove a vehicle with success", async ({
    vehicleSteps,
  }) => {
    await test.step("Validate that the vehicle has been added successful", async () => {
      await vehicleSteps.validateThatVehicleHasBeenAdded();
    });

    await test.step("Click on edit vehicle", async () => {
      await vehicleSteps.clickOnVehicleEditButton();
    });

    await test.step("Click on remove vehicle", async () => {
      await vehicleSteps.clickOnVehicleRemoveButton();
    });

    await test.step("Click on confirm deletion vehicle", async () => {
      await vehicleSteps.clickOnVehicleConfirmDeletionButton();
    });

    await test.step("Validate that the vehicle has been removed successful", async () => {
      await vehicleSteps.validateThatVehicleHasBeenRemoved();
    });
  });
});
