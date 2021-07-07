## bono
#### "For the greater good"

---
Bono is a federated mobile app that helps people get active within their community with volunteering and organizations. 

This is the frontend repository - written with React Native.

Some roadmap goals are:
 - Ease of setup. Users should be able to setup a local Bono instance with basic tech skills and inexpensive hardware.
 - Federated. Bono instances should be able to communicate with each other, enabling effective clusters that span larger areas.
 - Community focus. Bono is designed around a central map to drive focus towards community.

<br />
<br />

## Build the frontend
At the time of writing bono is in initial stages of development. If you want to check it out, you have to build it (not on any app stores.)
 - Clone this repository
 - Install yarn
 - Run `yarn install`
 - Fill out the blanks in `.env_sample`, remove the comments and rename it to `.env`
 - In one terminal, run `yarn start` to run the metro development server
 - In another terminal, run `yarn android`<sup>[1]</sup> or `yarn ios` to build and upload to the respective devices.  
<sub>1. To run on Android a Google Maps Android SDK key is required. This app doesn't charge anything to the key as it uses OpenStreetMaps for tile data.</sub>