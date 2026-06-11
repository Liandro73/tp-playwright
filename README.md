# Playwright End to End suite template

End to End testing suite template using:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/
- Dotenv https://www.dotenv.org

## Getting Started

1. Install the dependencies using:

```bash
npm install
```

2. Install playwright into the project using:

```bash
npx playwright install
```

3. Create a .env file inside the path:

```
playwright/.auth/
```

4. add the following environment variables into the .env file:

```
PW_USER=user_email

PW_PASSWORD=user_password
```

### 📁 Structure

```sh
 |- constants # Project variables
 |- fixtures # Predefined fixture sets inportant configurations, such as singleton page instantiation
 |- pages # Sets of pages for our application
 |- steps # Here are the validations and steps
 |- tests # Here are the tests
 |- utils # Utils methods that could be used in the entire project
```

## Run tests

### Run all tests

1. Check out the test by running the command:

```bash
npx playwright test
```

### Run in Debug mode

```bash
npx playwright test --debug
```

### Run with custom number of workers

```bash
npx playwright test --workers=4
```

### Run specific test file

```bash
npx playwright test login.spec.tsx
```

### Run in specific browsers

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run in headed mode (headless off)

```bash
npx playwright test --headed
```

### Run in UI mode (Playwright UI)

```bash
npx playwright test --ui
```

## Code formatting

This project uses [Prettier](https://prettier.io/) to format the code.

### Format the code

```bash
npx prettier . --write
```

### Check the code formatting

```bash
npx prettier . --check
```
