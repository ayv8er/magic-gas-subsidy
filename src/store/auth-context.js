import { createContext, useContext, useState, useCallback } from "react";
import { magic } from "../libs/magic";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [publicAddress, setPublicAddress] = useState(null);
  const navigate = useNavigate();

  const getPublicAddress = async () => {
    const metadata = await magic.user.getMetadata();
    const address = metadata.publicAddress;
    setPublicAddress(address);
  };

  const checkAuth = useCallback(async () => {
    const boolean = await magic.user.isLoggedIn();
    if (boolean) {
      const did = await magic.user.getIdToken();
      setToken(did);
      await getPublicAddress();
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const login = async () => {
    const did = await magic.wallet.connectWithUI();
    if (did) {
      setToken(did);
      await getPublicAddress();
      navigate("/dashboard", { replace: true });
    }
  };

  const logout = async () => {
    await magic.user.logout();
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        publicAddress,
        checkAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
