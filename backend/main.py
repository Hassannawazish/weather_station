from flask import Flask, jsonify, request

from database.db import weather_data_collection

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/get')
def get_data():
    try:
        result = weather_data_collection.find_one({"temperature": 25.5, "windspeed": 10.2})

        # Convert ObjectId to string
        result["_id"] = str(result["_id"])

        if result:
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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
