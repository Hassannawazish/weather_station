<!-- pipenv --rm -->
* Build docker image :
    pip install --upgrade pipenv
    pipenv lock --pre --clear
    sudo docker build . -t weatheresp

* Run Docker Container
    sudo docker images 
    sudo lsof -i :5050
    sudo kill -9 <PID>
    sudo docker run -p 5050:5050 weatheresp

* Removal of docker container 
    sudo docker images  
    <!-- copy IMAGE ID of the docker you want to remove. -->
    sudo docker rmi 4992ae0234f6
    sudo docker stop aaba5e6d77a5
    sudo docker rm aaba5e6d77a5
    sudo docker rmi 4992ae0234f6
* Visualize Dockers
    sudo docker images
    sudo docker ps -a
