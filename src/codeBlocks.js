export const magic = `import { Magic } from "magic-sdk";
import { ethers } from 'ethers'

export const magic = new Magic(<YOUR_MAGIC_API_KEY", {
    network: {
      rpcUrl: 'https://rpc-mumbai.maticvigil.com',
      chainId: 80001,
    }
  });
  
export const provider = new ethers.BrowserProvider(magic.rpcProvider);`;

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

export const logOutHeader = `import { magic } from "../magic";

function Header() {
    const handleShowUI = async () => {
        await magic.wallet.showUI().on("disconnect", () => {
            logout();
        });
    };

    const logout = async () => {
        await magic.user.logout();
        setToken(null);
    };
        
    return (
        <header>
            <div onClick={handleShowUI}>
                Wallet
            </div>
        </header>
    );
};`;

export const updateNumber = `const transaction = await UpdateInstance.updateNumber.populateTransaction(
    number
  );

  const gaslessRequest = await magic.wallet.sendGaslessTransaction(
    publicAddress,
    transaction
  );
};
`;

export const refreshNumber = `const currentNumber = await UpdateInstance.getNumber();
setCurrentNumber(ethers.formatUnits(currentNumber, 0));`;
