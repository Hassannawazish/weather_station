pipenv --version            (11.9.0)
pipenv install flask            (lower case convension)

* Activation of pipenv based venv
    pipenv shell/   . /home/hassan/Desktop/weather_station/backend/.venv/bin/activate

* PIP (in case you just have pipfile and pipfile.lock)
    pipenv install --dev
    use the command given above to create the pipenv.

* To run flask webapp                              (In case you didn't defined __main__ function)
    env FLASK_APP=main.py flask run
    otherwise(python3 main.py)

* To Integrate the mongodb locally you have to install mongodb and mongodb clusted and create a default database and collection(without password setup).

* To integrate the mongodb from cloud you do not have to install anything. You just have to create the mongodb database and collection online and copy the connection string and paste in code.
