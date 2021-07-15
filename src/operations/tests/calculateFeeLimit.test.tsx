import calculateFeeLimit from "./../calculateFeeLimit";
describe("calculateFeeLimit tests", () => {
  it(`computes correct fee`, () => {
    const feeLimit = calculateFeeLimit({
      minGasLimit: "50000",
      gasLimit: "62000",
      gasPrice: "1000000000",
      data: "testdata",
      chainId: "T",
      gasPerDataByte: "1500",
      gasPriceModifier: "0.01",
    });
    expect(feeLimit).toBe("62000000000000");
  });
});
