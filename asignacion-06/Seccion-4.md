### Sección 4 – Top 3 mejores propuestas: Auditoría de Componentes (Asignación 04 – CryptoDash)

A continuación, mi planteamiento respecto a lo que considero son las 3 mejores propuestas, argumentando las razones y cómo proyectarlas en la práctica de manera priorizada por niveles:

#### 1. Prioridad Alta - Separar la capa de presentación (`CryptoGrid.jsx`)
* **Qué cambiaría:** En este caso, extraería la capa de presentación mediante la creación de un nuevo componente llamado `CryptoGrid.jsx`, permitiendo descargar de responsabilidades contrarias al manejo de datos de negocio al componente `CryptoBoard.jsx`, el cual pasará a llamar simplemente al nuevo componente, dejando de contener el bucle `.map()` y las declaraciones individuales de cada tarjeta.
* **Cómo lo haría:**
    Primero, quitaría del componente `CryptoBoard.jsx` el nodo contenedor de la malla:
    ```jsx
    <div className="bento-grid">
      {filteredCoins.map((coin) => (
        <CryptoCard key={coin.id} name={coin.name} ... />
      ))}
    </div>
    ```
    Posteriormente, agrego la invocación del nuevo componente dentro de `CryptoBoard.jsx`:
    ```jsx
    <CryptoGrid coins={filteredCoins} />
    ```
    Por último, agrego la lógica al nuevo componente `CryptoGrid.jsx`:
    ```jsx
    export const CryptoGrid = memo(function CryptoGrid({ coins }) {
      return (
        <div className="bento-grid">
          {coins.map(coin => (
            <CryptoCard key={coin.id} {...coin} />
          ))}
        </div>
      );
    });
    ```
* **Por qué sería mejor:** Con esto conseguiría una separación clara de responsabilidades, lo que, si en un futuro decido cambiar el diseño visual de la aplicación, solo tendré que modificar o en dado caso, reemplazar el componente `CryptoGrid.jsx`, sin alterar otros componentes.

#### 2. Prioridad Media – Aislar la lógica de filtrado de resultados
* **Qué cambiaría:** Utilizando las herramientas nativas de React, quitaría la constante de filtrado de resultados del componente `CryptoBoard.jsx` que se evalúa en cada ciclo de renderizado. Agregaría la encapsulación de la lógica mediante un Hook.
* **Cómo lo haría:**
    Primero quitaría la constante de filtrado de `CryptoBoard.jsx`:
    ```javascript
    const filteredCoins = coins.filter(coin => ...);
    ```
    Posteriormente agregaría la encapsulación de la lógica mediante el Hook de optimización (`useMemo`):
    ```javascript
    const filteredCoins = useMemo(() => {
      return coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [coins, searchTerm]);
    ```
* **Por qué esto sería mejor:** Esto limitaría la mezcla de responsabilidades, optimizando la fluidez de la aplicación al evitar re-cálculos en cada renderizado.

#### 3. Prioridad Baja - Elevar el estado visual del tema a `App.jsx` mediante un `ThemeProvider`
* **Qué cambiaría:** Dado que la lógica de manejo de estado es una lógica global, extraería dicha lógica a un componente que permita centralizar esta función dentro del componente raíz `App.jsx`, permitiendo, primero descargar de responsabilidades al componente `CryptoBoard.jsx`, y segundo, corrigiendo la presencia de un estado mal ubicado (misplaced state).
* **Cómo lo haría:**
    Primero, agregaría la creación del proveedor global (`ThemeProvider`), dentro del archivo raíz `App.jsx`:
    ```jsx
    export const ThemeContext = createContext();
    
    // En el retorno de App():
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main><CryptoBoard /></main>
    </ThemeContext.Provider>
    ```
    Posteriormente, agregaría el Hook de contexto dentro de los consumidores `CryptoHeader.jsx` y `CryptoBoard.jsx`, en lugar de la inyección manual por propiedades, lo que adicionalmente limitaría el riesgo de *prop drilling*:
    ```jsx
    const { theme, toggleTheme } = useContext(ThemeContext);
    ```
* **Por qué esto sería mejor:** Al elevar el estado de tema a la raíz mediante un proveedor (`ThemeProvider`), se corrige la arquitectura global de la aplicación, permitiendo que cualquier función o sección comparta las preferencias estéticas del usuario, eliminando dependencias cruzadas entre componentes hermanos.