import { useEffect } from "react";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { useAuthContext } from "../store/auth-context";
import {
  index,
  magic,
  landing,
  logInHeader,
  protectedRoute,
} from "../utils/codeBlocks";
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
          <li>Wrap application in React Context Provider</li>
          <br />
          <CodeBlock
            className="code-block"
            text={index}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>
            Instantiate{" "}
            <a
              href="https://magic.link/docs/auth/api-reference/client-side-sdks/web#constructor-NaN"
              target="_blank"
              rel="noreferrer"
            >
              Magic
            </a>{" "}
            configured to Goerli
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
              href="https://magic.link/docs/auth/api-reference/client-side-sdks/web#loginwithemailotp"
              target="_blank"
              rel="noreferrer"
            >
              loginWithEmailOTP
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
