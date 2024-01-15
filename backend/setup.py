from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from bson import ObjectId

from database.db import weather_data_collection

app = Flask(__name__)
api = Api(app)

class WeatherDataResource(Resource):
    def get(self, data_id=None):
        try:
            if data_id:
                data_id = ObjectId(data_id)
                result = weather_data_collection.find_one({"_id": data_id})

                if result:
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
            else:
                all_data = [self._format_data(item) for item in weather_data_collection.find()]
                response = {
                    "status": "success",
                    "data": all_data
                }
        except Exception as e:
            response = {
                "status": "error",
                "message": f"An error occurred: {str(e)}"
            }
        return jsonify(response)

    def post(self):
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

    def delete(self, data_id):
        try:
            data_id = ObjectId(data_id)
            existing_data = weather_data_collection.find_one({"_id": data_id})

            if existing_data:
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

    def put(self, data_id):
        try:
            data_id = ObjectId(data_id)
            existing_data = weather_data_collection.find_one({"_id": data_id})

            if existing_data:
                updated_data = request.get_json()
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

    def _format_data(self, data):
        data["_id"] = str(data["_id"])
        return data
