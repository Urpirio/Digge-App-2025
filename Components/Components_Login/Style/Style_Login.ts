import { StyleSheet } from "react-native";

export const Style_Login = StyleSheet.create({
  container_principal: {
    position: "absolute",
    height: "100%",
    width: "100%",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 20,
  },
  btnVolver: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "100%",
    padding: 5,
    backgroundColor: "#0F539C",
  },
  container_logo: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 10,
  },
  btn_iniciarSession_CuentaUnica: {
    alignItems: "center",
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#ced4da",
  },
  barraSeparadora: {
    borderWidth: 0.8,
    width: "100%",
    borderStyle: "dashed",
    borderColor: "#ced4da",
  },
  container_inputs: {
    backgroundColor: "#e9e9e97e",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
  },
  container_btnIniciarSesion: {
    flexDirection: "row-reverse",
    width: "100%",
    gap: 5,
    justifyContent: "space-between",
  },
  btn_IniciarSesion: {
    padding: 12,
    backgroundColor: "#0F539C",
    borderRadius: 10,
    width: "83%",
    alignItems:"center"
  },
  btn_IniciarSesionHuella: {
    padding: 12,
    backgroundColor: "#0F539C",
    borderRadius: 10,
    alignItems: "center",
  },
  LinkRecuperarCuenta: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#0F539C",
  },
});
