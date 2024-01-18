pipenv --version            (11.9.0)
* Creation of pipenv from scratch :
    $pipenv install --dev --python 3.8.10
    $pipenv shell
    Here you have to install all your packages using pipenv i.g($pipenv install flask-cors)

* Activation of pipenv if Pipfile and Pipfile.lock is available.
    $pipenv install --dev --python 3.8.10
    $pipenv shell
    Now you do not have to install packages as they are already install due to Pipfile and Pipfile.lock .

* To run flask webapp                              (In case you didn't defined __main__ function)
    env FLASK_APP=main.py flask run
    otherwise(python3 main.py)

* To Integrate the mongodb locally you have to install mongodb and mongodb clusted and create a default database and collection(without password setup).

* To integrate the mongodb from cloud you do not have to install anything. You just have to create the mongodb database and collection online and copy the connection string and paste in code.
