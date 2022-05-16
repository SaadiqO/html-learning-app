import React, { useContext, useEffect, useState } from "react";
import { auth } from "../database/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function loggedIn(currentUser) {
    return currentUser.onAuthStateChanged(currentUser);
  }

  useEffect(() => {
    const unsubsscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
      setLoading(false);
    });

    return unsubsscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    loggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
