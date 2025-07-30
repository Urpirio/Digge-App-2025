import { Alert } from "react-native";
import {
  setDataDeFotos,
  DataDeFotos,
} from "../../Components_ReportarAveria/Components/Section_Formulario";
import {
  setDataDeFotos1,
  DataDeFotos1,
} from "@/Components/Components_DenunciarConductor/Components/Section_Formulario";

export const useEliminarImg = () => {
  const AlertEliminarImg = (T: { ImageTrirada: string; Status: any }) => {
    Alert.alert(
      "¿Está seguro de que quiere eliminar la imagen?",
      "Esto es para validar la eliminación de la imagen.",
      [
        {
          text: "SI",
          onPress: () => {
            const NewD = Array();
            if (T.Status == "2") {
              DataDeFotos?.forEach((D: { ImageTrirada: string }) => {
                if (D.ImageTrirada != T.ImageTrirada) {
                  NewD.push(D);
                }
              });
              setDataDeFotos(NewD);
            } else if (T.Status == "1") {
              DataDeFotos1?.forEach((D: { ImageTrirada: string }) => {
                if (D.ImageTrirada != T.ImageTrirada) {
                  NewD.push(D);
                }
              });
              setDataDeFotos1(NewD);
            }
          },
        },
        {
          text: "NO",
        },
      ]
    );
  };

  return {
    AlertEliminarImg,
  };
};
