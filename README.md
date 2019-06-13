# locapic
A mobile app that geolocates you and allows you to chat with your friends


This project was part of my training to learn about react native.

This is a mobile app that uses facebook authentication to login.
It has 2 pages one page designed to geolocate you using google maps. This is a good exercise to familiarize yourself with the google maps tools. It is set on the Paris coordinates, but once it has geolcated you it will display a marker on yout position with the message "Hi, I am here!".

The second page is a chat to send live messages. It uses websockets via socket.io. What was interesting here is that we use the facebook information (name and profile pic) collected during the login and put away in the store via redux, to display the messages.

It is a simple app but fun to work on!

