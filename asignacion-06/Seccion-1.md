# Sección 1 - Diagnóstico Inicial: Auditoría de Componentes (Asignación 04 - CryptoDash)

### Paso 1: COMPRENSIÓN

Haciendo una auditoría de componentes dentro del proyecto "asignación-04" (CryptoDash), utilizando el lenguaje propuesto en clase, he analizado el código de los componentes principales de la aplicación. 

He observado que el componente `CryptoBoard.jsx` actúa como un **"Componente Dios" (God Component)**. A pesar de contener una cantidad de líneas por debajo del límite típico para identificarlo como tal (125 líneas actualmente), reconozco que maneja varios `useState` por encima del mínimo recomendado, evidenciando el patrón "y" (hacer esto *y* aquello) en varias ocasiones:

- **Ejecución de efecto secundario para consumo de API (línea 34):** `useEffect(() => { const API_URL = ... fetch(API_URL) ... }, []);`
- **Manejo de estado de carga y error (líneas 9 y 11 respectivamente):** `const [loading, setLoading] = useState(true);` y `const [error, setError] = useState(null);`
- **Manejo de estado de datos (Coins) (línea 10):** `const [coins, setCoins] = useState([]);`
- **Manejo de estado de tema visual (líneas 14 y 25):** `const [theme, setTheme] = useState('dark');` y su respectivo `useEffect(() => { document.body.classList.add('light-theme') ... }, [theme]);`
- **Manejo de estado de búsqueda (línea 17):** `const [searchTerm, setSearchTerm] = useState('');` y su respectiva lógica `const filteredCoins = coins.filter...`

Adicionalmente, he notado que presenta una **mezcla de responsabilidades (Mixed Concerns)**, ejecutando distintas funciones simultáneamente dentro del mismo archivo:
1. Hace fetch a la API.
2. Maneja el tema visual global de la aplicación.
3. Renderiza la lógica de la interfaz de usuario (UI).

Además de lo propuesto anteriormente, he identificado que los "anti-patrones" se evidencian principalmente en el componente `CryptoBoard.jsx`. Habiendo evaluado los componentes restantes (`CryptoCard.jsx`, `CryptoFooter.jsx` y `CryptoHeader.jsx`) bajo los mismos parámetros, entiendo que estos mantienen sus responsabilidades claras.

### Paso 2: DECISIONES

En mi revisión inicial, no he logrado identificar personalmente la presencia de "efectos descontrolados" (uncontrolled effects), de "estados mal ubicados" (misplaced states), ni de "Prop Drilling", por lo que procedí a realizar la auditoría exhaustiva en conjunto con la IA para desglosar el resto de los componentes y encontrar estas vulnerabilidades.

### Paso 3: CRITERIO

Tomando en cuenta lo que he identificado anteriormente en los componentes de la app, reduciría la carga de responsabilidades del componente `CryptoBoard.jsx` (god component), principalmente extrayendo el estado de tema a otro componente, dejando la responsabilidad de manejo de datos en `CryptoBoard`. Adicionalmente, crearía o extraería a un componente distinto el manejo del estado de la barra de búsqueda (mixed concerns).