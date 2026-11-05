# Mise — Recetas y gestión gastronómica

Abre `index.html` en Chrome, Firefox o Edge. No requiere instalación ni servidor. Necesita conexión a internet únicamente para cargar las fotografías y tipografías externas.

## Funciones
- Buscar recetas por nombre, ingrediente, país y categoría; ordenarlas.
- Ver ingredientes ajustables a cualquier número de porciones, preparación paso a paso y calificar de 1 a 5 estrellas.
- Crear recetas propias y conservarlas en `localStorage`.
- Estandarizar cantidades, compras, costos de ingredientes, merma, empaque, mano de obra, indirectos y margen objetivo.
- Convertir entre kg/g y L/ml, guardar la ficha localmente y exportarla en CSV.

## Fórmulas
Costo del ingrediente = cantidad usada convertida / cantidad comprada × precio de compra.
Costo lote = [costo ingredientes × (1 + % merma) + otros costos] × (porciones deseadas / porciones base).
Costo unitario = costo lote / porciones deseadas.
Precio sugerido = costo unitario / (1 − margen deseado).
Ganancia bruta unitaria = precio sugerido − costo unitario.

## Importante
Las recetas de ejemplo son ilustrativas y deben validarse antes de usar en una cocina profesional. La herramienta no incluye automáticamente IVA, retenciones, costos de plataformas de domicilios ni comisiones; añádelos según tu operación. No convierte gramos a mililitros sin densidad. Las calificaciones son personales y locales, no promedios reales de otros usuarios. `localStorage` no sincroniza entre dispositivos. Para una operación profesional multiusuario se necesitaría base de datos y autenticación.

## Novedades de nutrición
- Filtros por alimentación y calorías en el recetario.
- Módulo «Nutrición»: objetivos de calorías máximas y proteína mínima por porción, con búsqueda de recetas compatibles.
- Ficha por receta con kcal, proteínas, carbohidratos y grasas por porción.
- En «Crear receta» puedes aportar valores nutricionales calculados y elegir tipo de alimentación; los cuatro valores son opcionales en conjunto.
- Los valores de las recetas de ejemplo son **orientativos**, no un análisis nutricional validado. La dieta «poco procesada / natural» no es una clasificación médica ni certificación. Algunas preparaciones dependen de marcas e ingredientes específicos para poder ser veganas o vegetarianas.
- Para uso comercial, alergias o necesidades clínicas, confirmar recetas y nutrientes con fichas técnicas, etiquetas, tablas de composición confiables y un profesional competente.
