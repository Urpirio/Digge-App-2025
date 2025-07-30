import { Alert } from "react-native";
import { setDataDeFotos, DataDeFotos } from "../Components/Section_Formulario";

export const useEliminarImg = () => {
  const AlertEliminarImg = (T: { ImageTrirada: string }) => {
    Alert.alert(
      "¿Está seguro de que quiere eliminar la imagen?",
      "Esto es para validar la eliminación de la imagen.",
      [
        {
          text: "SI",
          onPress: () => {
            const NewD = Array();
            DataDeFotos?.forEach((D: { ImageTrirada: string }) => {
              if (D.ImageTrirada != T.ImageTrirada) {
                NewD.push(D);
              }
            });

            setDataDeFotos(NewD);

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
