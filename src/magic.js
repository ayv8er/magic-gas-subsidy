import { Magic } from "magic-sdk";
import { ethers } from "ethers";

export const magic = new Magic("pk_live_139ADD6252C60267", {
  network: {
    rpcUrl:
      "https://polygon-amoy.g.alchemy.com/v2/aVD2xdLOLQ1KXmT8IAvEC6_UbJ7m_wOS",
    chainId: 80002,
  },
});

export const provider = new ethers.BrowserProvider(magic.rpcProvider);
