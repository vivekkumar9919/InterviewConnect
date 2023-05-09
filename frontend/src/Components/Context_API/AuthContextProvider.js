// AuthContextProvider.js
import React, { useState ,useEffect } from 'react';
import AuthContext from './AuthContex';
import Cookies from 'js-cookie';

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const cookieValue = Cookies.get('authToken');
    if (cookieValue) {
      setAccessToken(cookieValue);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    setAccessToken(token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    Cookies.remove('authToken');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout ,accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
