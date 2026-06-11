import { test } from "../../../fixtures/merge";
import { cookieAccept } from "../../../utils/cookieAccept";
import { languageChange } from "../../../utils/languageHandler";

test.describe("Login Feature", () => {
  test("The login was successful", async ({ page, homeSteps }) => {
    await page.goto("/");

    await test.step("Validate that it is the Home Page", async () => {
      await homeSteps.validateLoginSucessfully();
    });
  });
});

test.describe("Login Feature", () => {
  test.use({ storageState: "" });
  test("The login was not successful (intentional)", async ({
    page,
    loginSteps,
  }) => {
    await test.step("Fill login form out", async () => {
      await page.goto("/");
      await languageChange(page);
      await loginSteps.fillLoginFormOut(
        "test@error.com",
        "testerrorvalidation$@!",
      );
    });

    await test.step("Accept cookies", async () => {
      await cookieAccept(page);
    });

    await test.step("Validate that it is the Home Page", async () => {
      await loginSteps.errorMessageValidation_EmailOrPassInvalid();
    });
  });
});
