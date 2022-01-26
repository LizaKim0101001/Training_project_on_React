import React from "react";
import { Bold, Normal } from "./styled";

export default function Properties({ properties }) {
  return (
    <div>
      {properties.map((properti) => (
        <div key={properti.id}>
          <Bold>{properti.strong} </Bold>
          <Normal>{properti.text} </Normal>
        </div>
      ))}
    </div>
  );
}
