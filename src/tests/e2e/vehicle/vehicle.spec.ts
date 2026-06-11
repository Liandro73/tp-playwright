import { test } from "../../../fixtures/merge";

test.describe("Vehicle Feature", () => {
  test("The user can add a vehicle with success for the country “Other”", async ({
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

  test("The user can remove a vehicle with success", async ({
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

    await test.step("Click on edit vehicle", async () => {
      await vehicleSteps.clickOnVehicleEditButton();
    });

    await test.step("Click on remove vehicle", async () => {
      await vehicleSteps.clickOnVehicleRemoveButton();
    });

    await test.step("Click on confirm deletion vehicle", async () => {
      await vehicleSteps.clickOnVehicleConfirmDeletionButton();
    });
  });
});
