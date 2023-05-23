/***
 * Add all your test support utility methods here & use with tests
 * Sample methods as below
 * ***/

const AllureReporter = require("@wdio/allure-reporter").default;
const Config = require("../configurations/config.js");
const Constants = require("../configurations/constants.js");
const Fetch = require("node-fetch");
const fsp = require("fs/promises");

class Utils {
  /**
   * method used to add test details like scenario type,
   * desc. to allure report
   * @param  {} testCaseType
   * @param  {} testDescription
   * @param  {} testStep
   */
  async testDetailsForReport(testCaseType, testDescription, testStep) {
    AllureReporter.addFeature(testCaseType);
    AllureReporter.addDescription(testDescription);
    AllureReporter.addStep(testStep);
  }
  /**
   * method used to add test step lvl details
   * to allure report
   * @param  {} testStep
   */
  async testStepForReport(testStep) {
    AllureReporter.addStep(testStep);
  }
  /**
   * method used to add test data details to allure report
   * @param  {} variable
   * @param  {} value
   */
  async testDataForReport(variable, value) {
    AllureReporter.addArgument(variable, value);
  }
  /**
   * method used to add env. details to allure report
   */
  async testEnvironmentDetails() {
    AllureReporter.addEnvironment("Site URL", Config.siteURL);
  }

  /**
   * method used to refresh the current page
   */
  async pageRefresh() {
    await browser.refresh();
  }
  /**
   * method used to maximize the current window
   */
  async maxWindow() {
    await browser.maximizeWindow();
  }
  /**
   * method used to launch the site, baseUrl
   * value will be taken from conf file
   */
  async launchSite() {
    await browser.url("/");
  }
  /**
   * method used to close the current window
   */
  async closeWindow() {
    await browser.closeWindow();
  }
  /**
   * method used to handle web element
   * click action
   * @param  {} element
   */
  async click(element) {
    await element.click();
  }
  /**
   * method used to enter/pass value
   * to browser web element
   * @param  {} element
   * @param  {} value
   */
  async setValue(element, value) {
    await element.setValue(value);
  }
  /**
   * method used to wait for the element,
   * to be available in DOM
   * @param  {} element
   * @param  {} waitValue
   */
  async waitForExist(element, waitValue) {
    try {
      await element.waitForExist({ timeout: waitValue });
    } catch (err) {
      console.log("waitForExist Error: " + err);
    }
  }

  /**
   * method will return the timestamp upto seconds
   */
  timestamp() {
    let dateTime = new Date();
    let month = dateTime.getMonth() + 1;
    return (
      dateTime.getDate().toString() +
      month.toString() +
      dateTime.getFullYear().toString() +
      dateTime.getHours().toString() +
      dateTime.getMinutes().toString() +
      dateTime.getSeconds().toString()
    );
  }

  /**
   * method will return dynamic value of the prefix
   * by appending timestamp value
   * @param  {any} prefix
   */
  async getDynamicValueOfPrefix(prefix) {
    return prefix + this.timestamp();
  }

  /**
   * method will return email id by appending
   * timestamp value to the prefix with @test.com
   * @param  {any} emailPrefix
   */
  async getDynamicEmailId(emailPrefix) {
    return emailPrefix + this.timestamp() + "@test.com";
  }

  /**
   * Sends asynchronous message into Google Chat
   * @param  {any} webhookUrl
   * @param  {any} testStatus
   */
  async shareTestStatusViaWebhook(webhookUrl, testStatus) {
    const webhookURL = "" + webhookUrl + "";
    const data = await JSON.stringify({
      text: "" + testStatus + "",
    });
    await Fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: data,
    }).then((response) => {
      console.log("webhookUrl Response: " + response);
    });
  }

  /**
   * method used to create a file and write
   * the contents to it
   * @param  {any} fileName
   * @param  {any} fileContents
   */
  async writeToFile(fileName, fileContents) {
    try {
      await fsp.writeFile(fileName, fileContents);
      console.log("File created successfully - " + fileName);
    } catch (error) {
      console.log("Error logs with File Create/Write: " + error);
    }
  }

  /**
   * method used to scroll to a
   * particular element within DOM
   * @param  {any} element
   */
  async scrollToElement(element) {
    await element.scrollIntoView();
  }

  /**
   * method used to perform keyboard
   * keys action on the browser screen
   * @param  {any} key
   */
  async keysAction(key) {
    await browser.keys(key);
  }

  /**
   * method used to get current window handle
   */
  async getParentWindow() {
    return await browser.getWindowHandle();
  }

  /**
   * method used to get all window handles
   * open in that session
   */
  async getAllWindows() {
    return await browser.getWindowHandles();
  }

  /**
   * method used to switch control to
   * that window with the windowId/windowHandle
   * @param  {any} windowHandle
   */
  async switchToWindow(windowHandle) {
    await browser.switchToWindow(windowHandle);
  }

  /**
   * method used to switch between two windows
   * that are open parent/child and gives control to
   * child window
   * @param  {any} windowHandles
   * @param  {any} parentWindowHandle
   */
  async switchToChildWindow(windowHandles, parentWindowHandle) {
    for (let i = 0; i < windowHandles.length; i++) {
      if (windowHandles[i] != parentWindowHandle) {
        this.testStepForReport("Switch Window:");
        await this.switchToWindow(windowHandles[i]);
      }
    }
  }

  /**
   * method used to close the current browser
   * window that is open/control lies
   */
  async closeCurrentBrowserWindow() {
    await browser.closeWindow();
  }

  /**
   * method used to pause browser for the
   * wait time passed
   * @param  {any} milliSeconds
   */
  async waitFor(milliSeconds) {
    await browser.pause(milliSeconds);
  }

  /**
   * method used to mouse hover on a
   * particular element
   * @param  {any} element
   */
  async mouseHoverTo(element) {
    await element.moveTo();
  }

  /**
   * method used to clear cell contents
   * @param  {any} element
   */
  async clearCellContents(element) {
    await this.click(element);
    await this.waitFor(Constants.VERY_SHORT_WAIT);
    await this.keysAction([
      Constants.CTRL_KEY,
      Constants.A_KEY,
      Constants.DEL_KEY,
    ]);
  }

  /**
   * method used to clear existing value
   * and enter new value
   * @param  {any} element
   * @param  {any} value
   */
  async clearAndSetValue(element, value) {
    await this.clearCellContents(element);
    await this.setValue(element, value);
  }

  /**
   * method used to handle drag and drop
   * action with source and target elements
   * @param  {any} source
   * @param  {any} target
   */
  async dragAndDrop(source, target) {
    await source.dragAndDrop(target);
  }
}
module.exports = new Utils();
