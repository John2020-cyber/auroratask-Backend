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
You can access the container now by running entering `localhost:8080` in browser or `curl http://localhost:8080` on your terminal. If no `NAME` variable is given. The response of backend will be:
```
Hello Stakater
```
## Running on Kubernetes with MINIKUBE
Make sure your have installed `kubectl` to use kubernetes with `MINIKUBE`. Make sure you have configured and `MINIKUBE` is running in your virtual enviroment. You can use the following link to install `kubectl` `https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/` and to install `MINIKUBE` `https://minikube.sigs.k8s.io/docs/start/`.
If you are running ubuntu you can use my steps to install. Make sure you have installed `Virtual Box` on your ubuntu machine.
```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
kubectl --version
kubectl version
kubectl cluster-info
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube config set driver virtualbox
minikube start --driver=virtualbox
minikube status
```

# adding new commmit
