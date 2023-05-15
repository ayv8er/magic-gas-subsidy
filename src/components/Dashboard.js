import { useState } from "react";
import { web3 } from "../libs/web3";
import { useAuthContext } from "../store/auth-context";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { logOutHeader, logout, personalSign } from "../utils/codeBlocks";
import "./Dashboard.css";

function Dashboard() {
  const [message, setMessage] = useState("");
  const { publicAddress } = useAuthContext();

  const handlePersonalSign = async () => {
    const signedMessage = await web3.eth.personal.sign(message, publicAddress);
    console.log(signedMessage);
    setMessage("");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h2>
          React App (Magic Auth + Wallet UI){" - "}
          <a
            href="https://github.com/ayv8er/ma-with-wallet-ui"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </h2>
        <ul>
          <li>Header - Render Magic Wallet UI</li>
          <br />
          <CodeBlock
            text={logOutHeader}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>
            Trigger{" "}
            <a
              href="https://magic.link/docs/auth/api-reference/client-side-sdks/web#logout"
              target="_blank"
              rel="noreferrer"
            >
              logout
            </a>{" "}
            in Wallet UI
          </li>
          <br />
          <CodeBlock text={logout} language="javascript" theme={atomOneDark} />
          <br />
          <li>
            Trigger Wallet UI signing modal{" - "}
            <a
              href="https://web3js.readthedocs.io/en/v1.10.0/web3-eth-personal.html#sign"
              target="_blank"
              rel="noreferrer"
            >
              Personal Sign
            </a>
          </li>
          <br />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handlePersonalSign}>Sign</button>
          <br />
          <br />
          <CodeBlock
            text={personalSign}
            language="javascript"
            theme={atomOneDark}
          />
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
