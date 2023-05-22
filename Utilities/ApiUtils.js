/***
 * Add all your common generalized API support utility methods here & use with tests
 * We have used AXIOS for API requests
 * Sample methods as below
 * ***/

const Axios = require("axios").default;
const FormData = require("form-data");
const fs = require("fs");

class ApiUtils {
  /**
   * method used to perform POST request with catch and to verify
   * negative (400) status code of api and other params
   * via axios
   * @param  {any} url
   * @param  {any} data
   * @param  {any} statusCodeToVerify
   */
  async postRequestWithCatch(url, data, statusCodeToVerify) {
    try {
      let options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let jsonData = JSON.stringify(data);
      console.log("Json Data:" + jsonData);
      const response = await Axios.post(url, jsonData, options);
      console.log("API Response:" + JSON.stringify(response.data));
      let statusCode = await response.status;
      console.log("POST API call Response Status Code: " + statusCode);
      if (statusCode == statusCodeToVerify) {
        console.log("Form submitted successfully!");
      } else {
        throw new Error("Form submission failed!");
      }
    } catch (err) {
      console.log("Error - POST API call : " + err);
    }
  }

  /**
   * method used to perform POST request without error catch
   * to verify status code of api and other params
   * via axios
   * @param  {any} url
   * @param  {any} data
   * @param  {any} statusCodeToVerify
   */
  async postRequest(url, data, statusCodeToVerify) {
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let jsonData = JSON.stringify(data);
    console.log("Json Data:" + jsonData);
    const response = await Axios.post(url, jsonData, options);
    await this.verifyResponse(response, statusCodeToVerify);
  }

  /**
   * method used to perform POST request with files
   * and without error catch to verify status code of api
   * via axios
   * @param  {any} url
   * @param  {any} filePath - "./data/test.csv"
   * @param  {any} statusCodeToVerify
   */
  async postRequestWithFiles(url, filePaths, statusCodeToVerify) {
    let options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();
    formData.append("Name:", "WDIO");
    formData.append("UserType:", "PremiumUser");
    for (let i = 0; i < filePaths.length; i++) {
      let file = await fs.createReadStream(filePaths[i]);
      formData.append("Attachment-" + [i], file);
    }
    const response = await Axios.post(url, formData, options);
    await this.verifyResponse(response, statusCodeToVerify);
  }

  /**
   * method used to perform POST request with files
   * and with error catch to verify 400 status code of api
   * via axios
   * @param  {any} url
   * @param  {any} filePath - "./data/test.csv"
   * @param  {any} statusCodeToVerify
   */
  async postRequestWithCatchForFiles(url, filePaths, statusCodeToVerify) {
    try {
      let options = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      formData.append("Name:", "WDIO");
      formData.append("UserType:", "PremiumUser");
      for (let i = 0; i < filePaths.length; i++) {
        let file = await fs.createReadStream(filePaths[i]);
        formData.append("Attachment-" + [i], file);
      }
      const response = await Axios.post(url, formData, options);
      console.log("API Response:" + JSON.stringify(response.data));
      let statusCode = await response.status;
      console.log("POST API call Response Status Code: " + statusCode);
      if (statusCode == statusCodeToVerify) {
        console.log("Form submitted successfully!");
      } else {
        throw new Error("Form submission failed!");
      }
    } catch (err) {
      console.log("Error - POST API call : " + err);
    }
  }

  /**
   * method used to verify response
   * from api request via axios
   * @param  {any} response
   * @param  {any} statusCodeToVerify
   */
  async verifyResponse(response, statusCodeToVerify) {
    console.log("API Response:" + JSON.stringify(response.data));
    let statusCode = await response.status;
    console.log("POST API call Response Status Code: " + statusCode);
    if (statusCode == statusCodeToVerify) {
      console.log("Form submitted successfully!");
    } else {
      throw new Error("Form submission failed!");
    }
  }
}
module.exports = new ApiUtils();
