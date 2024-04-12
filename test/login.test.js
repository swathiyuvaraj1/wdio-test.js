/***
 * Add tests under suite - TDD type (Test Driven Development)
 * only/skip can be used with below test methods
 * Sample test file
 * ***/

const Utils = require("../Utilities/Utils.js");
const Constants = require("../configurations/config.js");
const LandingPage = require("../pages/landing.page");
const LoginPage = require("../pages/login.page");

suite("Login test validations", () => {
  test("Access_Site_ViewLoginPage", async () => {
    await Utils.testDetailsForReport(
      "Positive",
      "Verify whether user is able to view Login page with " +
        "Forgot password link text by selecting Login button " +
        "from landing page",
      "Verify Landing Page Title:"
    );
    await expect(browser).toHaveTitle(Constants.LANDING_PAGE_TITLE);
    await Utils.testStepForReport("View Landing Page options:");
    await expect(LandingPage.signUpBtn).toBeDisplayed();
    await expect(LandingPage.loginBtn).toBeDisplayed();
    await Utils.click(LandingPage.loginBtn);
    await Utils.testStepForReport("Set Env Details:");
    await Utils.testEnvironmentDetails();
    await Utils.testStepForReport("View Login Page:");
    await Utils.waitForExist(LoginPage.forgotPwdLinkTxt, Constants.LONG_WAIT);
    await expect(LoginPage.forgotPwdLinkTxt).toBeDisplayed();
  });
});
