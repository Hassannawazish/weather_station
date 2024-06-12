<!-- pipenv --rm -->
* Build docker image :
    pip install --upgrade pipenv
    pipenv lock --pre --clear
    sudo docker build . -t weatherui

* Run Docker Container
    sudo docker images 
    sudo lsof -i :3000
    sudo kill -9 <PID>
    sudo docker run -p 3000:3000 weatherui

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

* For windows :
    docker build . -t weatherui
    docker run -p 3000:3000 weatherui
