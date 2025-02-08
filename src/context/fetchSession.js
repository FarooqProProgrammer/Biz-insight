// providers/SessionProvider.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';  // Your Appwrite account instance
import { useRouter } from 'next/router';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the current session when the app initializes


  const router = useRouter();

  useEffect(() => {
    // Redirect to home page if the user is already logged in
    if (session) {
      router.push('/'); // Redirect to homepage or dashboard
    }
  }, [session, router]);

  


  useEffect(() => {
    const fetchSession = async () => {
      try {
        const currentSession = await account.getSession('current');
        setSession(currentSession);
      } catch (error) {
        console.error('No session found', error);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await account.createEmailPasswordSession(email, password);
      setSession(response);
      return response;
    } catch (error) {
      console.error('Login failed', error);
      return null;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setSession(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <SessionContext.Provider value={{ session, loading, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to access session context
export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
