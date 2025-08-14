import { useState } from "react";
import * as location from "expo-location";
import { router } from "expo-router";

export const useLocalizacion = () => {
  const [GeoMarker, setGeoMarker] = useState<any | null>([]);
  const [UbicacionUsuario, setUbicacionUsuario] = useState<{
    longitude: number;
    latitude: number;
  }>({
    longitude: 18.6,
    latitude: -69.6,
  });

  const AgregarMarker = (E: { event: any }) => {
    const { coordinate } = E.event.nativeEvent;
    setGeoMarker([
      ...GeoMarker,
      {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      },
    ]);
  };

  const ConseguirUbicacion = async () => {
    const { status } = await location.requestForegroundPermissionsAsync();
    const usuario_ubicacion = await location.getCurrentPositionAsync();
    const { longitude, latitude } = usuario_ubicacion.coords;
    setUbicacionUsuario({ latitude: latitude, longitude: longitude });

    if (status == "denied") {
      router.back();
    }
  };

  const EliminarMarker = (L: { la: any; long: any }) => {
    const DataPuntos = Array();
    GeoMarker?.forEach((D: { latitude: any }) => {
      if (D.latitude != L.la) {
        DataPuntos.push(D);
      }
    });
    setGeoMarker(DataPuntos);
  };

  return {
    ConseguirUbicacion,
    AgregarMarker,
    GeoMarker,
    setGeoMarker,
    EliminarMarker,
    UbicacionUsuario,
    setUbicacionUsuario,
  };
};
