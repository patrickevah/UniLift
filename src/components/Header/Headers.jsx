import React from "react";
import { Button } from "react-bootstrap";
export const Headers = () => {
  return (
    <div className="one-img-conatainer">
      

      <div className="hm-ft-img">
        <div className>
          
        </div>
        <div className="contact">
          <h2>Our app takes you further</h2>
          <div>
            <p>
              Earn double Expedia Rewards points when you book on the app as a
              member. Save even more on trips so you can take more trips, and
              manage it all on the go.
            </p>
          </div>
          <h3>Text yourself a download link for easy access</h3>

          <div className="hm-contact-card">
            <div>
              <select>
                {" "}
                Country Code
                <option>ind</option>
                <option>nvs</option>
                <option>kd</option>
              </select>
            </div>
            <div>
              {" "}
              <input type="number" placeholder="Phone number" className="get-number"/>
            </div>
            <Button>Get the app</Button>
          </div>
          <p>
            By providing your number, you agree to receive a one-time automated
            text message with a link to get the app. Standard text message rates
            may apply.
          </p>
        </div>
        <div className="qr-code">
          
          <span>Scan the QR Code</span>
        </div>
      </div>
    </div>
  );
};