pipenv --version            (11.9.0)
pipenv install flask            (lower case convension)

* Activation of pipenv based venv
    pipenv shell/   . /home/hassan/Desktop/weather_station/backend/.venv/bin/activate

* PIP (in case you just have pipfile and pipfile.lock)
    pipenv install --dev
    use the command given above to create the pipenv.

* To run flask webapp
    env FLASK_APP=main.py flask run
