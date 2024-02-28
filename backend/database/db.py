import pymongo, os
from pymongo import MongoClient, errors

mongo_user = "Hassan_Nawazish"
mongo_password = "Hassan12345"
mongo_host = "localhost"
mongo_port = "27017"
mongo_db = "WeatherData"
collection_name = "weather_data"
CONNECTION_STRING = "mongodb+srv://"+mongo_user+":"+mongo_password+"@weatherdata.n5niixq.mongodb.net/"

def mongodb_connect(CONNECTION_STRING):
    try:
        client = pymongo.MongoClient(CONNECTION_STRING, connectTimeoutMS=100000, socketTimeoutMS=100000)
        client.server_info()
        print("Server Connected")
    except errors.ServerSelectionTimeoutError as err:
        print("pymongo ERROR:", err)
        client = None
    return client

mongo_client = mongodb_connect(CONNECTION_STRING)

if mongo_client:
    weather_data_collection = mongo_client[mongo_db][collection_name]
else:
    print("Unable to connect to MongoDB. Check your connection settings.")
