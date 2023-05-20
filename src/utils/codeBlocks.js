export const index = `import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </Router>
);`;

export const magic = `import { Magic } from "magic-sdk";

export const magic = new Magic(
    "{MAGIC_PUBLISHABLE_API_KEY}",
    {
        network: "goerli",
    }
);`;

export const landing = `const checkAuth = async () => {
    const boolean = await magic.user.isLoggedIn();
    if (boolean) {
        const did = await magic.user.getIdToken();
        setToken(did);
        navigate("/dashboard", { replace: true });
    }
};`;

export const logInHeader = `const handleLogin = async () => {
    const did = await magic.wallet.connectWithUI();
    if (did) {
        setToken(did);
        navigate("/dashboard", { replace: true });
    }
};`;

export const protectedRoute = `import { Navigate } from "react-router-dom";
import { useAuthContext } from "../store/auth-context";

const ProtectedRoute = ({ children }) => {
    const { token } = useAuthContext();

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
};`;

export const logOutHeader = `import { magic } from "../libs/magic";
import { useAuthContext } from "../store/auth-context";

function Header() {
    const { logout } = useAuthContext();
        
    const handleShowUI = async () => {
        await magic.wallet.showUI().on("disconnect", () => {
            logout();
        });
    };
        
    return (
        <header>
            <div onClick={handleShowUI}>
                Wallet
            </div>
        </header>
    );
};`;

export const logout = `const logout = async () => {
    await magic.user.logout();
    setToken(null);
};`;

export const personalSign = `const handlePersonalSign = async () => {
    const signedMessage = await web3.eth.personal.sign(message, publicAddress);
    console.log(signedMessage);
};
`;
