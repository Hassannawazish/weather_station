#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "Hassan Nawazish";
const char* password = "";
const char* apiEndpoint = "http://localhost/weather_data/";

void setup() {
  Serial.begin(9600);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}

void loop() {
  HTTPClient http;
  http.begin(apiEndpoint);

  int httpCode = http.GET();
  if (httpCode > 0) {
    String payload = http.getString();
    Serial.println(payload);
  } else {
    Serial.printf("HTTP GET request failed with error code %d\n", httpCode);
  }

  http.end();
  delay(5000);
}
