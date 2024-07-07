// context/AuthContext.js
import { supabase } from '@/lib/supabase';
import { router } from 'expo-router';
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [session, setSession] = useState(null);

  const manageLogout = () => {
    supabase.auth.signOut()
    router.push("/")
  };

  return (
    <AuthContext.Provider value={{ session, setSession, manageLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
