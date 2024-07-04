import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Auth from "../components/Auth";
import Bodega from "../components/laBodega/Bodega";
import { View } from "react-native";

import { useAuth } from "../context/AuthContext";

export default function App() {
  const { session, setSession } = useAuth();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      {session != null && session.user ? (
        <Bodega key={session.user.id} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
