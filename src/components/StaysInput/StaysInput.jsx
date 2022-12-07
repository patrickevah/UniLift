import React from "react";
import { Button } from "react-bootstrap";
import "./StaysInput.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StaysInputContext } from "../StaysInputContext";

export const StaysInput = () => {
  const { handleChange } = useContext(StaysInputContext);

  return (
    <div className="stays-input-container">
      <div className="input-container">
        <div className="location-input">
          <label className="label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>

            <input
              type="text"
              placeholder="Going to"
              className="migrate-to"
              name="location"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="date-label">
            <div>Departure</div>
            <input
              type="date"
              placeholder="date"
              className="date-picker"
              name="checkin"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className="date-label">
            <div> Return</div>
            <input
              type="date"
              placeholder="date"
              className="date-picker"
              onChange={handleChange}
              name="checkout"
            />
          </label>
        </div>
        
      </div>
      <div className="input-additional">
        <label>
          <input type="radio" />
          <span> {"Driver"}</span>
        </label>
        <label>
          <input type="radio" />
          <span> {"Passenger "}</span>
        </label>
      </div>
      <div className="stay-input-button">
        <Button variant="primary" size="lg">
          <Link
            to="/searchResult"
            style={{ textDecoration: "none", color: "white" }}
          >
            Search
          </Link>
        </Button>{" "}
      </div>
    </div>
  );
};