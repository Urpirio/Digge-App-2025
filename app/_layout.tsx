import { Stack } from "expo-router";
import { View } from "react-native";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          animation: "simple_push",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ScreenL/ScreenLogin"
        options={{
          animation: "fade",
          presentation: "formSheet",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ScreenL/ScreenRegistrar"
        options={{
          animation: "fade",
          presentation: "formSheet",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SubScreens/ChatBotSoporte"
        options={{
          
        }}
      />
      <Stack.Screen name="Mod/Modal_MapReportesAverias" options={{
        presentation:'transparentModal',
        animation:'slide_from_bottom'
      }}/>
      <Stack.Screen name="Mod/Modal_EnviarUbicacion" options={{
        presentation: 'transparentModal',
        animation:'slide_from_bottom'
      }}/>
      <Stack.Screen name="Mod/Modal_MapReportes" options={{
        presentation:'transparentModal',
        animation:'slide_from_bottom',
        animationDuration:300
      }} />
      <Stack.Screen name="Mod/Modal_InfoReporte" options={{
        animation:'slide_from_bottom',
        presentation:'containedTransparentModal',
        // sheetAllowedDetents:'fitToContents',
        sheetExpandsWhenScrolledToEdge:true,
        sheetGrabberVisible:true
      }}/>
    </Stack>
  );
}
