import React from "react";
import { Button } from "react-bootstrap";

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
