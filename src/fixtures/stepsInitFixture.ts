import { test as stepsInitFixture } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import { HomeSteps } from "../steps/homeSteps";
import { VehicleSteps } from "../steps/vehicleSteps";

export type StepsFixtures = {
  loginSteps: LoginSteps;
  homeSteps: HomeSteps;
  vehicleSteps: VehicleSteps;
};

export const test = stepsInitFixture.extend<StepsFixtures>({
  loginSteps: async ({ page }, use) => {
    await use(new LoginSteps(page));
  },
  homeSteps: async ({ page }, use) => {
    await use(new HomeSteps(page));
  },
  vehicleSteps: async ({ page }, use) => {
    await use(new VehicleSteps(page));
  },
});
