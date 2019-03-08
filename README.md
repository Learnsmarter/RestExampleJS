# Requirements
- Learnsmarter Core Installed
- Learnsmarter Engage Installed
- A REST API widget must be configured

# Compatibility
This example does not consider legacy browser compatibility. Your browser must have basic ES6 support.

Confirmed support (latest versions):
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

# How to use
- Either download and unzip or pull from this repo.
- Open index.html in your browser

# How it works
- The page calls out for the controller to initiate the callouts.
- Depending on the URL parameter, it will either fetch courses or scheduled courses (determined by a course ID)
- The callout fetches the records from the REST API and returns them (using a promise).
- The results (returned in a JSON format but already parsed by this point), are then added to new DOM elements and added to the page.

# Other languages
- This is a JavaScript example. All languages are able to do the same. Should you wish to use a server-side language (and we recommend this), then there will be modules to allow you to make callouts and process responses.

# Configure
This example is connected to an example org. Please connect to an org of your choosing and ensure the profile permissions and widgets are configured accordingly.

You must change the endpoint URL to the endpoint in `js/controller.js` described in your REST API widget.
