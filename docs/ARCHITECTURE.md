# Arquitectura de DIGGEAPP

## Visión General

DIGGEAPP está construida usando una arquitectura basada en componentes con React Native y Expo, siguiendo principios de separación de responsabilidades y reutilización de código.

## Stack Tecnológico

### Core
- **React Native 0.79.5:** Framework principal para desarrollo móvil multiplataforma
- **Expo 53.0.22:** Conjunto de herramientas y servicios para React Native
- **TypeScript 5.8.3:** Superset de JavaScript con tipado estático

### Navegación
- **Expo Router 5.1.5:** Sistema de navegación basado en archivos
- **React Navigation 7.1.6:** Biblioteca de navegación subyacente

### UI/UX
- **NativeWind 4.1.23:** TailwindCSS para React Native
- **React Native Elements:** Biblioteca de componentes UI
- **React Native Reanimated 3.17.4:** Animaciones de alto rendimiento
- **Expo Blur:** Efectos de desenfoque

### Mapas y Ubicación
- **Expo Maps 0.11.0:** Componentes de mapas
- **React Native Maps 1.20.1:** Integración de mapas nativos
- **Expo Location 18.1.6:** API de geolocalización

### Multimedia
- **Expo Camera 16.1.11:** Acceso a la cámara del dispositivo
- **Expo Video 2.2.2:** Reproducción de video

### Autenticación y Seguridad
- **Expo Local Authentication 16.0.5:** Autenticación biométrica
- **Expo Auth Session 6.2.1:** Flujos de autenticación OAuth
- **Expo Crypto 14.1.5:** Operaciones criptográficas

### Almacenamiento
- **Async Storage 2.1.2:** Almacenamiento persistente local

### IA y Servicios
- **Google Generative AI 1.11.0:** Integración con modelos de IA de Google

## Estructura del Proyecto

### 1. Capa de Presentación (app/)

La carpeta `app/` contiene todas las pantallas y la lógica de navegación usando el sistema de routing basado en archivos de Expo Router.

```
app/
├── Screens/           # Pantallas principales (pestañas)
├── SubScreens/        # Pantallas secundarias
├── ScreenL/           # Pantallas de login/auth
├── ScreensMap/        # Pantallas con mapas
├── Mod/               # Modales globales
├── _layout.tsx        # Layout raíz
└── index.tsx          # Pantalla de bienvenida
```

#### Pantallas Principales (Tabs)
- **AScreenHome:** Dashboard principal
- **BScreenVehiculos:** Gestión de vehículos
- **DScreenDenuncias:** Sistema de denuncias
- **PScreenPagos:** Gestión de pagos
- **ScreenEmergencia:** Servicios de emergencia

### 2. Capa de Componentes (Components/)

Los componentes están organizados por funcionalidad/pantalla, siguiendo el patrón:

```
Components/
└── Components_[FeatureName]/
    ├── Components/        # Componentes UI de la feature
    │   └── Section_*.tsx
    ├── SubComponents/     # Componentes más pequeños
    │   └── Card_*.tsx
    ├── Hooks/            # Lógica de negocio
    │   └── use*.tsx
    └── Style/            # Estilos específicos
        └── Style_*.tsx
```

#### Nomenclatura:
- **Section_**: Secciones principales de una pantalla
- **Card_**: Componentes tipo tarjeta
- **use**: Custom hooks para lógica reutilizable

### 3. Capa de Lógica (Hooks)

Los hooks personalizados encapsulan la lógica de negocio, efectos secundarios y estado:

```typescript
// Ejemplo de estructura de hook
export const useFeature = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    setLoading(true);
    // lógica...
    setLoading(false);
  };
  
  return { data, loading, fetchData };
};
```

### 4. Capa de Recursos (Assets/)

```
Assets/
├── Image/         # Imágenes y logos
└── Backgrounds/   # Fondos e imágenes de fondo
```

## Patrones de Diseño

### 1. Componentes Funcionales con Hooks

Todos los componentes usan la API de Hooks de React:

```typescript
export default function MyScreen() {
  const { data } = useCustomHook();
  
  return (
    <SafeAreaProvider>
      <View>
        {/* contenido */}
      </View>
    </SafeAreaProvider>
  );
}
```

### 2. Separación de Responsabilidades

- **Componentes:** Solo presentación UI
- **Hooks:** Lógica de negocio y estado
- **Estilos:** Separados en archivos Style_*

### 3. Composición de Componentes

Las pantallas se componen de secciones más pequeñas:

```typescript
export default function ScreenHome() {
  return (
    <SafeAreaProvider>
      <Section_User />
      <ScrollView>
        <Section_AccionesRapidas />
        <Section_ResumenActividad />
        <Section_Actualidad />
      </ScrollView>
    </SafeAreaProvider>
  );
}
```

## Flujo de Navegación

### Sistema de Routing

Expo Router usa un sistema basado en archivos similar a Next.js:

```
app/
├── index.tsx                    → /
├── _layout.tsx                  → Layout raíz
├── Screens/
│   └── _layout.tsx              → Layout de tabs
│       ├── AScreenHome.tsx      → /Screens/AScreenHome
│       └── BScreenVehiculos.tsx → /Screens/BScreenVehiculos
└── SubScreens/
    └── ScreenPerfil.tsx         → /SubScreens/ScreenPerfil
```

### Navegación Programática

```typescript
import { router } from 'expo-router';

// Navegar a una pantalla
router.navigate('/Screens/AScreenHome');

// Volver atrás
router.back();

// Reemplazar la pantalla actual
router.replace('/ScreenL/ScreenLogin');
```

## Gestión de Estado

### Estado Local
Se usa `useState` para estado de componente:

```typescript
const [inputEmail, setInputEmail] = useState('');
```

### Estado Global
Se usa Async Storage para persistencia:

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar
await AsyncStorage.setItem('userData', JSON.stringify(data));

// Leer
const data = await AsyncStorage.getItem('userData');
```

## Estilización

### StyleSheet Nativo

```typescript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
```

### NativeWind (TailwindCSS)

```typescript
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold">Título</Text>
</View>
```

## Seguridad

### Autenticación Biométrica

```typescript
import * as LocalAuthentication from 'expo-local-authentication';

const authenticate = async () => {
  const result = await LocalAuthentication.authenticateAsync();
  if (result.success) {
    // Usuario autenticado
  }
};
```

### Permisos

Los permisos se configuran en `app.json`:

```json
{
  "plugins": [
    ["expo-camera", {
      "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera"
    }],
    ["expo-location", {
      "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
    }]
  ]
}
```

## Optimizaciones

### 1. Lazy Loading
- Componentes pesados se cargan solo cuando son necesarios
- Imágenes se optimizan con `objectFit: 'contain'`

### 2. Memoización
- Uso de `useCallback` para funciones que se pasan como props
- Uso de `useMemo` para cálculos costosos

### 3. SafeAreaProvider
- Todas las pantallas usan `SafeAreaProvider` para evitar solapamiento con áreas del sistema

## Build y Deployment

### Desarrollo Local
```bash
npm start         # Inicia Metro bundler
npm run android   # Build para Android
npm run ios       # Build para iOS
```

### EAS Build (Producción)
```bash
npm run build     # Build preview para Android
```

Configuración en `eas.json`:
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

## Consideraciones de Rendimiento

1. **Optimización de Imágenes:** Usar tamaños apropiados
2. **Virtualización de Listas:** Usar FlatList para listas largas
3. **Evitar Re-renders:** Memoización apropiada
4. **Gestión de Memoria:** Limpiar listeners en useEffect

## Escalabilidad

La arquitectura actual permite:
- Agregar nuevas features con mínimo impacto
- Reutilizar componentes y lógica
- Mantener código organizado y predecible
- Escalar el equipo de desarrollo

## Próximos Pasos

- Implementar testing más robusto
- Agregar manejo de errores centralizado
- Implementar sistema de caché
- Optimizar bundle size
