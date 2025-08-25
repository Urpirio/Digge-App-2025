import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Dispatch, SetStateAction } from "react";

interface Tools {
  InputEmail: string | undefined;
  InputPassA: string | undefined;
  InputPassB: string | undefined;
  Inputcedula: string | undefined;
  setInputEmail: Dispatch<SetStateAction<string | undefined>>;
  setInputPassA: Dispatch<SetStateAction<string | undefined>>;
  setInputPassB: Dispatch<SetStateAction<string | undefined>>;
  setInputcedula: Dispatch<SetStateAction<string | undefined>>;
  IconPass_A: boolean;
  IconPass_B: boolean;
  setIconPass_A: Dispatch<SetStateAction<boolean>>;
  setIconPass_B: Dispatch<SetStateAction<boolean>>;
  BtnPass_A: any;
  BtnPass_B: any;
  ErrorCedula: boolean;
  Email_Valido: boolean;
  Pass_NoIgual: boolean;
}

export default function Section_Form1({
  InputEmail,
  InputPassA,
  InputPassB,
  Inputcedula,
  setInputEmail,
  setInputPassA,
  setInputPassB,
  setInputcedula,
  IconPass_A,
  IconPass_B,
  BtnPass_A,
  BtnPass_B,
  setIconPass_A,
  setIconPass_B,
  ErrorCedula,
  Email_Valido,
  Pass_NoIgual,
}: Tools) {
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <View style={{ gap: 10 }}>
        <View
          style={{
            backgroundColor: Email_Valido ?  "#d0000057" : "#e9e9e97e",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 5,
             height:55
          }}
        >
          <TextInput
            value={InputEmail}
            onChangeText={setInputEmail}
            placeholder="Correo electrónico "
            placeholderTextColor={Email_Valido ? "red" : "#adb5bd"}
            style={{
              fontSize: 16,
              width: "100%",
              color: Email_Valido ? "red" : "",
            }}
          />
        </View>
        {Email_Valido && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Email no valido
          </Text>
        )}
      </View>
      <View style={{ gap: 10 }}>
        <View
          style={{
            backgroundColor: ErrorCedula ? "#d0000057" : "#e9e9e97e",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            padding: 5,
            height:55
          }}
        >
          <TextInput
            value={Inputcedula}
            onChangeText={setInputcedula}
            placeholder="Cedula"
            placeholderTextColor={ErrorCedula ? "red" : "#adb5bd"}
            style={{
              fontSize: 16,
              width: "100%",
              color: ErrorCedula ? "red" : "",
            }}
          />
        </View>
        {ErrorCedula && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Cedula no valida
          </Text>
        )}
      </View>
      <View
        style={{
          backgroundColor: Pass_NoIgual ?  "#d0000057" : "#e9e9e97e",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          padding: 5,
           height:55
        }}
      >
        <TextInput
          value={InputPassA}
          onChangeText={setInputPassA}
          showSoftInputOnFocus
          secureTextEntry={IconPass_A}
          placeholder="Contraseña"
          placeholderTextColor={Pass_NoIgual ? "red" : "#adb5bd"}
          style={{
            fontSize: 16,
            width: "92%",
            color: Pass_NoIgual ? "red" : "",
          }}
        />
        <TouchableOpacity onPress={() => setIconPass_A(!IconPass_A)}>
          <BtnPass_A />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            backgroundColor: Pass_NoIgual ?  "#d0000057" : "#e9e9e97e",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 10,
            alignItems: "center",
            padding: 5,
             height:55
          }}
        >
          <TextInput
            value={InputPassB}
            onChangeText={setInputPassB}
            showSoftInputOnFocus
            secureTextEntry={IconPass_B}
            placeholder="Contraseña"
            placeholderTextColor={Pass_NoIgual ? "red" : "#adb5bd"}
            style={{
              fontSize: 16,
              width: "92%",
              color: Pass_NoIgual ? "red" : "",
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setIconPass_B(!IconPass_B);
            }}
          >
            <BtnPass_B />
          </TouchableOpacity>
        </View>
        {Pass_NoIgual && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Cedula no valida
          </Text>
        )}
      </View>
    </View>
  );
}
