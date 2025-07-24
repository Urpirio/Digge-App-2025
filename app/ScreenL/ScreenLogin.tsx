import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image, View ,Text, TextInput, TouchableOpacity} from "react-native";

export default function ScreenLogin() {
  return (
    <SafeAreaProvider>
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        source={require("../../Assets/Backgrounds/Pagina de bienvenida.png")}
      />
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ objectFit: "contain", height: 100, width: 100 }}
            source={require("../../Assets/Image/Logo.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Inicia sesión en tu cuenta
          </Text>
        </View>
        <View>
          <TextInput/>
          <TextInput/>
          <TouchableOpacity>
            <Text>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
