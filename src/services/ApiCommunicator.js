import Promise from "promise-polyfill";
import "whatwg-fetch";

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

export default class ApiCommunicator {
  constructor() {
    this.key = "93ec2c973f1cbc56afe440151f16e2f5";
    this.apiHost = "https://crossorigin.me/https://api.brewerydb.com";
    this.apiNamespace = "v2";
  }

  get keyQuery() {
    return `key=${this.key}`;
  }

  get baseUrl() {
    return `${this.apiHost}/${this.apiNamespace}`;
  }

  getEndpoint(endpoint, params) {
    let url = `${this.baseUrl}/${endpoint}?format=json&${this.keyQuery}`;

    if (typeof params === "object") {
      for (var param in params) {
        url = `${url}&${param}=${params[param]}`;
      }
    } else if (typeof params === "string") {
      url = `${url}&${params}`;
    }

    return fetch(url).then(response => response.json()).then(response => {
      if (response.status === "success") {
        return response.data;
      }
    });
  }
}
