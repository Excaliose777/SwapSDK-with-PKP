import { Interface } from "@ethersproject/abi";

const iface = new Interface([
  "function approve(address,uint256)",
]);

export function generateApproveCalldata (
  spender,
  tokenId
  ) {
  return iface.encodeFunctionData("approve", [
    spender,
    tokenId,
  ]);
}
