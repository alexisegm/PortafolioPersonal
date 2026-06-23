### Sección 5 – Lo que no entendí todavía: Auditoría de componentes (Asignación 04 – CryptoDash)

A pesar de que he logrado identificar y comprender la mayoría de los anti-patrones presentes en el componente `CryptoBoard.jsx` gracias a la auditoría, existen algunos conceptos sobre los cuales necesito mayor claridad práctica para sentir que los he dominado completamente.

#### 1. Concepto: Ciclo de renderizado con React Context (`ThemeProvider`)
* **Lo que no termino de entender:** Entiendo perfectamente la teoría de que el estado `theme` es un "estado mal ubicado" (*misplaced state*) porque muta el DOM globalmente desde un componente local, y sé que la solución es elevarlo a `App.jsx` usando un `ThemeProvider`. Sin embargo, todavía me cuesta entender cómo el `Context API` maneja los re-renderizados por debajo.
* **Cómo lo investigaría:** 1. **Documentación Oficial:** Leer a profundidad la sección de "Pasar datos en profundidad con Context" en la nueva documentación de React (react.dev).
  2. **Práctica Aislada:** Crear un proyecto pequeño desde cero, solo con un botón de cambio de tema y un par de componentes "hijos" con `console.log()` en sus ciclos de vida.
  3. **Uso de Herramientas:** Utilizar el *Profiler* de las *React Developer Tools* en el navegador para grabar y observar visualmente qué componentes se están pintando de nuevo al hacer el *toggle* del tema.

#### 2. Concepto a profundizar: Cuándo usar Context API vs. Gestores de Estado Externos
* **Lo que no termino de entender:** Si bien el Context API parece ideal para el tema visual, me surge la duda de si es la herramienta correcta para estados globales más complejos o que cambian con mucha frecuencia (como los datos de las criptomonedas en tiempo real o la autenticación del usuario). 
* **Cómo lo investigaría:**
  1. **Investigación comparativa:** Buscar artículos, foros y videos de la comunidad bajo el tema "React Context vs Zustand / Redux" para entender casos de uso reales de la industria.