# TeslaCode — PWA educativa (versión 1.0)

Aplicación web **funcional** para aprender programación desde cero, con diseño responsive y PWA instalable.

## Ejecutar

Necesitas servir los archivos desde `localhost` o HTTPS (no desde `file://`, debido a los módulos ES y el service worker).

```bash
cd TeslaCode
python -m http.server 8000
```

Abre `http://localhost:8000` en tu navegador. En Windows también puedes hacer doble clic en **`iniciar-windows.bat`** si tienes Python instalado. Alternativamente usa VS Code → extensión **Live Server** y abre `index.html`.

En un teléfono conectado a la misma red puedes abrir la IP de tu equipo para consultar la web, pero para **instalar la PWA y usar Service Worker** necesitas HTTPS o localhost. Puedes desplegar los archivos estáticos a GitHub Pages, Netlify o Cloudflare Pages con HTTPS.

## Incluye

- 6 rutas conectadas por temas compartidos (fundamentos, frontend, backend, IA, ingeniería ML y full stack).
- Más de 50 lecciones originales, con explicaciones breves, analogías, código, una pregunta verificable y una mini misión por tema.
- Roadmap por capítulos con el progreso global y por ruta.
- Buscador de contenidos y filtros por área.
- Quiz de opción múltiple con retroalimentación y detección de temas débiles.
- Lista de repaso, favoritos, XP, racha, nivel y actividad reciente.
- Laboratorio de HTML/CSS/JS con vista previa en iframe sandbox (sin `allow-same-origin`), consola, presets y borrador guardado en el dispositivo. Máximo cinco ejecuciones con XP al día.
- Perfil editable, copia de seguridad/importación JSON y guardado local con localStorage.
- Manifest PWA, iconos 192/512, service worker con precache y soporte offline tras primera visita online.
- Diseño mobile-first con navegación inferior para móviles, etiquetas accesibles, foco visible, soporte básico de teclado y animación reducida.

## Arquitectura

```
index.html                Estructura semántica, navegación y regiones
src/styles.css            Sistema visual responsive
src/data.js               Catálogo declarativo de rutas + contenido de lecciones
src/store.js              Estado persistente y lógica de dominio/progreso
src/app.js                Enrutamiento, vistas, interacciones, editor y eventos
sw.js                     Cache offline versionada
manifest.webmanifest      Instalación PWA
icons/                    Recursos PWA
```

Las rutas se construyen a partir de IDs de lecciones; una lección compartida conserva el mismo estado aunque aparezca en varias rutas. Para añadir una ruta, agrega un objeto a `tracks` en `data.js`. Para ampliar el contenido, añade lecciones al catálogo `raw` y referencia sus IDs desde el roadmap.

## Limitaciones de esta versión

- Es una aplicación **local-first**: no hay cuentas reales, autenticación, sincronización entre dispositivos ni panel docente. La exportación JSON permite trasladar el progreso manualmente.
- El catálogo ofrece una **base real de contenidos**, pero **no equivale a una formación profesional completa** de nivel avanzado. Para llegar a ese alcance hacen falta lecciones profundas, proyectos evaluables, contenidos revisados por especialistas y un backend de seguimiento.
- Los cuestionarios verifican comprensión conceptual. La mini misión es una actividad guiada, **no** una corrección automática de código.
- El laboratorio ejecuta HTML/CSS/JS en el navegador, no Python ni Node, y la actividad en el editor se recompensa por ejecución, no por validez del resultado.
- La "racha" cuenta días de actividad al otorgar XP; no es una notificación programada.
- El service worker mantiene recursos de esta versión en caché; futuras versiones deben cambiar el nombre de CACHE.
- Se recomienda auditoría de accesibilidad y de seguridad antes de permitir código de terceros o migrar a producción multiusuario.

## Escalamiento sugerido

1. Backend: API de usuarios, rutas, lecciones, intentos, evaluaciones y recomendaciones (Node/TypeScript o similar).
2. Base de datos PostgreSQL + migraciones; auth con sesiones seguras y control de acceso.
3. Separar contenido editorial versionado en CMS/MDX con revisión, fuentes y fechas.
4. Motor de ejercicios automático seguro: contenedores aislados para Python y otros lenguajes, pruebas limitadas y protección contra abuso.
5. Proyectos por hitos con rúbricas y revisión, no solo preguntas de tres opciones.
6. Telemetría respetuosa con la privacidad, accesibilidad y mejoras basadas en evidencia.

## Privacidad

Los datos se guardan solo en el navegador. No existe ninguna API externa de seguimiento ni publicidad integrada.
