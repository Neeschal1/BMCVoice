import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Home screen → no header */}
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      {/* Details screen → header visible */}
      <Stack.Screen
        name="details"
        options={{ title: "Details" }}
      />
    </Stack>
  );
}
