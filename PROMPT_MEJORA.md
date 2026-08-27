# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "task-tracker",
  "version": "1.0.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "jest"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "typescript": "5.1.6",
    "eslint": "8.45.0",
    "jest": "29.5.0"
  },
  "type": "module"
}
// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
// === ARCHIVO: src/index.tsx ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// === ARCHIVO: src/App.tsx ===
import React from 'react';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
// === ARCHIVO: src/components/TaskList.tsx ===
import React, { FC } from 'react';
import { Task } from '../interfaces/Task';
import { useTasks } from '../hooks/useTasks';

interface TaskListProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onEditTask: (id: string, task: Task) => void;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onAddTask, onEditTask, onDeleteTask, onCompleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onEditTask(task.id, task)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          <button onClick={() => onCompleteTask(task.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
// === ARCHIVO: src/hooks/useTasks.ts ===
import { useState } from 'react';
import { Task } from '../interfaces/Task';

interface UseTasks {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export const useTasks = (): UseTasks => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id: string, task: Task) => {
    setTasks(tasks.map(t => (t.id === id? {...t,...task } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id!== id));
  };

  const completeTask = (id: string) => {
    setTasks(tasks.map(t => (t.id === id? {...t, completed: true } : t)));
  };

  return { tasks, addTask, editTask, deleteTask, completeTask };
};
// === ARCHIVO: src/interfaces/Task.ts ===
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
// === ARCHIVO: src/pages/Home.tsx ===
import React, { FC } from 'react';
import TaskList from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

const Home: FC = () => {
  const { tasks, addTask, editTask, deleteTask, completeTask } = useTasks();

  const handleAddTask = () => {
    const newTask: Task = { id: '1', title: 'New Task', description: 'Task description', completed: false };
    addTask(newTask);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
      />
    </div>
  );
};

export default Home;
// === ARCHIVO: src/services/taskService.ts ===
import { Task } from '../interfaces/Task';

export const getTasks = (): Task[] => {
  return [];
};

export const addTask = (task: Task) => {
  // Simulate adding a task
};

export const editTask = (id: string, task: Task) => {
  // Simulate editing a task
};

export const deleteTask = (id: string) => {
  // Simulate deleting a task
};

export const completeTask = (id: string) => {
  // Simulate completing a task
};
// === ARCHIVO: src/utils/errorHandler.ts ===
export const handleError = (error: any) => {
  console.error('An error occurred:', error);
};
// === ARCHIVO: tests/TaskList.test.tsx ===
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';
import { Task } from '../src/interfaces/Task';

describe('TaskList Component', () => {
  test('renders task list', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', completed: false },
    ];
    render(
      <TaskList
        tasks={tasks}
        onAddTask={() => {} }
        onEditTask={() => {} }
        onDeleteTask={() => {} }
        onCompleteTask={() => {} }
      />
    );
    expect(screen.getByText('Task 1')).toBeInTheDocument();
  });
});
```
