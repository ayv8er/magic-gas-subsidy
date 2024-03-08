import { Magic } from "magic-sdk";
import { ethers } from "ethers";

export const magic = new Magic("pk_live_0F9911410C7C95A2", {
  network: {
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    chainId: 80001,
  },
});

export const provider = new ethers.BrowserProvider(magic.rpcProvider);
