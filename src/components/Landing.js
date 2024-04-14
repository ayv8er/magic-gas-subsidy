import { useEffect } from "react";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { useAuthContext } from "../AuthProvider";
import { magic, landing, logInHeader, protectedRoute } from "../codeBlocks";
import "./Landing.css";

function Landing() {
  const { checkAuth } = useAuthContext();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="landing-container">
      <div className="landing">
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
            Create{" "}
            <a
              href="https://magic.link/docs/auth/api-reference/client-side-sdks/web#constructor-NaN"
              target="_blank"
              rel="noreferrer"
            >
              Magic
            </a>{" "}
            configured to Polygon Amoy Testnet and export{" "}
            <a
              href="https://docs.ethers.org/v6/api/providers/#BrowserProvider"
              target="_blank"
              rel="noreferrer"
            >
              Ethers Provider
            </a>{" "}
          </li>
          <br />
          <CodeBlock text={magic} language="javascript" theme={atomOneDark} />
          <br />
          <li>
            Check auth by calling Magic{" "}
            <a
              href="https://magic.link/docs/auth/api-reference/client-side-sdks/web#user-module"
              target="_blank"
              rel="noreferrer"
            >
              User Module methods
            </a>{" "}
            in useEffect
          </li>
          <br />
          <CodeBlock text={landing} language="javascript" theme={atomOneDark} />
          <br />
          <li>
            Header - Trigger Magic{" "}
            <a
              href="https://magic.link/docs/connect/wallet-api-reference/javascript-client-sdk#connectwithui()"
              target="_blank"
              rel="noreferrer"
            >
              connectWithUI
            </a>{" "}
            flow
          </li>
          <br />
          <CodeBlock
            text={logInHeader}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>"/dashboard" route wrapped in ProtectedRoute</li>
          <br />
          <CodeBlock
            text={protectedRoute}
            language="javascript"
            theme={atomOneDark}
          />
        </ul>
      </div>
    </div>
  );
}

export default Landing;
