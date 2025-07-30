import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { useLocalizacion } from "@/Components/Components_Globales/hooks/useLocalizacion";
import { setDataLocalizacion } from "@/Components/Components_DenunciarConductor/Components/Section_Formulario";

export default function Modal_MapDenuncias() {
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
      style={{ justifyContent: "flex-end", alignItems: "center" }}
    >
      <MapView
        style={{ height: "100%", width: "100%" }}
        showsBuildings={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        moveOnMarkerPress={true}
        onLongPress={(event) => AgregarMarker({ event: event })}
      >
        {GeoMarker?.map((D: { longitude: any; latitude: any }) => {
          return (
            <Marker
              onPress={() =>
                EliminarMarker({ la: D.latitude, long: D.longitude })
              }
              coordinate={{ longitude: D.longitude, latitude: D.latitude }}
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
