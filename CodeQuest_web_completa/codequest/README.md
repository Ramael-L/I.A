# CODEQUEST — Aprende a programar jugando 🎮

Sitio web educativo para principiantes en HTML, CSS y Tailwind.

## Cómo usarlo

1. Abre la carpeta `codequest` en Visual Studio Code.
2. Abre `index.html` en el navegador (o usa la extensión Live Server).
3. Entra a **Mundos**, selecciona una misión y responde el quiz.
4. En **Entrenamiento**, marca los temas que necesitas reforzar.
5. En **Laboratorio**, escribe HTML y CSS, luego pulsa **Ejecutar**.

## Estructura

- `index.html`: estructura semántica de la página.
- `css/styles.css`: diseño responsive y estilo gamer.
- `js/app.js`: 12 lecciones, quizzes, XP, progreso, filtros y laboratorio.

## Funcionalidades

- Tres mundos: HTML, CSS y Tailwind (cuatro misiones por mundo).
- Explicaciones breves, ejemplos de código y preguntas con retroalimentación.
- Puntos XP, niveles, barras de progreso e insignias por mundo completado.
- Autoevaluación de confianza: necesito ayuda / practicar / lo domino.
- Filtro de entrenamiento y acceso directo a los retos.
- Editor HTML/CSS con previsualización en un iframe aislado.
- Guardado automático de progreso y del editor mediante `localStorage`.
- Diseño adaptable y navegación accesible.

## Limitaciones de esta primera versión

- El laboratorio ejecuta **HTML y CSS**, no Tailwind ni JavaScript del usuario.
- Cada misión incluye una pregunta; para mayor profundidad se pueden añadir bancos de preguntas por dificultad.
- El progreso se guarda **en el navegador actual**, no en cuentas online. Si borras los datos del sitio se pierde.
- Requiere conexión a internet solo para cargar la tipografía de Google Fonts; el resto funciona sin conexión.

## Siguiente paso recomendado

Para ampliar las lecciones, edita el arreglo `missions` al inicio de `js/app.js`: cada misión tiene título, explicación, código, pregunta y respuestas.
