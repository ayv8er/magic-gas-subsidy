import { CodeBlock, atomOneDark } from "react-code-blocks";
import { logOutHeader, logout } from "../utils/codeBlocks";
import "./Dashboard.css";

function Dashboard() {
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
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
