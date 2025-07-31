import { Stack } from "expo-router";
import { View } from "react-native";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="ScreenAgregarVehiculos"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenCamaraFotos"
        options={{
          header: () => {
            return <View style={{ height: 30, backgroundColor: "#0F539C" }} />;
          },
        }}
      />
      <Stack.Screen 
        name="ScreenCamaraVideo" 
        options={{
          header: () => {
            return <View style={{ height: 30, backgroundColor: "#0F539C" }} />;
          },
        }}
      />
      <Stack.Screen
        name="ScreenReportarAveria"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenChatBotSoporte"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenDenunciarConductor"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenDetallesVehiculos"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenTraffiPuntos"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenNotificaciones"
        options={{ headerShown: false }}
      />
      
    </Stack>
  );
}
