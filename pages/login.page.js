/***
 * All page elements & methods like below can be kept here & from here we can
 * refer the values to multiple tests
 * Sample values as below:
 * ***/

class LoginPage {
  get userLoginBtn() {
    return $("//button[text()='Login']");
  }
  get forgotPwdLinkTxt() {
    return $("//*[contains(text(),'Forgot your')]");
  }
  get signupLinkTxt() {
    return $("//*[contains(text(),'Signup')]");
  }
}
module.exports = new LoginPage();
