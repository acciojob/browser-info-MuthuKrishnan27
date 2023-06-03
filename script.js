//your JS code here. If required.
window.addEventListener("DOMContentLoaded", function() {
      var browserInfoElement = document.getElementById("browser-info");
      
      // Get the browser name and version
      var browserName = getBrowserName();
      var browserVersion = getBrowserVersion();
      
      // Display the browser information on the page
      browserInfoElement.textContent = "You are using " + browserName + " version " + browserVersion;
    });

    function getBrowserName() {
      var userAgent = navigator.userAgent;
      var browsers = {
        Chrome: /chrome/i,
        Safari: /safari/i,
        Firefox: /firefox/i,
        Opera: /opera|OPR/i,
        Edge: /edge/i,
        IE: /msie|trident/i
      };
      
      for (var browser in browsers) {
        if (browsers[browser].test(userAgent)) {
          return browser;
        }
      }
      
      return "Unknown";
    }

    function getBrowserVersion() {
      var userAgent = navigator.userAgent;
      var versionRegex = /(chrome|safari|firefox|opera|edge|msie|trident(?=\/))\/?\s*(\d+)/i;
      var matches = userAgent.match(versionRegex);
      
      if (matches && matches.length >= 3) {
        return matches[2];
      }
      
      return "Unknown";
    }