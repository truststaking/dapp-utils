//#region comopnents
import Trim from "components/Trim";
import Denominate from "components/Denominate";
import UsdValue from "components/UsdValue";
export const Ui = { UsdValue, Trim, Denominate };
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

//#region helpers
import usdValue from "./helpers/usdValue";
export const helpers = {
  usdValue,
};
//#endregion

//#region validation
import stringIsInteger from "./validation/stringIsInteger";
import stringIsFloat from "./validation/stringIsFloat";
export const validation = { stringIsInteger, stringIsFloat };
//#endregion
