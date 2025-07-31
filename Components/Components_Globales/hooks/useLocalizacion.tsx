import { useState } from "react";
import * as location from "expo-location";
import { router } from "expo-router";

export const useLocalizacion = () => {
  const [GeoMarker, setGeoMarker] = useState<any | null>([]);

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
    if (status == "denied") {
      router.back();
    };
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
  };
};
