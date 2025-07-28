import MapView from "expo-maps";

import { Platform, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Modal_MapReportesAverias() {
  if (Platform.OS == "android") {
    return <MapView.GoogleMaps.View style={{ flex: 1 }} />;
  } else if (Platform.OS == "ios") {
    return <MapView.AppleMaps.View style={{ flex: 1 }} />;
  } else {
    return (
      <SafeAreaProvider>
        <Text>Funciona</Text>
      </SafeAreaProvider>
    );
  }
}
