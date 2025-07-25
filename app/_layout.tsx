import { Stack } from "expo-router";


export default function _layout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="index"
        options={{
          animation: "simple_push",
          headerShown:false
        }}
      />

      <Stack.Screen
        name="ScreenL/ScreenLogin"
        options={{
          animation: "fade",
          presentation: "formSheet",
          headerShown:false
        }}
      />
      <Stack.Screen
        name="ScreenL/ScreenRegistrar"
        options={{
          animation: "fade",
          presentation: "formSheet",
          headerShown:false
        }}
      />
    </Stack>
  );
}
