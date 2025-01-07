# Exercise 1.05 Project v0.3

## Have the project respond something to a GET request sent to the project. A simple html page is good or you can deploy something more complex like a single-page-application.

## See here how you can define environment variables for containers.

## Use kubectl port-forward to confirm that the project is accessible and works in the cluster by using a browser to access the project.

1. Start the docker engine

2. Create a cluster

- k3d cluster create -a 2

![](Images/Img1.JPG)

3. Create a program that respond to html request (The below program will response Hello World in html)

![](Images/Img2.JPG)

4. Build the docker image

- docker build -t rashmika31601/server-dep:v0.1 .

![](Images/Img3.JPG)

4. Push the docker image

- docker push rashmika31601/server-dep:v0.1

![](Images/Img4.JPG)

5. Create Kubectl deployment using manifest config

- kubectl apply -f manifests/deployment.yaml

![](Images/Img5.JPG)

6. Check the pods are up and running

- kubectl get pods

![](Images/Img6.JPG)

6. Set the port to http://localhost:3003/

- kubectl port-forward server-dep-c4b64db94-f9tc4 3003:3000

![](Images/Img7.JPG)

7. Go to http://localhost:3003/ and check the response

![](Images/Img8.JPG)
![](Images/Img9.JPG)

8. If need to re apply the changes on deployment.yaml do following,

   - kubectl delete deployment server-dep
   - kubectl apply -f manifests/deployment.yaml
