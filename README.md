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
You will get following output and you can access your api with browser `localhost:8080` or `curl http://localhost:8080`
```
Listening on port 8080..
```

## Running on Docker image
The Dockerfile is built using light image `node:slim` and install dependies to run our project with nodejs and express. Add the tag `backend` while building the image to make our reference from `frontend` easier.
To build the backend docker images. Dockerfile should exist in the directory.
```
sudo docker build -t backend .
``` 
List the docker images to confirm it is built
```
sudo docker images
```
To run `backend` docker images we have to expose internal port to external port in order to access it on the host machine. I'll use 8080 for both, Docker containter and Host machine. If you want to give `PORT` `-e PORT=*YOURPORT*` if you want to pass in your `NAME` `-e NAME=*YOURNAME`. We will also give our conatainer the name `backend` to make our reference from `frontend` easier. Add `-d` if you want the container to run in background
```
sudo docker run -e *yourname* -p 8080:8080 --name backend backend
```
You can access the container now by running entering `localhost:8080` in browser or `curl http://localhost:8080` on your terminal. If no name is given. The response of backend will be:
```
Hello Stakater
```
## Running on Kubernetes with MINIKUBE


# adding new commmit
