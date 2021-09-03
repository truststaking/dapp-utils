//#region comopnents
import Trim from "components/Trim";
import Denominate from "components/Denominate";
export const Ui = { Trim, Denominate };
//#endregion

//#region operations
import denominate from "./operations/denominate";
import nominate from "./operations/nominate";
import getTokenFromData from "./operations/getTokenFromData";
import calculateFeeLimit from "./operations/calculateFeeLimit";
export const operations = {
  denominate,
  nominate,
  getTokenFromData,
  calculateFeeLimit,
};
//#endregion

//#region operations
import stringIsInteger from "./validation/stringIsInteger";
import stringIsFloat from "./validation/stringIsFloat";
export const validation = { stringIsInteger, stringIsFloat };
//#endregion
