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
   * @param  {any} contentType
   * @param  {any} url
   * @param  {any} data
   * @param  {any} statusCodeToVerify
   */
  async postRequestWithCatch(contentType, url, data, statusCodeToVerify) {
    try {
      let options = {
        headers: {
          "Content-Type": contentType,
        },
      };
      let jsonData = JSON.stringify(data);
      console.log("Json Data:" + jsonData);
      const response = await Axios.post(url, jsonData, options);
      console.log("API Response:" + JSON.stringify(response.data));
      let statusCode = response.status;
      console.log("POST API call Response Status Code: " + statusCode);
      if (statusCode == statusCodeToVerify) {
        console.log("Request success!");
      } else {
        throw new Error("Request failed!");
      }
    } catch (err) {
      console.log("Error - POST API call : " + err);
    }
  }

  /**
   * method used to perform POST request without error catch
   * to verify status code of api and other params
   * via axios
   * @param  {any} contentType
   * @param  {any} url
   * @param  {any} data
   * @param  {any} statusCodeToVerify
   */
  async postRequest(contentType, url, data, statusCodeToVerify) {
    let options = {
      headers: {
        "Content-Type": contentType,
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
   * @param  {any} contentType - multipart/form-data
   * @param  {any} url
   * @param  {any} filePaths - "./data/test.csv"
   * @param  {any} statusCodeToVerify
   */
  async postRequestWithFiles(contentType, url, filePaths, statusCodeToVerify) {
    let options = {
      headers: {
        "Content-Type": contentType,
      },
    };
    let formData = new FormData();
    formData.append("Name:", "WDIO");
    for (let i = 0; i < filePaths.length; i++) {
      let file = fs.createReadStream(filePaths[i]);
      formData.append("Attachment-" + [i], file);
    }
    const response = await Axios.post(url, formData, options);
    await this.verifyResponse(response, statusCodeToVerify);
  }

  /**
   * method used to perform POST request with files
   * and with error catch to verify 400 status code of api
   * via axios
   * @param  {any} contentType - multipart/form-data
   * @param  {any} url
   * @param  {any} filePaths - "./data/test.csv"
   * @param  {any} statusCodeToVerify
   */
  async postRequestWithCatchForFiles(
    contentType,
    url,
    filePaths,
    statusCodeToVerify
  ) {
    try {
      let options = {
        headers: {
          "Content-Type": contentType,
        },
      };
      let formData = new FormData();
      formData.append("Name:", "WDIO");
      for (let i = 0; i < filePaths.length; i++) {
        let file = fs.createReadStream(filePaths[i]);
        formData.append("Attachment-" + [i], file);
      }
      const response = await Axios.post(url, formData, options);
      console.log("API Response:" + JSON.stringify(response.data));
      let statusCode = response.status;
      console.log("POST API call Response Status Code: " + statusCode);
      if (statusCode == statusCodeToVerify) {
        console.log("Request success!");
      } else {
        throw new Error("Request failed!");
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
      console.log("Request success!");
    } else {
      throw new Error("Request failed!");
    }
  }
}
module.exports = new ApiUtils();
