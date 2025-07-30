import { useState } from "react";
import { PermissionsAndroid } from "react-native";
import * as Location from "expo-location";
import { getCurrentPositionAsync } from "expo-location";
import { GoogleMaps } from "expo-maps";


export const useFormulario = () => {
  const [DropDownValue, setDropDownValue] = useState<string>();
  const [InputCarriles, setInputCarriles] = useState<string>();
  const [TextTareaDescripcion, setTextTareaDescripcion] = useState<string>();
  const [Photos, setPhotos] = useState<any>();
  const [Videos, setVideos] = useState<any>();
  const [Localizacion, setLocalizacion] = useState<string | null>(
    "Ubicación actaul (GPS)"
  );

  return {
    DropDownValue,
    setDropDownValue,
    InputCarriles,
    setInputCarriles,
    TextTareaDescripcion,
    setTextTareaDescripcion,
    Photos,
    setPhotos,
    Videos,
    setVideos,
    Localizacion,
    setLocalizacion,
  };
};
