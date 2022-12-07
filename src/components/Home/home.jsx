import React from "react";
import { Headers } from "../Header/Headers";
import { Oneimg } from "./Oneimg";
import { StaysInput } from "../StaysInput/StaysInput";



export const Home = () => {
  return (
    <div>
      <Headers></Headers>
      <StaysInput></StaysInput>
      <Oneimg></Oneimg>
    </div>    
    
  );
};