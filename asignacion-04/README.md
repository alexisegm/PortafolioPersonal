# 📊 Asignación 04: CryptoDash

CryptoDash es una aplicación web interactiva desarrollada con React y Vite, diseñada para consumir y presentar datos del mercado de criptomonedas en tiempo real a través de la API pública de CoinGecko. Este proyecto marca la transición técnica desde el manejo de datos estáticos hacia el consumo asíncrono de fuentes de datos externas, aplicando un diseño moderno "Cyber-Bento" táctil y adaptativo.

## 🚀 Características Principales
* **Datos en Tiempo Real:** Consumo asíncrono y control estricto de la promesa devuelta por la API RESTful.
* **Arquitectura de Componentes:** Separación de lógica (Smart Component) y UI (Dumb Components).
* **Estados Visuales Completos:** Manejo integral de estados (`Loading`, `Error`, `Success`) para garantizar la inmersión visual.
* **Layout Responsivo:** Implementación de un "Bento Box" asimétrico adaptativo, con diseño de Glassmorphism híbrido y Ambient Glow.
* **Interfaz Dinámica:** Interruptor interactivo tipo "switch" que altera variables CSS globales, alternando entre Modo Claro y Modo Oscuro.

## ⚙️ Estructura del Proyecto
```text
asignacion-04/
├── index.html
├── src/
│   ├── main.jsx             # Punto de entrada y montaje
│   ├── App.jsx              # Raíz de la aplicación
│   ├── components/          # Componentes aislados (Padre/Hijos)
│   │   ├── CryptoBoard.jsx
│   │   ├── CryptoCard.jsx
│   │   └── CryptoHeader.jsx
│   └── styles/              # Arquitectura de estilos híbrida
│       ├── global.css       # Variables del sistema y lienzo
│       └── cryptodash.css   # Estilos específicos del layout Bento
├── docs/                    # Documentación y auditoría técnica del MVP
└── dist/                    # Build optimizado para producción