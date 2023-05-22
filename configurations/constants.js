/***
 * All Test Constant data like below can be kept here & from here we can
 * refer the values to multiple tests
 * Sample values as below:
 * ***/

module.exports = {
  LANDING_PAGE_TITLE: "pageTitle",
  INVALID_DETAILS_ERR_MSG: "Invalid Details",
  ENTER_VALID_DATA_ERR_MSG_TXT: "Please Enter Valid Details",
  INVALID_LOGIN_DETAILS_ERROR_TXT: "Error in logging in! Please contact Admin.",
  ESSENTIAL_PLAN_TXT: "ESSENTIAL",
  SETTINGS_TOGGLE_SWITCHES: [
    "Allow Submissions",
    "Enable CAPTCHA",
    "Enable Allowed Domains",
    "Enable Allowed Country Origins",
  ],

  //Wait values
  VERY_SHORT_WAIT: 3000,
  SHORT_WAIT: 6000,
  MEDIUM_WAIT: 8000,
  LONG_WAIT: 30000, //30sec
  VERY_LONG_WAIT: 60000, //1min

  //File
  EXIT_CODE_TXT_FILENAME: "wdioexitcode.txt",

  //Keys
  ESC_KEY: "\uE00C",
  CTRL_KEY: "\uE009",
  DEL_KEY: "\uE017",
  BACKSPACE_KEY: "\uE003",
  A_KEY: "a",

  //Status Code
  FORM_SUBMIT_SUCCESS_CODE: 200,
  FORM_SUBMIT_ERROR_CODE: 400,
  THREE_SUBMISSION: 3,
  ONE_SUBMISSION: 1,
};
