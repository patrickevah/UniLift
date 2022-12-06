import React from "react";
import { Header } from "../Header/Header";
import { Oneimg } from "./Oneimg";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <Oneimg></Oneimg>
      <div>
        <p style={{ textAlign: "center" }}>
          Explore a world of travel with Expedia
        </p>
      </div>
    </div>
  );
};