import { mergeTests } from "@playwright/test";
import { test as stepsInitFixture } from "./stepsInitFixture";
import { test as hooksFixture } from "./hooksFixture";

export const test = mergeTests(hooksFixture, stepsInitFixture);
