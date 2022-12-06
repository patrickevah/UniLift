import React from "react";
import { Headers } from "../Header/Headers";
import { Oneimg } from "./Oneimg";

export const Home = () => {
  return (
    <div>
      <Headers></Headers>
      <Oneimg></Oneimg>
      <div>
        <p style={{ textAlign: "center" }}>
          Explore a world of travel with Expedia
        </p>
      </div>
    </div>
  );
};