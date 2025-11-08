# Guía de Contribución

¡Gracias por tu interés en contribuir a DIGGEAPP! Este documento proporciona directrices para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Empezar](#cómo-empezar)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Commits y Pull Requests](#commits-y-pull-requests)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

## 🤝 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas un ambiente respetuoso y colaborativo.

## 🚀 Cómo Empezar

### Configuración del Entorno

1. **Fork y clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/Digge-App-2025.git
cd Digge-App-2025
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Crea una rama para tu trabajo:**
```bash
git checkout -b feature/nombre-de-tu-feature
```

4. **Inicia el servidor de desarrollo:**
```bash
npm start
```

## 💻 Proceso de Desarrollo

### Estructura de Ramas

- `main` - Rama principal de producción
- `develop` - Rama de desarrollo activo
- `feature/*` - Nuevas características
- `bugfix/*` - Corrección de bugs
- `hotfix/*` - Correcciones urgentes

### Antes de Empezar a Codificar

1. Asegúrate de que tu fork esté actualizado con la rama principal
2. Crea una nueva rama desde `develop`
3. Asegúrate de entender el issue o feature que vas a trabajar

## 📝 Estándares de Código

### TypeScript

- Usa TypeScript para todos los archivos nuevos
- Define tipos e interfaces apropiadamente
- Evita el uso de `any` cuando sea posible

```typescript
// ✅ Bueno
interface UserData {
  nombres: string;
  apellidos: string;
  cedula: string;
  foto_perfil?: string;
}

// ❌ Evitar
const userData: any = {...}
```

### Componentes React Native

- Usa componentes funcionales con hooks
- Mantén los componentes pequeños y enfocados
- Extrae lógica compleja a custom hooks

```typescript
// ✅ Bueno
export default function MiComponente() {
  const { data, loading } = useCustomHook();
  
  if (loading) return <ActivityIndicator />;
  
  return <View>...</View>;
}
```

### Estilos

- Usa StyleSheet para estilos nativos
- Usa NativeWind (TailwindCSS) cuando sea apropiado
- Mantén los estilos consistentes con el diseño existente

```typescript
// Estilos nativos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
```

### Estructura de Archivos

- Organiza componentes por funcionalidad/pantalla
- Mantén los hooks en carpetas `Hooks/`
- Mantén los estilos en carpetas `Style/`

```
Components/
└── Components_FeatureName/
    ├── Components/
    │   └── Section_Main.tsx
    ├── Hooks/
    │   └── useFeature.tsx
    └── Style/
        └── Style_Feature.tsx
```

### Nombres de Archivos y Componentes

- Componentes: PascalCase (ej: `ScreenHome.tsx`)
- Hooks: camelCase con prefijo "use" (ej: `useGetData.tsx`)
- Estilos: PascalCase con prefijo "Style_" (ej: `Style_Login.tsx`)

## 🔍 Testing

Aunque el proyecto actualmente tiene configuración básica de Jest, se espera que:

- Pruebes manualmente todas las funcionalidades antes de hacer PR
- Verifiques que la app funcione en iOS y Android si es posible
- Documentes los pasos de testing realizados en el PR

## 📤 Commits y Pull Requests

### Mensajes de Commit

Usa mensajes de commit descriptivos en español:

```bash
# ✅ Bueno
git commit -m "Agregar validación de formulario en login"
git commit -m "Corregir bug en visualización de mapa"
git commit -m "Actualizar estilos del botón principal"

# ❌ Evitar
git commit -m "fix"
git commit -m "cambios"
git commit -m "wip"
```

### Pull Requests

1. **Título claro y descriptivo:**
   - "Agregar: [descripción breve]"
   - "Corregir: [descripción del bug]"
   - "Actualizar: [qué se actualizó]"

2. **Descripción completa:**
   - ¿Qué problema resuelve?
   - ¿Qué cambios se hicieron?
   - ¿Cómo probarlo?
   - Screenshots si hay cambios visuales

3. **Checklist antes de enviar:**
   - [ ] El código compila sin errores
   - [ ] Probado en al menos una plataforma (iOS/Android)
   - [ ] Los estilos son consistentes con el diseño existente
   - [ ] No hay console.logs olvidados
   - [ ] La documentación está actualizada si es necesario

## 🐛 Reportar Bugs

### Antes de Reportar

- Verifica que el bug no haya sido reportado anteriormente
- Asegúrate de usar la última versión del código

### Información a Incluir

- **Descripción clara del bug**
- **Pasos para reproducir:**
  1. Ve a '...'
  2. Presiona en '...'
  3. Ve el error
- **Comportamiento esperado**
- **Comportamiento actual**
- **Screenshots o videos** (si aplica)
- **Plataforma:** iOS/Android/Web
- **Versión del dispositivo/navegador**

## 💡 Sugerir Mejoras

Las sugerencias son bienvenidas. Para proponer una mejora:

1. Abre un issue describiendo la mejora
2. Explica por qué sería útil
3. Proporciona ejemplos o mockups si es posible
4. Espera feedback antes de empezar a implementar

## 📚 Recursos Útiles

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

## ❓ Preguntas

Si tienes preguntas sobre cómo contribuir, puedes:
- Abrir un issue con la etiqueta "question"
- Contactar al equipo de desarrollo

---

¡Gracias por contribuir a DIGGEAPP! 🚀
