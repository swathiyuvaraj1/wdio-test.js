/***
 * All common Test data like below can be kept here & from here we can
 * refer the values to multiple tests
 * Sample values as below:
 * ***/

const Utils = require("../Utilities/Utils.js");
const Constants = require("../configurations/constants.js");
class Commons {
  /**
   * method used to return error msg element
   * @param  {any} msgTxt
   */
  errorMsgTxt(msgTxt) {
    return $("//*[text()='" + msgTxt + "']");
  }

  /**
   * method used to return partial error msg element
   * @param  {any} msgTxt
   */
  partialErrorMsgTxt(msgTxt) {
    return $("//*[contains(text(),'" + msgTxt + "')]");
  }

  /**
   * method used to return success msg element
   * @param  {any} msgTxt
   */
  successMsgTxt(msgTxt) {
    return $("//*[contains(text(),'" + msgTxt + "')]");
  }

  /**
   * method used to return full msg element
   * @param  {any} msgTxt
   */
  fullMsgTxt(msgTxt) {
    return $("//*[text()='" + msgTxt + "']");
  }

  /**
   * method used to return partial msg element
   * @param  {any} msgTxt
   */
  partialMsgTxt(msgTxt) {
    return $("//*[contains(text(),'" + msgTxt + "')]");
  }

  /**
   * method used to return full Txt element
   * @param  {any} msgTxt
   */
  fullTxt(msgTxt) {
    return $("//*[text()='" + msgTxt + "']");
  }

  /**
   * method used to return partial Txt element
   * @param  {any} msgTxt
   */
  partialTxt(msgTxt) {
    return $("//*[contains(text(),'" + msgTxt + "')]");
  }

  get screenLoaderElement() {
    return $("");
  }

  /**
   * method used to handle the screen loader
   * part within pages
   */
  async screenLoader() {
    await Utils.testStepForReport("Screen Loading:");
    await Utils.waitForExist(
      this.screenLoaderElement,
      Constants.VERY_SHORT_WAIT
    );
    await expect(this.screenLoaderElement).not.toBeDisplayed();
  }

  /**
   * method used to return header text element
   * @param  {any} header
   */
  headerTxt(header) {
    return $("//h4[text()='" + header + "']");
  }
}
module.exports = new Commons();
