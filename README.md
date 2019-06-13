# locapic
A mobile app that geolocates you and allows you to chat with your friends


This project was part of my training to learn about react native.

This is a mobile app that uses facebook authentication to login [documentation](https://developers.facebook.com/).
It has two pages one page designed to geolocate you using google maps. This is a good exercise to familiarize yourself with the google maps tools. It is set on the Paris coordinates, but once it has geolcated you it will display a marker on yout position with the message "Hello, I am here!".

The second page is a chat to send live messages. It uses websockets via [socket.io](https://socket.io/). What was interesting here is that we use the facebook information (name and profile pic) collected during the login and put away in the store via redux, to display the messages.

It is a simple app but fun to work on!

**Screenshots:**
* Home screen:


![locapic1](https://i.ibb.co/f8st6Ny/Screenshot-20190613-120152-Expo.jpg)

* Maps screen:


![locapic2](https://i.ibb.co/jVJKt75/Screenshot-20190613-120141-Expo.jpg)

* Chat screen:


![locapic3](https://i.ibb.co/N9sXL1L/Screenshot-20190613-120116-Expo.jpg)

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Bootstrap](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Leaflet](https://leafletjs.com/) - Leaflet is a an open-source JavaScript library for mobile-friendly interactive maps
* [Express.js](https://expressjs.com/fr/) - a web application infrastructure for Node.js
* [mlab](https://mlab.com/) a MongoDB hosting service

