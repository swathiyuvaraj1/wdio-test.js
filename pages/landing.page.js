/***
 * All page elements & methods like below can be kept here & from here we can
 * refer the values to multiple tests
 * Sample values as below:
 * ***/

class LandingPage {
  get loginBtn() {
    return $("//button[text()='Login']");
  }
  get signUpBtn() {
    return $("//button[text()='Sign Up']");
  }
  get demoOptLinkTxt() {
    return $("=Demo");
  }

  /**
   * method used to handle cookie privacy policy
   * popup window
   */
  async handlingCookiePrivacyPolicyPopup() {
    if (await (await $(this.cookiePrivacyPolicyPopup)).isDisplayed()) {
      await Utils.testStepForReport("Cookie Privacy Policy popup:");
      await expect(this.disagreeBtn).toBeDisplayed();
      await expect(this.agreeBtn).toBeDisplayed();
      await Utils.testStepForReport("Select Disagree Btn:");
      await Utils.click(this.disagreeBtn);
    }
  }
}
module.exports = new LandingPage();
