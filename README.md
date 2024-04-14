[Deployed Demo App](https://magic-gasless-subsidy.vercel.app)

[Polygon Amoy smart contract](https://www.oklink.com/amoy/address/0xb7a854c1ebc50ce9085f64fe90f993375d398fdc/contract)

[Documentation](https://magic.link/docs/wallets/enterprise-features/gas-subsidy)

# Summary

Magic email OTP login on Polygon Amoy. Subsidize gas cost for user to update number on deployed smart contract.

# Pre-requisite

1. Create Magic account
2. Have feature enabled
3. Implement ERC-2771 standard into smart contract
4. Register smart contract
   ![Screenshot 2024-03-07 at 7 17 52 PM](https://github.com/ayv8er/magic-gasless-subsidy/assets/84942969/d88ea1b4-d2b4-4c7a-a28b-d88ec6e3374e)

# Relevant Magic Code

- Import and instantiate Magic

```javascript
import { Magic } from "magic-sdk";

const magic = new Magic(<MAGIC_PUBLISHABLE_API_KEY>, {
  network: {
    rpcUrl: "https://rpc-amoy.polygon.technology/",
    chainId: 80002,
  },
});
```

- Display Magic login component

```javascript
const login = async () => {
  const did = await magic.wallet.connectWithUI();
  if (did) {
    navigate("/dashboard", { replace: true });
  }
};
```

- Get current number from smart contract

```javascript
const handleRefreshNumber = async () => {
  const currentNumber = await UpdateInstance.getNumber();
  setCurrentNumber(ethers.formatUnits(currentNumber, 0));
};
```

- Update number on smart contract

```javascript
const handleUpdateCall = async () => {
  if (!number) {
    alert("Please enter a number");
  }
  const transaction = await UpdateInstance.updateNumber.populateTransaction(
    number
  );
  const gaslessRequest = await magic.wallet.sendGaslessTransaction(
    publicAddress,
    transaction
  );
  setNumber("");
};
```
