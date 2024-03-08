import { createContext, useContext, useState, useCallback } from "react";
import { magic } from "./magic";
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
    const metadata = await magic.user.getInfo();
    const address = metadata.publicAddress;
    setPublicAddress(address);
  };

  const checkAuth = useCallback(async () => {
    try {
      const boolean = await magic.user.isLoggedIn();
      if (boolean) {
        const did = await magic.user.getIdToken();
        setToken(did);
        await getPublicAddress();
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  }, [navigate]);

  const login = async () => {
    try {
      const did = await magic.wallet.connectWithUI();
      if (did) {
        setToken(did);
        await getPublicAddress();
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await magic.user.logout();
      setToken(null);
    } catch (err) {
      console.log(err);
    }
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
