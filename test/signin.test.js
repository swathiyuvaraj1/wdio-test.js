const Utils = require("../Utilities/Utils.js");
const Constants = require("../configurations/constants.js");
const LandingPage = require("../pages/landing.page");
const SigninPage = require("../pages/signin.page.js");
const Config = require("../configurations/config.js")

suite("Login page validations",()=>{
    test("AccessSite_ViewLoginPage", async () => {
        await Utils.testDetailsForReport(
            "Positive",
            "Verify whether user is able to view Login page with " +
              "by selecting Login button" +
              "from landing page",
            "Click Login button"
        );
        await expect(browser).toHaveTitle(Constants.LANDING_PAGE_TITLE);
        await Utils.testStepForReport("Set Landing page Env Details:");
        await Utils.testEnvironmentDetails();
        await Utils.testStepForReport("View Landing Page options:");
        await expect(LandingPage.loginBtn).toBeDisplayed();
        await expect(LandingPage.signUpBtn).toBeDisplayed();
        await Utils.click(LandingPage.loginBtn);
        await Utils.testStepForReport("Set Login page Env Details:");
        await Utils.testEnvironmentDetails();
        await Utils.testStepForReport("View Login Page:");
        await expect(SigninPage.logoImg).toBeDisplayed();
        await expect(SigninPage.email).toBeDisplayed();
        await expect(SigninPage.password).toBeDisplayed();
        await expect(SigninPage.loginBtn).toBeDisplayed();
    });
    test("LoginPage_LoginWithBlankdetails_ViewEnterValidDetailErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is able to view error message while " +
              "trying to login with blank details" +
              "from login page",
            "Click Login button"
        );
        Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Error message:");
        await expect(SigninPage.enterValidMsgTxt).toBeDisplayed();
    });
    test("LoginPage_EnterTheEmail_NotShowingEnterValidDetailErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Positive",
            "Verify whether user is not able to view error message while " +
              "entering the email" +
              "in Email input on login page",
            "Enter email"
        );
        Utils.setValue(SigninPage.email , Config.loginEmailId);
        Utils.testDataForReport(SigninPage.email,Config.loginEmailId)
        await Utils.testStepForReport("Not showing Error message:");
        await expect(SigninPage.enterValidMsgTxt).not.toBeDisplayed();
    });
    test("LoginPage_LoginWithOnlyEmail_ViewEnterValidDetailErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is able to view error message while " +
              "trying to login with only email" +
              "in login page",
            "Click login button"
        );
        Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Error message:");
        await expect(SigninPage.enterValidMsgTxt).toBeDisplayed();
    });
    test("LoginPage_ClearingTheEmail_NotShowingEnterValidDetailErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Positive",
            "Verify whether user is not able to view error message while " +
              "clearing the email" +
              "in Email input on login page",
            "Clear email"
        );
        Utils.clearCellContents(SigninPage.email);
        await Utils.testStepForReport("Not showing Error message:");
        await expect(SigninPage.enterValidMsgTxt).not.toBeDisplayed();
    });
    test("LoginPage_LoginWithOnlyPassword_ViewEnterValidDetailErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is able to view error message while " +
              "trying to login with only password" +
              "in login page",
            "Click login button"
        );
        Utils.setValue(SigninPage.password,"1234567");
        Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Error message:");
        await expect(SigninPage.enterValidMsgTxt).toBeDisplayed();
    });
    test("LoginPage_LoginWithInvalidDetails_ViewInvalidCrediantialsErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is able to view error message while " +
              "trying to login with invalid details" +
              "in login page",
            "Click login button"
        );
        await Utils.setValue(SigninPage.email , "sampletes@test.com");
        await Utils.setValue(SigninPage.password,"1234567");
        await Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Error message:");
        await expect(SigninPage.invalidCrediantialsMsgTxt).toBeDisplayed();
    });
    test("LoginPage_LoginWithInvalidPassword_ViewInvalidCrediantialsErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is able to view error message while " +
              "trying to login with invalid password" +
              "in login page",
            "Click login button"
        );
        await Utils.clearAndSetValue(SigninPage.email , "sampletest@test.com");
        await Utils.clearAndSetValue(SigninPage.password,"1234567");
        await Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Error message:");
        await expect(SigninPage.invalidCrediantialsMsgTxt).toBeDisplayed();
    });
    test("LoginPage_LoginWithinvalidEmail_ViewInvalidCrediantialsErrMsg",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is able to view error message while " +
              "trying to login with invalid email" +
              "in login page",
            "Click login button"
        );
        await Utils.clearAndSetValue(SigninPage.email , "sampletes@test.com");
        await Utils.clearAndSetValue(SigninPage.password,"12345678");
        await Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Error message:");
        await expect(SigninPage.invalidCrediantialsMsgTxt).toBeDisplayed();
    });
    test("LoginPage_LoginWithValidDetails_ViewHomePage",async()=>{
        await Utils.testDetailsForReport(
            "Negative",
            "Verify whether user is not able to view home page " +
              "trying to login with valid details" +
              "in login page",
            "Click login button"
        );
        await Utils.clearAndSetValue(SigninPage.email , "sampletest@test.com");
        await Utils.clearAndSetValue(SigninPage.password,"12345678");
        await Utils.click(SigninPage.loginBtn);
        await Utils.testStepForReport("View Home Page:");
        await expect(SigninPage.homeImg).toBeDisplayed();
    });
});