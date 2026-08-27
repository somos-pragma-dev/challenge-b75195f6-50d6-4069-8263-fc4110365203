# Construcción de una aplicación de seguimiento de tareas con React y TypeScript

Necesitamos desarrollar una aplicación que permita a los usuarios crear, editar y eliminar tareas. Los usuarios deben poder ver una lista de tareas y marcarlas como completadas. La aplicación debe ser robusta y manejar errores de manera adecuada. Los componentes deben ser funcionales y utilizar hooks para gestionar el estado.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React con TypeScript |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial y creación de la estructura de la aplicación

**Objetivo:** Establecer el entorno de desarrollo y crear la estructura básica de la aplicación.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Configura el entorno de desarrollo para trabajar con React y TypeScript.
- Crea la estructura básica de la aplicación con las carpetas necesarias.
- Define las interfaces para las tareas y los estados de la aplicación.

**Entregable:** Entorno de desarrollo configurado y estructura básica de la aplicación creada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo organizar las carpetas para una aplicación escalable.
- Piensa en las propiedades que debe tener una tarea (título, descripción, estado, etc.).

</details>

### Fase 2: Creación de componentes funcionales y gestión del estado

**Objetivo:** Crear componentes funcionales para la lista de tareas y gestionar el estado utilizando hooks.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea un componente funcional para la lista de tareas.
- Utiliza hooks para gestionar el estado de las tareas.
- Implementa la funcionalidad para añadir nuevas tareas.

**Entregable:** Componente funcional para la lista de tareas con estado gestionado utilizando hooks.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar los errores al añadir una nueva tarea.
- Piensa en cómo validar la entrada del usuario antes de añadir una tarea.

</details>

### Fase 3: Edición y eliminación de tareas

**Objetivo:** Implementar la funcionalidad para editar y eliminar tareas.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Añade la funcionalidad para editar las tareas existentes.
- Implementa la funcionalidad para eliminar tareas.
- Maneja los errores y validaciones necesarios para estas operaciones.

**Entregable:** Funcionalidad para editar y eliminar tareas implementada y con errores y validaciones manejados.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo confirmar la eliminación de una tarea para evitar eliminaciones accidentales.
- Piensa en cómo manejar los errores al editar o eliminar una tarea.

</details>

### Fase 4: Marcado de tareas como completadas

**Objetivo:** Implementar la funcionalidad para marcar tareas como completadas.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Añade la funcionalidad para marcar tareas como completadas.
- Maneja los errores y validaciones necesarios para esta operación.
- Actualiza la interfaz de usuario para reflejar el estado de las tareas.

**Entregable:** Funcionalidad para marcar tareas como completadas implementada y con errores y validaciones manejados.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo actualizar la interfaz de usuario para reflejar el estado de las tareas.
- Piensa en cómo manejar los errores al marcar una tarea como completada.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente funcional en React y cómo se utiliza?
- **paraQueSirve**: ¿Para qué sirve utilizar TypeScript en una aplicación React?
- **comoSeUsa**: ¿Cómo se utilizan los hooks para gestionar el estado en React?
- **erroresComunes**: ¿Cuáles son los errores comunes al trabajar con componentes funcionales y hooks en React?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de la funcionalidad para editar y eliminar tareas en una aplicación React con TypeScript?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo para React y TypeScript.
- Creación de la estructura básica de la aplicación con las carpetas necesarias.
- Definición de las interfaces para las tareas y los estados de la aplicación.
- Creación de componentes funcionales para la lista de tareas y gestión del estado utilizando hooks.
- Implementación de la funcionalidad para añadir, editar y eliminar tareas con manejo de errores y validaciones.
- Implementación de la funcionalidad para marcar tareas como completadas con manejo de errores y validaciones.
- Actualización de la interfaz de usuario para reflejar el estado de las tareas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
