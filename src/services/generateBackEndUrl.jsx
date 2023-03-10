/**
 * Create a variable server URL based on the environment
 * @param {*} forceUrl - URL to be considered as default ('' To get the real url)
 * @param {*} port - Port of backend service
 * @returns
 */
 function generateBackendURL() {
  return "https://alexie-backend-production.up.railway.app/";
}

export default generateBackendURL;