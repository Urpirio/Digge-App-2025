import { Text, TextInput, View, } from "react-native";

export default function Form_Part1() {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ gap: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ fontWeight: "500" }}>Nombre del Vehículo</Text>
          <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
            *
          </Text>
        </View>
        <TextInput
          placeholder="Ej: Mi Toyota Corolla"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#d1d0d020",
            borderColor: "#e9ecef",
            height: 55,
            fontSize: 16,
          }}
        />
      </View>

      <View style={{ gap: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ fontWeight: "500" }}>Placa</Text>
          <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
            *
          </Text>
        </View>

        <TextInput
          placeholder="Ej: ABC-123"
          style={{
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#d1d0d020",
            borderColor: "#e9ecef",
            height: 55,
            fontSize: 16,
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontWeight: "500" }}>Marca</Text>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
              *
            </Text>
          </View>
          <TextInput
            placeholder="Ej: Toyota"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#d1d0d020",
              borderColor: "#e9ecef",
              height: 55,
              fontSize: 16,
            }}
          />
        </View>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontWeight: "500" }}>Modelo</Text>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
              *
            </Text>
          </View>

          <TextInput
            placeholder="Ej: Corolla"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#d1d0d020",
              borderColor: "#e9ecef",
              height: 55,
              fontSize: 16,
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontWeight: "500" }}>Año</Text>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
              *
            </Text>
          </View>
          <TextInput
            placeholder="Ej: 2020"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#d1d0d020",
              borderColor: "#e9ecef",
              height: 55,
              fontSize: 16,
            }}
          />
        </View>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontWeight: "500" }}>Color</Text>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
              *
            </Text>
          </View>
          <TextInput
            placeholder="Ej: Blanco"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#d1d0d020",
              borderColor: "#e9ecef",
              height: 55,
              fontSize: 16,
            }}
          />
        </View>
      </View>

      <View>
        <View style={{ width: "100%", gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontWeight: "500" }}>Kilometraje</Text>
            <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>
              *
            </Text>
          </View>
          <TextInput
            placeholder="Ej: 100,000km"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#d1d0d020",
              borderColor: "#e9ecef",
              height: 55,
              fontSize: 16,
            }}
          />
        </View>
      </View>
    </View>
  );
}
