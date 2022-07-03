// import React from "react";
import ReactDOM from "react-dom";
import pi from "./math.js"; // this syntax imports ONLY the 'default' export
import PIE from "./math.js"; // import name does NOT matter (ONLY for the default export as there can
import PI, { doublePi, triplePi } from "./math.js";

import * as PIII from "./math";
console.log(PIII);

var React = require("react"); // pretty much the SAME as the 1st line (except this is for when using Node.js)
// ONLY be 1 default export) + (needs to be at the LAST line if used in combination with the above import statements)

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{PIE}</li>
    {/* <li>{doublePi}</li> // WRONG Syntax !!! (WHY ????) */}
    <li>{doublePi()}</li> {/* CORRECT Syntax (WHY ?????) */}
    <li>{triplePi()}</li>
    <li>{PIII.default}</li>
    <li>{PIII.doublePi()}</li>
    <li>{PIII.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

// NOTES:
/* 'import/ expoert's are present in ES6 which is used by approx 80% people whereas
 'require's are present in NOdeJS. So 'import/ export' code may not work in some cases.

 Advantage of 'import/ export': They help to modularize our code into smaller, more manageable pieces.
*/
