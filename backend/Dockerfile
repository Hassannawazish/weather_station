FROM python:3.8

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv install --dev

# Use pipenv run pip freeze to generate requirements.txt
RUN pipenv run pip freeze > requirements.txt

RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]
