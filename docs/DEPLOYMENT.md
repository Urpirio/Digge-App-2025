# Guía de Deployment

Esta guía cubre el proceso de deployment de DIGGEAPP para diferentes plataformas.

## Tabla de Contenidos

- [Preparación](#preparación)
- [Build para Android](#build-para-android)
- [Build para iOS](#build-para-ios)
- [Web Deployment](#web-deployment)
- [App Store Submission](#app-store-submission)
- [Updates OTA](#updates-ota)

## Preparación

### 1. Verificar Configuración

Revisar `app.json`:

```json
{
  "expo": {
    "name": "Dige-App-2025",
    "slug": "Dige-App-2025",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./Assets/Image/Logo.png",
    "splash": {
      "image": "./Assets/Image/Logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    }
  }
}
```

### 2. Actualizar Versión

Antes de cada build, actualizar la versión en:

- `app.json` - campo `version`
- `package.json` - campo `version`

**Android:**
```json
{
  "android": {
    "versionCode": 1  // Incrementar en cada build
  }
}
```

**iOS:**
```json
{
  "ios": {
    "buildNumber": "1.0.0"  // Incrementar en cada build
  }
}
```

### 3. Variables de Entorno

Para producción, configurar variables sensibles:

```bash
# .env
API_URL=https://api.production.com
GOOGLE_MAPS_KEY=your_production_key
GEMINI_API_KEY=your_production_key
```

**Nota:** NO incluir el archivo `.env` en el repositorio. Usar EAS Secrets.

### 4. Configurar EAS

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login en Expo
eas login

# Configurar proyecto
eas build:configure
```

## Build para Android

### Configuración EAS Build

Archivo `eas.json`:

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "gradleCommand": ":app:assembleDebug"
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "aab"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

### Build APK (Testing)

```bash
# Build APK para pruebas internas
eas build -p android --profile preview

# Descargar APK
# El link se mostrará en la consola al completar
```

### Build AAB (Production)

```bash
# Build AAB para Google Play Store
eas build -p android --profile production
```

### Configurar Google Play Store

1. **Crear app en Google Play Console:**
   - Ir a [Google Play Console](https://play.google.com/console)
   - Crear nueva aplicación
   - Completar información de la app

2. **Configurar App Signing:**
   - Google Play App Signing maneja las claves automáticamente con EAS

3. **Subir AAB:**
```bash
# Opción 1: Manual
# Descargar AAB de EAS y subir a Google Play Console

# Opción 2: Automático
eas submit -p android --latest
```

### Keystore

EAS maneja el keystore automáticamente, pero si necesitas uno propio:

```bash
# Generar keystore
keytool -genkeypair -v -storetype PKCS12 \
  -keystore my-release-key.keystore \
  -alias my-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# Configurar en eas.json
{
  "build": {
    "production": {
      "android": {
        "credentialsSource": "local"
      }
    }
  }
}
```

## Build para iOS

### Requisitos

- Cuenta de Apple Developer ($99/año)
- Xcode instalado (macOS)
- Certificados y provisioning profiles

### Configurar iOS

1. **Apple Developer Account:**
```bash
# Configurar credenciales
eas credentials
```

2. **Build para TestFlight:**
```bash
# Build para testing interno
eas build -p ios --profile preview
```

3. **Build para Production:**
```bash
# Build para App Store
eas build -p ios --profile production
```

### App Store Connect

1. **Crear app en App Store Connect:**
   - Ir a [App Store Connect](https://appstoreconnect.apple.com)
   - Crear nueva app
   - Completar metadatos

2. **Subir build:**
```bash
# Automático
eas submit -p ios --latest

# Manual desde Xcode
# Abrir Xcode > Window > Organizer > Upload
```

### TestFlight

TestFlight se configura automáticamente al subir el build a App Store Connect.

```bash
# Los testers deben instalar TestFlight app
# Agregar testers en App Store Connect > TestFlight
```

## Web Deployment

### Build Web

```bash
# Build para web
npx expo export:web

# Los archivos se generan en web-build/
```

### Deploy a Netlify

1. **Configurar `netlify.toml`:**

```toml
[build]
  command = "npx expo export:web"
  publish = "web-build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Deploy:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy a Vercel

1. **Configurar `vercel.json`:**

```json
{
  "buildCommand": "npx expo export:web",
  "outputDirectory": "web-build",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

2. **Deploy:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## App Store Submission

### Checklist Pre-Submission

- [ ] Versión actualizada
- [ ] Screenshots actualizados (varios tamaños)
- [ ] Descripción de la app en español
- [ ] Palabras clave optimizadas
- [ ] Categoría correcta: Navigation/Utilities
- [ ] Clasificación de contenido
- [ ] Política de privacidad URL
- [ ] Información de soporte
- [ ] Permisos justificados (cámara, ubicación)

### Screenshots Requeridos

**Android (Google Play):**
- Phone: 1080 x 1920 (mínimo 2)
- 7" Tablet: 1536 x 2048
- 10" Tablet: 2048 x 2732

**iOS (App Store):**
- 6.7": 1290 x 2796
- 6.5": 1242 x 2688
- 5.5": 1242 x 2208
- iPad Pro: 2048 x 2732

### Descripción de la App

**Español:**
```
DIGGEAPP - Tu nueva forma de conectarte con la gestión vial en República Dominicana.

Características:
✓ Gestión de vehículos
✓ Denuncias de tránsito
✓ Reportes de averías
✓ Navegación con GPS
✓ Servicios de emergencia
✓ Consulta de multas y pagos
✓ Sistema TraffiPuntos
✓ Chatbot de soporte con IA

Simplifica tu experiencia con el tránsito dominicano.
```

### Política de Privacidad

Crear página de política de privacidad que cubra:
- Datos recopilados
- Uso de ubicación
- Uso de cámara
- Almacenamiento de datos
- Compartir datos con terceros
- GDPR compliance (si aplica)

## Updates OTA

Expo permite updates over-the-air para cambios JavaScript/React Native sin rebuild:

### Configurar EAS Update

```bash
# Instalar
npm install -g eas-cli

# Configurar
eas update:configure
```

### Publicar Update

```bash
# Update de producción
eas update --branch production --message "Fix de bug X"

# Update de preview/staging
eas update --branch preview --message "Nueva feature Y"
```

### Configurar Updates en app.json

```json
{
  "expo": {
    "updates": {
      "enabled": true,
      "checkAutomatically": "ON_LOAD",
      "fallbackToCacheTimeout": 0
    },
    "runtimeVersion": "1.0.0"
  }
}
```

### Limitaciones de OTA

**Se puede actualizar:**
- Código JavaScript/TypeScript
- Estilos
- Imágenes y assets
- Lógica de negocio

**NO se puede actualizar:**
- Código nativo (Java, Swift, Objective-C)
- Dependencias nativas nuevas
- Permisos
- Configuración de app.json que afecte código nativo

## Monitoreo Post-Deploy

### Analytics

Considerar implementar:
- Google Analytics
- Firebase Analytics
- Sentry para error tracking

```bash
npm install @react-native-firebase/analytics
npm install @sentry/react-native
```

### Error Tracking con Sentry

```typescript
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  environment: 'production',
});
```

## Rollback

Si un update causa problemas:

```bash
# Revertir a versión anterior
eas update --branch production --message "Rollback" --republish <previous-update-group-id>
```

## CI/CD

### GitHub Actions Example

Crear `.github/workflows/eas-build.yml`:

```yaml
name: EAS Build

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Setup EAS
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}
          
      - name: Build Android
        run: eas build --platform android --non-interactive --profile production
```

## Checklist Final

Antes de cada release:

- [ ] Código testeado en dev
- [ ] Versión incrementada
- [ ] Changelog actualizado
- [ ] Screenshots actualizados
- [ ] Builds probados en dispositivos físicos
- [ ] Permisos verificados
- [ ] URLs y API keys de producción
- [ ] Política de privacidad actualizada
- [ ] Descripción de la app revisada
- [ ] Notas de la versión escritas

---

**Soporte:** Para problemas con deployment, consultar [Expo Documentation](https://docs.expo.dev/) o contactar al equipo de desarrollo.
