import { test as setup } from "../fixtures/merge";
import { languageChange } from "../utils/languageHandler";
import { cookieAccept } from "../../src/utils/cookieAccept";

setup("authenticate", async ({ page, loginSteps }) => {
  const email = process.env.PW_USER as string;
  const pass = process.env.PW_PASSWORD as string;

  await page.goto("/");
  await languageChange(page);
  await loginSteps.fillLoginFormOut(email, pass);
  await cookieAccept(page);

  await page.context().storageState({ path: "playwright/.auth/auth.json" });
});
