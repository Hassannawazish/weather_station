import React from "react";
import { Button } from "react-bootstrap";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  integrity="sha512-qv9r6+0s1l81gsFCV4CAKt9GA4UpZ9y7tTM2aCJW0tY4cXl1g5A8R3JQ3x5Z93xcpF9U7Q3lmT7OJlT6DOsybcg=="
  crossorigin="anonymous"
/>

const Welcome = () => (
  <div class="mt-4 p-5 bg-primary text-white rounded" >
    <h1>Weather Station</h1>
    <p>
      This is a simple application to show the Real time monitoring results from
      weather station.
    </p>
    <p>
      <Button variant="primary" target="_blank" style={{backgroundColor: "#9292ad"}}>
        Learn more
      </Button>
    </p>
  </div>
);

export default Welcome;
