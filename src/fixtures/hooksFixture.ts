import { test as hooksFixture } from "@playwright/test";

export const test = hooksFixture.extend<{}>({
  page: async ({ page }, use) => {
    test.info().annotations.push({
      type: "Start",
      description: new Date().toISOString().split(".")[0],
    });

    await use(page);

    test.info().annotations.push({
      type: "End",
      description: new Date().toISOString().split(".")[0],
    });
  },
});
