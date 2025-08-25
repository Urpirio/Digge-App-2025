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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ScreenL/ScreenRegistrar"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SubScreens/ChatBotSoporte" options={{}} />
      <Stack.Screen
        name="Mod/Modal_EnviarUbicacion"
        options={{
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_InfoReporte"
        options={{
          animation: "fade",
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
      <Stack.Screen
        name="ScreensMap/ScreenMap_Denuncias"
        options={{
          presentation: "formSheet",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_Ruta"
        options={{
          animation: "fade",
          presentation: "containedTransparentModal",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_InfoLugarRuta"
        options={{
          animation: "fade",
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_EditarPerfil"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_CerrarSession"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_ReportarAgente"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_RetenidoNoEncontrado"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_DatosEnviados"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Mod/Modal_CambiarPrincipalVehiculo"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
    </Stack>
  );
}
