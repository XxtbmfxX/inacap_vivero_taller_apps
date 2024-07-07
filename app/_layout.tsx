import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { ItemsProvider } from "../context/ItemsContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ItemsProvider>
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
      </ItemsProvider>
    </AuthProvider>
  );
}
