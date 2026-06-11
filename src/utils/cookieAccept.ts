import { Page } from "@playwright/test";

export async function cookieAccept(page: Page): Promise<void> {
  const acceptButton = page.locator("#onetrust-accept-btn-handler");

  const isVisible = await acceptButton
    .waitFor({ state: "visible", timeout: 3000 })
    .then(() => true)
    .catch(() => false);

  if (isVisible) {
    await acceptButton.click();
  }
}

export async function cookieReject(page: Page): Promise<void> {
  const rejectButton = page.locator("#onetrust-reject-all-handler");

  const isVisible = await rejectButton
    .waitFor({ state: "visible", timeout: 3000 })
    .then(() => true)
    .catch(() => false);

  if (isVisible) {
    await rejectButton.click();
  }
}
