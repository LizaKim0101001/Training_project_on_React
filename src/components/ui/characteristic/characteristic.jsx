import React from "react";
import { Bold, Normal } from "../properties/styled";

function Characteristic({ characteristics }) {
  return (
    <>
      <div>
        {characteristics.map((characteristic) => (
          <div key={characteristic.id}>
            <Bold>{characteristic.strong}</Bold>
            <Normal>{characteristic.text}</Normal>
          </div>
        ))}
      </div>
    </>
  );
}

export default Characteristic;
