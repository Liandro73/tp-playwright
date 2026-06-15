import { test as setup } from "../fixtures/merge";
import { cookieAccept } from "../utils/cookieAccept";

setup("vehicles clean up", async ({ page, homeSteps, vehicleSteps }) => {
  await page.goto("/");
  await cookieAccept(page);

  await homeSteps.clickOnVehicleMenuButton();
  await vehicleSteps.removingOldAutomatedTestingData();
});
