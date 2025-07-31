import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { router } from "expo-router";
import { TouchableOpacity, Text,View } from "react-native";
import { useLocalizacion } from "@/Components/Components_Globales/hooks/useLocalizacion";
import { setDataLocalizacion } from "@/Components/Components_DenunciarConductor/Components/Section_Formulario";
import Feather from "@expo/vector-icons/Feather";

export default function Modal_MapDenuncias() {
  const {
    ConseguirUbicacion,
    AgregarMarker,
    GeoMarker,
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
        style={{ height: "94%", width: "100%" }}
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
