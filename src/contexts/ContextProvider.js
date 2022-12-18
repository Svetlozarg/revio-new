import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

// Create AuthContext
const StateContext = createContext();

// Use Context
export const useAuth = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register Function
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout function
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  useEffect(() => {
    // Unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If user set uid, email, name
      // Else null
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {loading ? null : children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
