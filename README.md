# Backend Code Explaination
## Running code on local *nix machine
Backend API is written in Nodejs using Express framework. The code sends "Hello Stakater" by default if no environment variable `NAME` is set. The code works on port 8080 be default and if given environment variable `PORT`, it will use that port number. It is uses localhost as ip address. `http://localhost:8080` displays the backend output

### How to run it.
Make sure you are running it on a Linux machine. Make sure you have installed `node 16 or above` and `npm` on your linux machine. I'll be working on Ubuntu, my commands will work on it. `git clone` the backend into your machine.
```
cd aurotask-BACKEND
npm init --yes
npm i express
npm i nodemon (optional good for testing environment so you don't have to stop and start on change in code)
```
```
node backend.js
 OR
nodemon backend.js
```
If you want to pass your 'NAME' in environment variable
```
NAME=*YOURNAME* node backend.js
```
If you want to pass your 'PORT' in environment variable
```
PORT=*PORT NUMBER* node backend.js
```
You will get following output and you can access your 
```
Listening on port 8080..
```

## Running on Docker image


## Running on Kubernetes with MINIKUBE
# adding new commmit
