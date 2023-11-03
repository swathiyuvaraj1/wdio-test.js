/***
 * All Test configuration data like below can be kept here & from here we can pass the
 * values/refer to multiple tests and execute tests based on the value
 * Sample values as below:
 * ***/

module.exports = {
  dockerService: process.env.DOCKER_SERVICE,
  buildId: process.env.BUILD,

  siteURL: process.env.SITE_URL,
  loginEmailId: process.env.USER_EMAIL_ID,
  loginPassword: process.env.PASSWORD,
  invalidEmailId: "sampletes@test.com",
  invalidPassword: "1234567",
  emailPrefix: "wdio",
  pwdMismatch: "mismatch",
  invalidEmail: "test.user.com",
  validEmail: "test@user.com",
};
