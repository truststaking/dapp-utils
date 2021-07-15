import {
  Transaction,
  Nonce,
  Balance,
  GasPrice,
  GasLimit,
  TransactionPayload,
  ChainID,
  TransactionVersion,
  Address,
  NetworkConfig,
  GasPriceModifier,
} from "@elrondnetwork/erdjs";

import { stringIsInteger } from "validation";
import stringIsFloat from "validation/stringIsFloat";
interface CalculateFeeLimitType {
  minGasLimit: string;
  gasLimit: string;
  gasPrice: string;
  data: string;
  gasPerDataByte: string;
  gasPriceModifier: string;
  chainId: string;
}
const placeholderData = {
  from: "erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",
  to: "erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",
};
export default function calculateFeeLimit({
  minGasLimit,
  gasLimit,
  gasPrice,
  data: inputData,
  gasPerDataByte,
  gasPriceModifier,
  chainId,
}: CalculateFeeLimitType) {
  const data = inputData || "";
  if (!stringIsInteger(gasLimit) && !stringIsFloat(gasPrice)) {
    throw new Error("Invalid gasLimit or gasPrice");
  }

  const transaction = new Transaction({
    nonce: new Nonce(0),
    value: Balance.Zero(),
    receiver: new Address(placeholderData.to),
    gasPrice: new GasPrice(parseInt(gasPrice)),
    gasLimit: new GasLimit(parseInt(gasLimit)),
    data: new TransactionPayload(data.trim()),
    chainID: new ChainID(chainId),
    version: new TransactionVersion(1),
  });

  if (
    !stringIsInteger(gasPerDataByte) &&
    !stringIsFloat(gasPriceModifier) &&
    !stringIsInteger(minGasLimit)
  ) {
    throw new Error("Invalid gasPerDataByte, gasPriceModifier or minGasLimit");
  }

  const networkConfig = new NetworkConfig();
  networkConfig.MinGasLimit = new GasLimit(parseInt(minGasLimit));

  networkConfig.GasPerDataByte = parseInt(gasPerDataByte);
  networkConfig.GasPriceModifier = new GasPriceModifier(
    parseFloat(gasPriceModifier)
  );
  try {
    const bNfee = transaction.computeFee(networkConfig);
    const fee = bNfee.toString(10);
    return fee;
  } catch (err) {
    console.log(err);
    return "0";
  }
}
