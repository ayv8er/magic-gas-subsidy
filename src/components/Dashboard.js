import { useEffect, useState } from "react";
import { magic } from "../magic";
import { ethers } from "ethers";
import { UpdateInstance } from "../Contract/ContractInstance";
import { useAuthContext } from "../AuthProvider";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { logOutHeader, updateNumber, refreshNumber } from "../codeBlocks";
import "./Dashboard.css";

function Dashboard() {
  const [number, setNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const { publicAddress } = useAuthContext();

  const handleRefreshNumber = async () => {
    try {
      const currentNumber = await UpdateInstance.getNumber();
      setCurrentNumber(ethers.formatUnits(currentNumber, 0));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleRefreshNumber();
  }, []);

  const handleUpdateCall = async () => {
    try {
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
      console.log("request_id", gaslessRequest);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h2>
          Magic Gasless Subsidy Demo{" - "}
          <a
            href="https://github.com/ayv8er/magic-gasless-subsidy/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </h2>
        <ul>
          <li>
            Get current number via{" "}
            <a
              href="https://mumbai.polygonscan.com/address/0xb7a854c1ebc50ce9085f64fe90f993375d398fdc#code"
              target="_blank"
              rel="noreferrer"
            >
              getNumber method
            </a>
            {"."}
          </li>
          <br />
          <div className="button-container">
            Current Number is {currentNumber}
            <button onClick={handleRefreshNumber}>Refresh</button>
          </div>
          <br />
          <CodeBlock
            text={refreshNumber}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>
            Update number via{" "}
            <a
              href="https://mumbai.polygonscan.com/address/0xb7a854c1ebc50ce9085f64fe90f993375d398fdc#code"
              target="_blank"
              rel="noreferrer"
            >
              updateNumber method
            </a>
            {"."}
          </li>
          <br />
          <div className="button-container">
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={handleUpdateCall}>Update</button>
          </div>
          <br />
          <CodeBlock
            text={updateNumber}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>Display Widget UI Wallet - Logout Function</li>
          <br />
          <CodeBlock
            text={logOutHeader}
            language="javascript"
            theme={atomOneDark}
          />
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
