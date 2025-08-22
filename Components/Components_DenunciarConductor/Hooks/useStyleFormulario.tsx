import { useState } from "react";
import { ActivityIndicator, View ,Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const useStyleFormulario = () => {
  const [CargandoDenuncia, setCargandoDenuncia] = useState<boolean>(false);

  const BtnEnviarDenuncia = () => {
    switch (CargandoDenuncia) {
      case true:
        return <ActivityIndicator size={"small"} color={"white"} />;
      case false:
        return (
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5}}>
            <Ionicons name="warning-outline" size={20} color="white" />
            <Text style={{ fontSize: 16, color: "white", fontWeight: "500" }}>
              Enviar denuncia
            </Text>
          </View>
        );
    }
  };

  return {
    CargandoDenuncia,
    setCargandoDenuncia,
    BtnEnviarDenuncia,
  };
};
