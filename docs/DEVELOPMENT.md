# Guía de Desarrollo

Esta guía proporciona información detallada para desarrolladores que trabajan en DIGGEAPP.

## Tabla de Contenidos

- [Configuración Inicial](#configuración-inicial)
- [Estructura de Código](#estructura-de-código)
- [Desarrollo de Features](#desarrollo-de-features)
- [Debugging](#debugging)
- [Testing](#testing)
- [Best Practices](#best-practices)

## Configuración Inicial

### 1. Requisitos del Sistema

```bash
# Verificar versiones
node --version    # v18.0.0 o superior
npm --version     # 9.0.0 o superior
```

### 2. Instalación de Expo CLI

```bash
npm install -g expo-cli
```

### 3. Configuración del Proyecto

```bash
# Clonar repositorio
git clone https://github.com/Urpirio/Digge-App-2025.git
cd Digge-App-2025

# Instalar dependencias
npm install

# Iniciar desarrollo
npm start
```

### 4. Configuración de Android Studio

1. Descargar e instalar [Android Studio](https://developer.android.com/studio)
2. Instalar Android SDK y emulador
3. Configurar variables de entorno:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 5. Configuración de Xcode (macOS)

1. Instalar Xcode desde App Store
2. Instalar Command Line Tools:
```bash
xcode-select --install
```
3. Instalar CocoaPods:
```bash
sudo gem install cocoapods
```

## Estructura de Código

### Crear un Nuevo Feature

#### 1. Crear la Pantalla

```typescript
// app/SubScreens/ScreenMiFeature.tsx
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ScreenMiFeature() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Mi Feature</Text>
      </View>
    </SafeAreaProvider>
  );
}
```

#### 2. Crear Componentes

```typescript
// Components/Components_MiFeature/Components/Section_Main.tsx
import { View, Text } from 'react-native';
import { useMiFeature } from '../Hooks/useMiFeature';

export default function Section_Main() {
  const { data, loading } = useMiFeature();
  
  if (loading) return <Text>Cargando...</Text>;
  
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
}
```

#### 3. Crear Hook Personalizado

```typescript
// Components/Components_MiFeature/Hooks/useMiFeature.tsx
import { useState, useEffect } from 'react';

export const useMiFeature = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      // Lógica de fetch
      const response = await fetch('...');
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return { data, loading, fetchData };
};
```

#### 4. Crear Estilos

```typescript
// Components/Components_MiFeature/Style/Style_MiFeature.tsx
import { StyleSheet } from 'react-native';

export const Style_MiFeature = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0F539C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### Navegación entre Pantallas

#### Navegación Simple

```typescript
import { router } from 'expo-router';

// Navegar a una pantalla
const handlePress = () => {
  router.navigate('/SubScreens/ScreenPerfil');
};
```

#### Pasar Parámetros

```typescript
// Enviar parámetros
router.navigate({
  pathname: '/SubScreens/ScreenDetalles',
  params: { id: '123', tipo: 'vehiculo' }
});

// Recibir parámetros
import { useLocalSearchParams } from 'expo-router';

export default function ScreenDetalles() {
  const { id, tipo } = useLocalSearchParams();
  // usar id y tipo
}
```

### Trabajar con Formularios

```typescript
import { useState } from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';

export default function FormExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    if (!email || !password) {
      alert('Todos los campos son requeridos');
      return;
    }
    // Enviar datos
  };
  
  return (
    <>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </>
  );
}
```

### Trabajar con AsyncStorage

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar datos
const saveData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error guardando datos:', error);
  }
};

// Leer datos
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error leyendo datos:', error);
    return null;
  }
};

// Eliminar datos
const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error eliminando datos:', error);
  }
};
```

### Trabajar con Mapas

```typescript
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function MapExample() {
  const [region, setRegion] = useState({
    latitude: 18.4861,
    longitude: -69.9312,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={region}
      onRegionChangeComplete={setRegion}
    >
      <Marker
        coordinate={{ latitude: 18.4861, longitude: -69.9312 }}
        title="Santo Domingo"
        description="Capital de República Dominicana"
      />
    </MapView>
  );
}
```

### Trabajar con Cámara

```typescript
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';

export default function CameraExample() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  
  if (!permission?.granted) {
    return (
      <TouchableOpacity onPress={requestPermission}>
        <Text>Solicitar permiso de cámara</Text>
      </TouchableOpacity>
    );
  }
  
  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log('Foto tomada:', photo.uri);
    }
  };
  
  return (
    <CameraView
      ref={setCameraRef}
      style={{ flex: 1 }}
      facing="back"
    />
  );
}
```

## Debugging

### Console Logs

```typescript
// En desarrollo
console.log('Datos:', data);
console.error('Error:', error);
console.warn('Advertencia:', warning);

// Para producción, remover todos los console.logs
```

### React DevTools

1. Instalar extensión de React DevTools
2. Ejecutar con modo debug:
```bash
npm start
# Presionar 'j' para abrir debugger
```

### Expo Dev Tools

```bash
npm start
# Presionar 'd' para abrir developer menu en el dispositivo
```

### Debugging con VS Code

Crear `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to packager",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "attach"
    }
  ]
}
```

## Testing

### Configuración de Jest

El proyecto ya tiene Jest configurado:

```json
{
  "jest": {
    "preset": "jest-expo"
  }
}
```

### Crear Tests

```typescript
// __tests__/MyComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import MyComponent from '../Components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello')).toBeTruthy();
  });
});
```

### Ejecutar Tests

```bash
npm test
```

## Best Practices

### 1. Manejo de Errores

```typescript
const fetchData = async () => {
  try {
    const response = await fetch('...');
    if (!response.ok) throw new Error('Error en la petición');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    // Mostrar mensaje al usuario
    alert('Ocurrió un error. Por favor intenta de nuevo.');
    return null;
  }
};
```

### 2. Validación de Datos

```typescript
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateForm = () => {
  if (!email) {
    alert('El email es requerido');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Email inválido');
    return false;
  }
  return true;
};
```

### 3. Optimización de Rendimiento

```typescript
import { useCallback, useMemo } from 'react';

// Memoizar funciones
const handlePress = useCallback(() => {
  // lógica
}, [dependencies]);

// Memoizar cálculos costosos
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

### 4. Listas Largas

```typescript
import { FlatList } from 'react-native';

<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ItemCard item={item} />}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={10}
/>
```

### 5. Limpieza de Efectos

```typescript
useEffect(() => {
  const subscription = someObservable.subscribe();
  
  return () => {
    // Limpieza
    subscription.unsubscribe();
  };
}, []);
```

### 6. TypeScript

```typescript
// Definir interfaces
interface User {
  id: string;
  nombres: string;
  apellidos: string;
  email: string;
}

// Tipar componentes
interface Props {
  user: User;
  onPress: () => void;
}

const UserCard: React.FC<Props> = ({ user, onPress }) => {
  // ...
};
```

## Comandos Útiles

```bash
# Limpiar cache
npm start -- --clear

# Instalar una dependencia
npm install nombre-paquete

# Actualizar dependencias
npm update

# Ver bundle size
npm run build -- --analyze

# Generar APK de prueba
eas build -p android --profile preview
```

## Recursos Adicionales

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/)

---

¿Necesitas ayuda? Consulta el chatbot de soporte en la app o contacta al equipo de desarrollo.
