import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "modal",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
