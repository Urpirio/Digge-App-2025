import { Stack } from "expo-router";

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
        <Stack.Screen name="SubScreens/ChatBotSoporte" options={{}} />
        <Stack.Screen
          name="Mod/Modal_EnviarUbicacion"
          options={{
            presentation: "transparentModal",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="Mod/Modal_InfoReporte"
          options={{
            animation: "slide_from_bottom",
            presentation: "containedTransparentModal",
          }}
        />
        <Stack.Screen
          name="ScreensMap/ScreenMap_Navegacion"
          options={{
            animation: "slide_from_bottom",
            presentation: "formSheet",
          }}
        />
        <Stack.Screen
          name="ScreensMap/ScreenMap_ReportesAverias"
          options={{
            presentation: "formSheet",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen name="ScreensMap/ScreenMap_Denuncias" options={{
          presentation:'formSheet',
          animation:'slide_from_bottom'
        }}/>
      </Stack>
  );
}
