import { Dispatch, SetStateAction } from "react";
import { View, TextInput } from "react-native";

interface Tools {
  InputNumero1: string | undefined;
  InputNumero2: string | undefined;
  setInputNumero1: Dispatch<SetStateAction<string | undefined>>;
  setInputNumero2: Dispatch<SetStateAction<string | undefined>>;
}

export default function Section_Form2({
  InputNumero1,
  InputNumero2,
  setInputNumero1,
  setInputNumero2,
}: Tools) {
  return (
    <View style={{ justifyContent: "center", gap: 10 }}>
      <View
        style={{
          backgroundColor: "#e9e9e97e",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          padding: 5,
          height: 55,
        }}
      >
        <TextInput
          value={InputNumero1}
          onChangeText={setInputNumero1}
          placeholder="Numero de telefono "
          placeholderTextColor={"#adb5bd"}
          style={{
            fontSize: 16,
            width: "100%",
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#e9e9e97e",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          padding: 5,
          height: 55,
        }}
      >
        <TextInput
          value={InputNumero2}
          onChangeText={setInputNumero2}
          placeholder="Numero de telefono"
          placeholderTextColor={"#adb5bd"}
          style={{
            fontSize: 16,
            width: "100%",
          }}
        />
      </View>
    </View>
  );
}
