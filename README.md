# DIGGEAPP 2025 🚗

**Tu nueva forma de conectarte con la gestión vial en República Dominicana.**

DIGGEAPP es una aplicación móvil desarrollada con React Native y Expo que facilita la gestión de vehículos, denuncias de tránsito, reportes de averías y servicios de emergencia en República Dominicana.

> **📚 ¿Nuevo en el proyecto?** Consulta la [Guía de Navegación de Documentación](docs/NAVIGATION.md) para encontrar rápidamente lo que necesitas.

## 📱 Características Principales

### 🏠 Pantalla Principal (Home)
- Panel de usuario personalizado
- Acciones rápidas para servicios frecuentes
- Resumen de actividad del usuario
- Sección de novedades y actualidad

### 🚙 Gestión de Vehículos
- Registro y gestión de múltiples vehículos
- Ver detalles completos de cada vehículo
- Cambiar vehículo principal
- Consulta de vehículos retenidos
- Sistema de TraffiPuntos

### 📢 Denuncias y Reportes
- Denunciar conductores infractores
- Reportar averías en la vía
- Visualización de denuncias en mapa
- Seguimiento de reportes realizados

### 🗺️ Navegación y Mapas
- Navegación GPS integrada
- Mapa de denuncias activas
- Mapa de reportes de averías
- Visualización de rutas y ubicaciones

### 🚨 Emergencias
- Contactos de emergencia rápidos
- Acceso directo a servicios de emergencia
- Sistema de notificaciones de emergencia

### 💳 Pagos y Multas
- Gestión de pagos de multas
- Historial de transacciones
- Sistema de pagos integrado

### 👤 Perfil de Usuario
- Edición de datos personales
- Gestión de foto de perfil
- Configuración de la cuenta
- Cerrar sesión

### 💬 Soporte
- Chatbot de soporte integrado con IA
- Sistema de asistencia al usuario

## 🛠️ Tecnologías

- **Framework:** React Native 0.79.5
- **Navegación:** Expo Router 5.1.5
- **UI:** React Native Elements, NativeWind (TailwindCSS)
- **Mapas:** Expo Maps, React Native Maps
- **Cámara:** Expo Camera
- **Autenticación:** Expo Local Authentication, Expo Auth Session
- **IA:** Google Generative AI (@google/genai)
- **Almacenamiento:** Async Storage
- **Animaciones:** React Native Reanimated
- **Lenguaje:** TypeScript 5.8.3

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI
- Android Studio (para desarrollo Android) o Xcode (para desarrollo iOS)
- Cuenta de Expo (opcional, para builds en la nube)

## 🚀 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Urpirio/Digge-App-2025.git
cd Digge-App-2025
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
- El proyecto usa Google Maps API. La clave está configurada en `app.json`
- Para producción, se recomienda usar variables de entorno seguras

## 🏃 Ejecución

### Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en Web
npm run web
```

### Testing

```bash
npm test
```

### Build

```bash
# Build para Android (preview)
npm run build
```

## 📁 Estructura del Proyecto

```
Digge-App-2025/
├── app/                          # Pantallas principales y navegación
│   ├── Screens/                  # Pantallas principales de la app
│   │   ├── AScreenHome.tsx       # Pantalla de inicio
│   │   ├── BScreenVehiculos.tsx  # Gestión de vehículos
│   │   ├── DScreenDenuncias.tsx  # Denuncias
│   │   ├── PScreenPagos.tsx      # Pagos y multas
│   │   └── ScreenEmergencia.tsx  # Emergencias
│   ├── SubScreens/               # Pantallas secundarias
│   ├── ScreenL/                  # Pantallas de login y autenticación
│   ├── ScreensMap/               # Pantallas de mapas
│   ├── Mod/                      # Modales reutilizables
│   ├── _layout.tsx               # Layout principal
│   └── index.tsx                 # Pantalla de bienvenida
├── Components/                   # Componentes organizados por pantalla
│   ├── Components_ScreenHome/
│   ├── Components_Login/
│   ├── Components_Vehiculos/
│   ├── Components_Notificaciones/
│   ├── Components_MapNavegacion/
│   └── ... (más componentes)
├── Assets/                       # Recursos estáticos
│   ├── Image/                    # Imágenes
│   └── Backgrounds/              # Fondos
├── app.json                      # Configuración de Expo
├── eas.json                      # Configuración de EAS Build
├── package.json                  # Dependencias
├── tsconfig.json                 # Configuración de TypeScript
├── README.md                     # Este archivo
├── CONTRIBUTING.md               # Guía para contribuidores
├── CHANGELOG.md                  # Historial de versiones
└── docs/                         # Documentación detallada
    ├── NAVIGATION.md             # Guía de navegación de docs
    ├── ARCHITECTURE.md           # Arquitectura técnica
    ├── DEVELOPMENT.md            # Guía de desarrollo
    ├── API.md                    # Referencia de APIs
    └── DEPLOYMENT.md             # Guía de deployment
```

## 📚 Documentación

- **[Guía de Navegación](docs/NAVIGATION.md)** - Encuentra rápidamente lo que necesitas
- **[Arquitectura](docs/ARCHITECTURE.md)** - Detalles técnicos de la arquitectura
- **[Desarrollo](docs/DEVELOPMENT.md)** - Guía completa para desarrolladores
- **[API Reference](docs/API.md)** - Documentación de APIs y modelos de datos
- **[Deployment](docs/DEPLOYMENT.md)** - Guía para deployar en producción
- **[Contribución](CONTRIBUTING.md)** - Cómo contribuir al proyecto
- **[Changelog](CHANGELOG.md)** - Historial de cambios y versiones

## 🔑 Características Técnicas

### Arquitectura
- **Patrón de diseño:** Componentes funcionales con hooks
- **Gestión de estado:** React Hooks (useState, useEffect, custom hooks)
- **Navegación:** File-based routing con Expo Router
- **Estilos:** StyleSheet nativo + NativeWind (TailwindCSS)

### Seguridad
- Autenticación biométrica (huella digital/Face ID)
- Almacenamiento seguro de credenciales
- Permisos de cámara, ubicación y micrófono

### Permisos Requeridos
- **Ubicación:** Para navegación y mapas
- **Cámara:** Para captura de fotos y videos de denuncias
- **Micrófono:** Para grabación de videos con audio

## 🌐 APIs y Servicios

- **Google Maps API:** Para mapas y navegación
- **Google Generative AI:** Para chatbot de soporte
- **Backend personalizado:** Para gestión de usuarios, vehículos y denuncias

## 📱 Plataformas Soportadas

- ✅ Android
- ✅ iOS
- ✅ Web

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Urpirio Dev.

## 👥 Equipo

Desarrollado por **Urpirio Dev**

## 📞 Soporte

Para soporte o consultas, utiliza el chatbot integrado en la aplicación o contacta al equipo de desarrollo.

---

**Versión:** 1.0.0  
**Última actualización:** 2025

Made with ❤️ for República Dominicana 🇩🇴
