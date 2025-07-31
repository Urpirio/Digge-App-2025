import { router } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setDataLocalizacion } from "@/Components/Components_ReportarAveria/Components/Section_Formulario";
import { useLocalizacion } from "@/Components/Components_Globales/hooks/useLocalizacion";
import Feather from "@expo/vector-icons/Feather";

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
      <View
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#0F539C",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            height: 10,
            width: 50,
            backgroundColor: "#e9ecefa1",
            borderRadius: 10,
          }}
        ></View>
      </View>
      <MapView
        showsMyLocationButton={true}
        showsUserLocation={true}
        style={{ width: "100%", height: "94%" }}
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
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          padding: 10,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            padding: 10,
            backgroundColor: "#0F539C",
            borderRadius: 30,
          }}
        >
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.back()}
          disabled={GeoMarker.length > 0 ? false : true}
          style={{
            padding: 15,
            width: "80%",
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
      </View>
    </SafeAreaProvider>
  );
}
