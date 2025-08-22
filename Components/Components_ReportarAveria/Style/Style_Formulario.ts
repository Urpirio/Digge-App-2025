import { StyleSheet } from "react-native";

export const Style_Formulario = StyleSheet.create({
  Container_picker: {
    borderWidth: 1,
    borderColor: "#D1D0D0",
    backgroundColor: "#efeded44",
    justifyContent: "center",
    borderRadius: 10,
  },
  SubConteiner_General: {
    gap: 10,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    // borderColor: "#ced4da",
    backgroundColor: "white",
    // boxShadow: "0px 0px 10px 0px #ced4da35",
  },
  BtnUbicacion: {
    borderWidth: 1,
    borderColor: "#D1D0D0",
    backgroundColor: "#efeded44",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 10,
    borderRadius: 10,
  },
  Text_Input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D1D0D0",
    backgroundColor: "#efeded44",
    height: 55,
    fontSize: 16,
  },
  BtnEnviarReporte: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    backgroundColor: "#0F539C",
  },
});
