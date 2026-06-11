import { expect, Page } from "@playwright/test";

export async function languageChange(page: Page): Promise<void> {
  const languageButton = page.getByRole("link", { name: "English▾" });
  const currentLanguageLabel = page.locator("#kc-current-locale-tag");
  const languagePTButton = page.getByRole("link", { name: "Português" });

  const isPortuguese = await expect(currentLanguageLabel)
    .toContainText("pt")
    .then(() => false)
    .catch(() => true);

  if (isPortuguese) {
    await languageButton.click();
    await languagePTButton.click();
  }
}
