import MapView, { Marker, Polyline } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalizacion } from "@/Components/Components_Globales/hooks/useLocalizacion";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import { TouchableOpacity, View, Image } from "react-native";
import { router } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useReportes } from "@/Components/Components_MapNavegacion/Hooks/useReportes";
import Feather from "@expo/vector-icons/Feather";

export default function Modal_MapNavegacion() {
  const { ConseguirUbicacion } = useLocalizacion();
  const {
    CategoriaMarker,
    StatusNav,
    setStatusNav,
    ButtonNavegacion,
    DataPoints,
  } = useReportes();

  useFocusEffect(
    useCallback(() => {
      ConseguirUbicacion();
      ButtonNavegacion();
    }, [StatusNav])
  );

  return (
    <SafeAreaProvider
      style={{
        justifyContent: "flex-end",
      }}
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
        onMarkerSelect={(D) => {
          console.log(D);
        }}
        onKmlReady={(event) => {
          const {} = event.nativeEvent;
        }}
        onPoiClick={(event) => {
          const { coordinate, name, placeId, position } = event.nativeEvent;
          console.log(coordinate);
          console.log(name);
          console.log(placeId);
          console.log(position);
        }}
        showsBuildings={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        showsTraffic={true}
        style={{ height: "94%", width: "100%" }}
      >
        {/* Aqui tengo que agregar un Hook para que en base a los estados de la navegacion cambien los marcadores tambien */}
        {DataPoints?.map(
          (D: {
            Status: string;
            Descripcion: string;
            Titulo: string;
            Imagen: any;
            longitud: any;
            latitud: any;
          }) => {
            return (
              <Marker
                icon={CategoriaMarker({ Status: D.Status })}
                onPress={() =>
                  router.navigate({
                    pathname: "/Mod/Modal_InfoReporte",
                    params: {
                      Descripcion: D.Descripcion,
                      Titulo: D.Titulo,
                      Image: D.Imagen,
                    },
                  })
                }
                coordinate={{ longitude: D.longitud, latitude: D.latitud }}
              />
            );
          }
        )}
      </MapView>
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          padding: 30,
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{
            height: 55,
            width: 55,
            borderRadius: "100%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#dee2e6",
            boxShadow: "0px 0px 10px 0px #acacac37 ",
          }}
        >
          <View
            style={{
              borderRadius: "100%",
              padding: 5,
              backgroundColor: "#0F539C",
            }}
          >
            <Feather name="arrow-left" size={28} color="#f8f9faa7" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            paddingHorizontal: 5,
            paddingVertical: 5,
            flexDirection: "row",
            borderRadius: 60,
            justifyContent: "space-between",
            gap: 10,
            borderColor: "#dee2e6",
            boxShadow: "0px 0px 10px 0px #acacac37 ",
          }}
        >
          <TouchableOpacity
            onPress={() => setStatusNav("Reportes")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              backgroundColor: StatusNav == "Reportes" ? "#0F539C" : "white",
            }}
          >
            <AntDesign
              name="warning"
              size={24}
              color={StatusNav == "Reportes" ? "white" : "#0F539C"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatusNav("Navegar")}
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              backgroundColor: StatusNav == "Navegar" ? "#0F539C" : "white",
            }}
          >
            <FontAwesome5
              name="map-marked-alt"
              size={24}
              color={StatusNav == "Navegar" ? "white" : "#0F539C"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
