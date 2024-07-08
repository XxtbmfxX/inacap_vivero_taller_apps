import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { StyleSheet, View, Alert } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useAuth } from "../../context/AuthContext";
import { router } from "expo-router";
import { ScrollView } from "react-native";


/**
 * Componente Account para la gestión del perfil del usuario, incluyendo la actualización del nombre de usuario y la contraseña.
 *
 * @componente
 * @returns {JSX.Element} El componente renderizado.
 *
 * @función getProfile
 * Obtiene el perfil del usuario desde la base de datos.
 *
 * @función updateProfile
 * Actualiza el perfil del usuario en la base de datos.
 *
 * @función changePassword
 * Cambia la contraseña del usuario.
 *
 * @función useEffect
 * Obtiene el perfil del usuario al montar el componente.
 */

export default function Account() {
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const { session, manageLogout, setSession } = useAuth();

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("usuario")
        .select(`username`)
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No hay sesión de usuario!");

      const updates = {
        id: session?.user.id,
        username,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("usuario").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function changePassword() {
    if (newPassword !== confirmPassword) {
      Alert.alert("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw error;
      }

      Alert.alert("Contraseña actualizada con éxito");
      setNewPassword("");
      setConfirmPassword("");
      setSession(null)
      router.navigate("/")

    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input label="Email" value={session?.user?.email} disabled />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Nombre de usuario"
          value={username || ""}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Input
          label="Nueva Contraseña"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Confirmar Nueva Contraseña"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? "Cargando ..." : "Actualizar"}
          onPress={() => updateProfile({ username })}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button
          title={loading ? "Cargando ..." : "Cambiar Contraseña"}
          onPress={changePassword}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button title="Cerrar Sesión" onPress={manageLogout} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
