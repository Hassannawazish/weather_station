import setproctitle

from setupapp import api, app, WeatherDataResource

api.add_resource(WeatherDataResource, "/weather_data", "/weather_data/<string:data_id>")

@app.route("/")
def base():
    return "<h1><p>Go to UI or Postman to call and test API's.................!</p></h1>"

if __name__ == "__main__":
    setproctitle.setproctitle('ProdElect3D')
    app.run(host="0.0.0.0", port=5050, debug=True)
