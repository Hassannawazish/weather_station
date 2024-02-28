from setuptools import setup, find_packages

setup(
    name='weatherapp',
    version='1.0',
    packages=find_packages(),
    install_requires=[
        'Flask',
        'Flask-Script',
        'setproctitle',
        'flask-restful',
        'pymongo',
        'requests',
        'flask-cors',
        'build'
    ],
)
