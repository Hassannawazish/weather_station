import pymongo
from pymongo import MongoClient, errors

mongo_user = None  # Leave it empty as there is no username
mongo_password = None  # Leave it empty as there is no password
mongo_host = "localhost"
mongo_port = "27017"
mongo_db = "admin"  # Replace with the actual database name
collection_name = "weather_data"

CONNECTION_STRING = f"mongodb://{mongo_host}:{mongo_port}/{mongo_db}"

def mongodb_connect(CONNECTION_STRING):
    try:
        client = pymongo.MongoClient(CONNECTION_STRING)
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

data_to_insert = {
    "temperature": 25.5,
    "windspeed": 10.2,
    "detail": {
        "winddirection": "N",
        "pressure": 1010.2,
        "weather_type": "Sunny"
    }
}

weather_data_collection.insert_one(data_to_insert)

result = weather_data_collection.find_one({"temperature": 25.5, "windspeed": 10.2})
if result:
    print("Data successfully inserted:", result)
else:
    print("Failed to insert data.")

# db = client.collection_name
# try:
#     db.command("serverStatus")
# except Exception as e: 
#     print(e)
# else: 
#     print("You are connected!")
