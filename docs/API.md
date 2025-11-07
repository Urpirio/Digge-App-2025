# API Reference

Esta documentación describe las APIs y servicios utilizados en DIGGEAPP.

## Tabla de Contenidos

- [Servicios Externos](#servicios-externos)
- [Endpoints del Backend](#endpoints-del-backend)
- [Modelos de Datos](#modelos-de-datos)
- [Hooks Personalizados](#hooks-personalizados)

## Servicios Externos

### Google Maps API

**Configuración:** `app.json`

```json
{
  "android": {
    "config": {
      "googleMaps": {
        "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
      }
    }
  }
}
```

**Uso:**

```typescript
import MapView, { Marker } from 'react-native-maps';

<MapView
  style={{ flex: 1 }}
  initialRegion={{
    latitude: 18.4861,
    longitude: -69.9312,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  <Marker
    coordinate={{ latitude: 18.4861, longitude: -69.9312 }}
    title="Ubicación"
  />
</MapView>
```

### Google Generative AI

**Paquete:** `@google/genai`

**Uso para Chatbot:**

```typescript
import { GoogleGenerativeAI } from '@google/genai';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const chat = model.startChat({
  history: [],
});

const result = await chat.sendMessage(message);
const response = result.response.text();
```

## Endpoints del Backend

> Nota: Los endpoints exactos dependen de la configuración del backend. Esta es una referencia de los datos que se manejan.

### Autenticación

#### POST `/auth/login`

Iniciar sesión de usuario.

**Request:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "nombres": "Juan",
    "apellidos": "Pérez",
    "cedula": "001-1234567-8",
    "email": "usuario@ejemplo.com",
    "foto_perfil": "url_foto"
  },
  "token": "jwt_token"
}
```

#### POST `/auth/register`

Registrar nuevo usuario.

**Request:**
```json
{
  "nombres": "Juan",
  "apellidos": "Pérez",
  "cedula": "001-1234567-8",
  "email": "usuario@ejemplo.com",
  "password": "password123",
  "telefono": "809-123-4567"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "user_id": "user_id"
}
```

#### POST `/auth/recover-password`

Recuperar contraseña.

**Request:**
```json
{
  "email": "usuario@ejemplo.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Correo de recuperación enviado"
}
```

### Usuarios

#### GET `/users/:userId`

Obtener datos del usuario.

**Response:**
```json
{
  "id": "user_id",
  "nombres": "Juan",
  "apellidos": "Pérez",
  "cedula": "001-1234567-8",
  "email": "usuario@ejemplo.com",
  "telefono": "809-123-4567",
  "foto_perfil": "url_foto",
  "fecha_registro": "2025-01-01T00:00:00Z"
}
```

#### PUT `/users/:userId`

Actualizar perfil de usuario.

**Request:**
```json
{
  "nombres": "Juan Carlos",
  "apellidos": "Pérez García",
  "telefono": "809-987-6543",
  "foto_perfil": "base64_image"
}
```

### Vehículos

#### GET `/vehicles/user/:userId`

Obtener vehículos del usuario.

**Response:**
```json
{
  "vehicles": [
    {
      "id": "vehicle_id",
      "placa": "A123456",
      "marca": "Toyota",
      "modelo": "Corolla",
      "año": 2020,
      "color": "Blanco",
      "tipo": "Sedán",
      "es_principal": true,
      "foto": "url_foto"
    }
  ]
}
```

#### POST `/vehicles`

Agregar nuevo vehículo.

**Request:**
```json
{
  "user_id": "user_id",
  "placa": "A123456",
  "marca": "Toyota",
  "modelo": "Corolla",
  "año": 2020,
  "color": "Blanco",
  "tipo": "Sedán"
}
```

#### GET `/vehicles/:vehicleId/retenido`

Verificar si un vehículo está retenido.

**Response:**
```json
{
  "retenido": true,
  "razon": "Multas pendientes",
  "ubicacion": "Dirección del depósito",
  "fecha_retencion": "2025-01-15T10:30:00Z",
  "monto_liberacion": 5000.00
}
```

### Denuncias

#### GET `/denuncias/user/:userId`

Obtener denuncias del usuario.

**Response:**
```json
{
  "denuncias": [
    {
      "id": "denuncia_id",
      "tipo": "Conducción peligrosa",
      "descripcion": "Conductor excediendo velocidad",
      "ubicacion": {
        "latitude": 18.4861,
        "longitude": -69.9312
      },
      "fecha": "2025-01-20T14:30:00Z",
      "estado": "En revisión",
      "fotos": ["url_foto1", "url_foto2"],
      "placa_vehiculo": "B987654"
    }
  ]
}
```

#### POST `/denuncias`

Crear nueva denuncia.

**Request:**
```json
{
  "user_id": "user_id",
  "tipo": "Conducción peligrosa",
  "descripcion": "Descripción detallada",
  "ubicacion": {
    "latitude": 18.4861,
    "longitude": -69.9312
  },
  "fotos": ["base64_image1", "base64_image2"],
  "placa_vehiculo": "B987654"
}
```

### Reportes de Averías

#### GET `/reportes/averias`

Obtener reportes de averías activos.

**Response:**
```json
{
  "reportes": [
    {
      "id": "reporte_id",
      "tipo": "Bache",
      "descripcion": "Bache grande en la vía",
      "ubicacion": {
        "latitude": 18.4861,
        "longitude": -69.9312
      },
      "fecha": "2025-01-20T10:00:00Z",
      "estado": "Activo",
      "fotos": ["url_foto"]
    }
  ]
}
```

#### POST `/reportes/averias`

Reportar avería.

**Request:**
```json
{
  "user_id": "user_id",
  "tipo": "Bache",
  "descripcion": "Descripción detallada",
  "ubicacion": {
    "latitude": 18.4861,
    "longitude": -69.9312
  },
  "fotos": ["base64_image"]
}
```

### Pagos

#### GET `/pagos/user/:userId`

Obtener historial de pagos.

**Response:**
```json
{
  "pagos": [
    {
      "id": "pago_id",
      "concepto": "Multa de tránsito",
      "monto": 2500.00,
      "fecha": "2025-01-15T09:00:00Z",
      "metodo_pago": "Tarjeta",
      "estado": "Completado"
    }
  ]
}
```

#### GET `/multas/pendientes/:userId`

Obtener multas pendientes.

**Response:**
```json
{
  "multas": [
    {
      "id": "multa_id",
      "descripcion": "Exceso de velocidad",
      "monto": 3000.00,
      "fecha_infraccion": "2025-01-10T16:00:00Z",
      "placa": "A123456",
      "estado": "Pendiente"
    }
  ]
}
```

### TraffiPuntos

#### GET `/traffipuntos/:cedula`

Obtener puntos de tráfico del usuario.

**Response:**
```json
{
  "cedula": "001-1234567-8",
  "puntos_actuales": 85,
  "puntos_maximos": 100,
  "historial": [
    {
      "fecha": "2025-01-10T00:00:00Z",
      "puntos": -15,
      "razon": "Exceso de velocidad",
      "ubicacion": "Autopista Duarte"
    }
  ]
}
```

### Notificaciones

#### GET `/notificaciones/user/:userId`

Obtener notificaciones del usuario.

**Response:**
```json
{
  "notificaciones": [
    {
      "id": "notif_id",
      "titulo": "Nueva multa registrada",
      "mensaje": "Se ha registrado una nueva multa...",
      "fecha": "2025-01-20T12:00:00Z",
      "leida": false,
      "tipo": "multa"
    }
  ]
}
```

### Novedades

#### GET `/novedades`

Obtener noticias y actualizaciones.

**Response:**
```json
{
  "novedades": [
    {
      "id": "novedad_id",
      "titulo": "Nuevas medidas de tránsito",
      "descripcion": "Descripción breve",
      "contenido": "Contenido completo de la noticia...",
      "imagen": "url_imagen",
      "fecha": "2025-01-18T00:00:00Z",
      "categoria": "Normativa"
    }
  ]
}
```

## Modelos de Datos

### User

```typescript
interface User {
  id: string;
  nombres: string;
  apellidos: string;
  cedula: string;
  email: string;
  telefono?: string;
  foto_perfil?: string;
  fecha_registro: string;
}
```

### Vehicle

```typescript
interface Vehicle {
  id: string;
  user_id: string;
  placa: string;
  marca: string;
  modelo: string;
  año: number;
  color: string;
  tipo: string;
  es_principal: boolean;
  foto?: string;
}
```

### Denuncia

```typescript
interface Denuncia {
  id: string;
  user_id: string;
  tipo: string;
  descripcion: string;
  ubicacion: {
    latitude: number;
    longitude: number;
  };
  fecha: string;
  estado: 'En revisión' | 'Aprobada' | 'Rechazada' | 'Cerrada';
  fotos: string[];
  placa_vehiculo?: string;
}
```

### ReporteAveria

```typescript
interface ReporteAveria {
  id: string;
  user_id: string;
  tipo: string;
  descripcion: string;
  ubicacion: {
    latitude: number;
    longitude: number;
  };
  fecha: string;
  estado: 'Activo' | 'En reparación' | 'Reparado';
  fotos: string[];
}
```

### Notificacion

```typescript
interface Notificacion {
  id: string;
  user_id: string;
  titulo: string;
  mensaje: string;
  fecha: string;
  leida: boolean;
  tipo: 'multa' | 'denuncia' | 'pago' | 'general';
}
```

## Hooks Personalizados

### useGetHome

Obtiene datos del usuario para la pantalla principal.

```typescript
const { GetDataUser, Datauser } = useGetHome();
```

**Retorna:**
- `GetDataUser`: Función para obtener datos
- `Datauser`: Datos del usuario

### useEnviarDatos (Login)

Maneja el envío de datos de login.

```typescript
const {
  InputEmail,
  setInputEmail,
  InputPass,
  setInputPass,
  BtnIconPass,
  IconPass,
  setIconPass,
  BtnIniciarSesion,
  IniciarSesion
} = useEnviarDatos();
```

### useNavegacion

Maneja la navegación con mapas.

```typescript
const { 
  currentLocation,
  destination,
  setDestination,
  calculateRoute 
} = useNavegacion();
```

### useGetReportes

Obtiene reportes de averías.

```typescript
const { reportes, loading, refresh } = useGetReportes();
```

## Almacenamiento Local

### AsyncStorage Keys

```typescript
// Usuario
const USER_DATA_KEY = 'userData';
const USER_TOKEN_KEY = 'userToken';

// Vehículos
const VEHICLES_KEY = 'userVehicles';
const MAIN_VEHICLE_KEY = 'mainVehicle';

// Configuración
const SETTINGS_KEY = 'appSettings';
const BIOMETRIC_ENABLED_KEY = 'biometricEnabled';
```

### Funciones Helper

```typescript
// Guardar datos de usuario
await AsyncStorage.setItem('userData', JSON.stringify(userData));

// Leer datos de usuario
const userData = await AsyncStorage.getItem('userData');
const user = userData ? JSON.parse(userData) : null;

// Limpiar al cerrar sesión
await AsyncStorage.multiRemove(['userData', 'userToken']);
```

## Códigos de Error

```typescript
enum ErrorCodes {
  NETWORK_ERROR = 'NETWORK_ERROR',
  AUTH_ERROR = 'AUTH_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  PERMISSION_DENIED = 'PERMISSION_DENIED'
}
```

## Manejo de Errores

```typescript
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error:', error);
  // Mostrar mensaje apropiado al usuario
  if (error.message.includes('Network')) {
    alert('Error de conexión. Verifica tu internet.');
  } else {
    alert('Ocurrió un error. Intenta de nuevo.');
  }
  return null;
}
```

---

**Nota:** Esta documentación está sujeta a cambios conforme el proyecto evolucione. Mantener actualizada con cada modificación importante.
