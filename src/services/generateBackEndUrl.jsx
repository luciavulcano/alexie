/**
 * Create a variable server URL based on the environment
 * @param {*} forceUrl - URL to be considered as default ('' To get the real url)
 * @param {*} port - Port of backend service
 * @returns
 */
 function generateBackendURL(forceUrl) {
  const regexEnvmt = /-(dsv|tst|hmg)/;
  const currentUrl = forceUrl
    ? forceUrl
    : window.location.protocol + "//" + window.location.hostname;
  let serverApiUrl = "";

  if (currentUrl.match(regexEnvmt)) {
    serverApiUrl = currentUrl.replace(regexEnvmt, "-backend-$1") + "/";
  } else {
    // Não existe url com "-dsv", "-tst" ou "-hmg"
    serverApiUrl = currentUrl + ":8000/";
  }

  return serverApiUrl;
}

export default generateBackendURL;