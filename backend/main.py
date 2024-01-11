from flask import Flask, jsonify, request
from bson import ObjectId 

from database.db import weather_data_collection

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/get/<string:data_id>', methods=['GET'])
def get_data(data_id):
    try:
        # Convert the data_id parameter to ObjectId (assuming it's a valid ObjectId)
        data_id = ObjectId(data_id)

        # Find the document with the given ID
        result = weather_data_collection.find_one({"_id": data_id})

        # Check if the document exists
        if result:
            # Convert ObjectId to string
            result["_id"] = str(result["_id"])

            response = {
                "status": "success",
                "data": result
            }
        else:
            response = {
                "status": "error",
                "message": "Data not found."
            }
    except Exception as e:
        response = {
            "status": "error",
            "message": f"An error occurred: {str(e)}"
        }
    return jsonify(response)

@app.route('/post_data', methods=['POST'])
def post_data():
    try:
        data = request.get_json()
        result = weather_data_collection.insert_one(data)
        inserted_data = weather_data_collection.find_one({"_id": result.inserted_id})
        inserted_data["_id"] = str(inserted_data["_id"])

        response = {
            "status": "success",
            "data": inserted_data
        }
    except Exception as e:
        response = {
            "status": "error",
            "message": f"An error occurred: {str(e)}"
        }
    return jsonify(response)

@app.route('/delete_data/<string:data_id>', methods=['DELETE'])
def delete_data(data_id):
    try:
        # Convert the data_id parameter to ObjectId (assuming it's a valid ObjectId)
        data_id = ObjectId(data_id)

        # Check if the document with the given ID exists
        existing_data = weather_data_collection.find_one({"_id": data_id})
        if existing_data:
            # Delete the document
            result = weather_data_collection.delete_one({"_id": data_id})

            response = {
                "status": "success",
                "message": f"Deleted {result.deleted_count} document(s)."
            }
        else:
            response = {
                "status": "error",
                "message": "Data not found."
            }
    except Exception as e:
        response = {
            "status": "error",
            "message": f"An error occurred: {str(e)}"
        }
    return jsonify(response)

@app.route('/update_data/<string:data_id>', methods=['PUT'])
def update_data(data_id):
    try:
        # Convert the data_id parameter to ObjectId (assuming it's a valid ObjectId)
        data_id = ObjectId(data_id)

        # Check if the document with the given ID exists
        existing_data = weather_data_collection.find_one({"_id": data_id})
        if existing_data:
            # Get the updated data from the request
            updated_data = request.get_json()

            # Update the document
            result = weather_data_collection.update_one({"_id": data_id}, {"$set": updated_data})

            response = {
                "status": "success",
                "message": f"Updated {result.modified_count} document(s)."
            }
        else:
            response = {
                "status": "error",
                "message": "Data not found."
            }
    except Exception as e:
        response = {
            "status": "error",
            "message": f"An error occurred: {str(e)}"
        }
    return jsonify(response)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
