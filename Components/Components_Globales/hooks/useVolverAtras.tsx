import { Alert } from "react-native";
import { router } from "expo-router";

export const useVolverAtras = () => {
    const AlertVolver = () =>{
        Alert.alert(
              "¿Seguro que quieres salir?",
              "Esto es para garantizar que estás seguro de que quieres salir del formulario iniciado.",
              [
                {
                  text: "si",
                  onPress: () => {
                   router.back();
                  },
                  style: "default",
                },
                {
                  text: "no",
                  onPress: () => {},
                  style: "cancel",
                },
              ],
              {
                cancelable: true,
              }
            );
    };

    return{
        AlertVolver
    }
};
