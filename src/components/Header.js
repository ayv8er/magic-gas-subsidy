import { useState } from "react";
import { magic } from "../libs/magic";
import { useAuthContext } from "../store/auth-context";
import "./Header.css";

function Header() {
  const [email, setEmail] = useState("");
  const { token, isLoading, login, logout } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmail("");
    await login(email);
  };

  const handleShowUI = async () => {
    await magic.wallet.showUI().on("disconnect", () => {
      logout();
    });
  };

  return (
    <div className="nav-container">
      <header className="nav-bar">
        <a
          className="nav-logo"
          href="https://magic.link/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/magic-logo.png"
            alt="magic logo"
            width="130px"
            height="50px"
          />
        </a>
        {token ? (
          <div className="nav-wallet" onClick={handleShowUI}>
            Wallet
          </div>
        ) : (
          <div className="nav-login">
            <label>Login:</label>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button disabled={isLoading}>Submit</button>
            </form>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
