# expo-linking-demo
A expo app to show deep linking concept and github login 

# How To run
- npm install
- npm run android
- download expo go app from playstore and then scan qr code


# Setup GitHub login
- Create a git hub app  => https://github.com/settings/developers
- set redirectUri to the url of the app (shown when npm run android somthing line expo://............) => [applink]/--/home
- create file named environment.js and set variables as shown in environment.example.js
- re-start the app and test

# Linking 
you can naviagte to apps pages like [applink]/--/home for home and [applink]/--/about for about 

# Learn More
head over to => https://docs.expo.dev/guides/deep-linking/ for more
