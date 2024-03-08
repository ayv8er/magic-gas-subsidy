import { magic } from "../magic";
import { useAuthContext } from "../AuthProvider";
import "./Header.css";

function Header() {
  const { token, login, logout } = useAuthContext();

  const handleLogin = async () => {
    await login();
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
          <div className="nav-wallet" onClick={handleLogin}>
            Login
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
