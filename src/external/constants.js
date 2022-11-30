/// An object to store commonly used DEX contract addresses. 
/// Will be added to as more integrations are added.
const mainnetAddresses = {
  "uniswap": {
    "v3": {
      "SwapRouter": "0xE592427A0AEce92De3Edee1F18E0157C05861564",
      "SwapRouter02": "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      "NonfungiblePositionManager": "0xC36442b4a4522E871399CD717aBDD847Ab11FE88" // Router address for NFTs
    }
  },
  // "pancakeswap": {
  //   "v2": {
  //     "PancakeRouter": "0xEfF92A263d31888d860bD50809A8D171709b7b1c"
  //   }
  // }
}

const celoAddresses = {
  "uniswap": {
    "v3": {
      "SwapRouter02": "0x5615CDAb10dc425a742d643d949a7F474C01abc4"
    }
  }
}

export const addresses = {
  "mainnet": mainnetAddresses,
  "celo": celoAddresses
}
