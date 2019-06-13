# locapic
A mobile app that geolocates you and allows you to chat with your friends


This project was part of my training to learn about react native.

This is a mobile app that uses facebook authentication to login, here is the [documentation](https://developers.facebook.com/).
It has two pages one page designed to geolocate you using google maps. This is a good exercise to familiarize yourself with the google maps tools. It is set on the Paris coordinates, but once it has geolcated you it will display a marker on yout position with the message "Hello, I am here!".

The second page is a chat to send live messages. It uses websockets via [socket.io](https://socket.io/). What was interesting here is that we use the facebook information (name and profile pic) collected during the login and put away in the store via redux, to display the messages.

It is a simple app but fun to work on!

**Screenshots:**
* Home screen:


![locapic1](https://i.ibb.co/ZSGm48X/locapic-home.jpg)

* Maps screen:


![locapic2](https://i.ibb.co/jfPnRLr/locapic-maps.jpg)

* Chat screen:


![locapic3](https://i.ibb.co/mNTXWqS/locapic-chat-jpg.jpg)

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Express.js](https://expressjs.com/fr/) - a web application infrastructure for Node.js
* [React Native](https://facebook.github.io/react-native/) - via Expo.io
* [React Redux](https://github.com/reduxjs/react-redux) - Redux is a predictable state container for JavaScript apps.
* [React-native-maps](https://github.com/react-native-community/react-native-maps) - A module that enable mapview for Android or iOS
* [Socket.io](https://socket.io/) - A JS framework that enables real-time, bidirectional and event-based communication.
* [Facebook Authentication](https://developers.facebook.com/) - To implement login via user's facebook


