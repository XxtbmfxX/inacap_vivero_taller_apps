import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Auth from "../components/Auth";
import Bodega from "../components/laBodega/Bodega";
import { View } from "react-native";

import { useAuth } from "../context/AuthContext";

/**
 * Componente principal de la aplicación que maneja la autenticación y la navegación entre los componentes Auth y Bodega.
 *
 * @componente
 * @ejemplo
 * return (
 *   <App />
 * )
 *
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función useEffect
 * Obtiene la sesión actual del usuario y escucha los cambios en el estado de autenticación.
 */

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
