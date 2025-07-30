import { router } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setDataLocalizacion } from "@/Components/Components_ReportarAveria/Components/Section_Formulario";
import { useLocalizacion } from "@/Components/Components_Globales/hooks/useLocalizacion";

export default function Modal_MapReportesAverias() {
  const {
    ConseguirUbicacion,
    AgregarMarker,
    GeoMarker,
    setGeoMarker,
    EliminarMarker,
  } = useLocalizacion();

  useEffect(() => {
    ConseguirUbicacion();
  });

  useEffect(() => {
    setDataLocalizacion(GeoMarker);
  }, [GeoMarker]);

  return (
    <SafeAreaProvider
      style={{ alignItems: "center", justifyContent: "flex-end" }}
    >
      <MapView
        showsMyLocationButton={true}
        showsUserLocation={true}
        style={{ width: "100%", height: "100%" }}
        onLongPress={(event) => AgregarMarker({ event: event })}
        showsBuildings={true}
        moveOnMarkerPress={true}
      >
        {GeoMarker?.map((D: { latitude: any; longitude: any }) => {
          return (
            <Marker
              onPress={() =>
                EliminarMarker({ la: D.latitude, long: D.longitude })
              }
              coordinate={{ latitude: D.latitude, longitude: D.longitude }}
            />
          );
        })}
      </MapView>
      <TouchableOpacity
        onPress={() => router.back()}
        disabled={GeoMarker.length > 0 ? false : true}
        style={{
          position: "absolute",
          padding: 15,
          width: "80%",
          marginBottom: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: GeoMarker.length > 0 ? "#0f539ced" : "#6c6c6c7e",
          boxShadow: "0px 0px 10px 0px #f8f9fa41",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>
          Guardar Ubicaciones
        </Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
