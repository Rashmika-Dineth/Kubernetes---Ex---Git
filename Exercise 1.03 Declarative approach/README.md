# Exercise 1.03: Declarative approach

## In your "Log output" application create a folder for manifests and move your deployment into a declarative file.Make sure everything still works by restarting and following logs.

1. Create the deployment.yaml file

![](Images/Img1.JPG)

2. Build the docker image again "docker build -t <image>:<new_tag> ."
   docker build -t rashmika31601/logger:v0.1 .

![](Images/Img2.JPG)

3. Push the updated build : docker push <image>:<new_tag>
   docker push rashmika31601/logger:v0.1

![](Images/Img3.JPG)

4. Then edit deployment.yaml so that the tag is updated to the <new_tag> and run the following command

![](Images/Img4.JPG)

5. Apply the yaml to cluster

![](Images/Img5.JPG)

6. Recheck the log output

![](Images/Img6.JPG)
