export const devToolsData = [
  {
    id: 'elements',
    title: 'Elements',
    icon: '⚡',
    description: 'Inspecciona y modifica el DOM y el CSS en tiempo real.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop', // Código HTML/Estructura
    content: {
      overview: 'La pestaña Elements te permite ver el HTML tal como el navegador lo ha interpretado (el DOM). Es tu herramienta principal para arreglar problemas de diseño y probar cambios de estilo al instante sin tener que recargar la página.',
      proTip: 'Haz clic derecho en cualquier elemento de tu página web y selecciona "Inspeccionar" para abrir esta pestaña directamente en ese nodo exacto.',
      features: [
        'Editar texto, etiquetas y atributos HTML al vuelo.',
        'Activar/desactivar clases CSS y modificar valores.',
        'Forzar estados de elementos como :hover o :active.',
        'Inspeccionar el modelo de caja (margin, border, padding).'
      ]
    }
  },
  {
    id: 'console',
    title: 'Console',
    icon: '💬',
    description: 'Interactúa con JavaScript, visualiza logs y detecta errores.',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop', // Consola/Terminal
    content: {
      overview: 'La consola es tu línea de comandos directa con el navegador. Aquí es donde verás los console.log(), advertencias y errores (letras rojas) que ocurren en tu aplicación.',
      proTip: 'Usa console.table(tuArray) en lugar de console.log() para ver arreglos de objetos en una tabla estructurada y fácil de leer.',
      features: [
        'Ejecutar código JavaScript en el contexto de la página actual.',
        'Visualizar errores de red o de sintaxis en tus scripts.',
        'Filtrar mensajes por tipo (Info, Warnings, Errors).'
      ]
    }
  },
  {
    id: 'sources',
    title: 'Sources',
    icon: '📄',
    description: 'Depura tu código JavaScript con breakpoints (puntos de interrupción).',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Editor de código/Depuración
    content: {
      overview: 'En lugar de llenar tu código de console.log(), la pestaña Sources te permite pausar la ejecución de tu JavaScript exactamente donde quieres y analizar el valor de las variables en ese preciso milisegundo.',
      proTip: 'Escribe la palabra "debugger;" en tu código fuente y el navegador pausará la ejecución automáticamente en esa línea.',
      features: [
        'Explorar los archivos originales que carga la página.',
        'Añadir Breakpoints (puntos de pausa) normales o condicionales.',
        'Hacer "Step over" para avanzar línea por línea en el código.'
      ]
    }
  },
  {
    id: 'network',
    title: 'Network',
    icon: '🌐',
    description: 'Monitorea las peticiones de red (API calls, imágenes, scripts).',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', // Servidores/Red
    content: {
      overview: 'Fundamental para desarrolladores Fullstack. Aquí puedes ver cada petición HTTP que hace tu página al backend, cuánto tardó, qué envió y qué respondió el servidor.',
      proTip: 'Usa el selector de "Throttling" (donde dice No throttling) para simular una conexión 3G lenta y ver cómo se comporta tu app con mal internet.',
      features: [
        'Inspeccionar Headers, Payload y Response de peticiones Fetch/XHR.',
        'Ver el "Waterfall" (cascada) de tiempos de carga.',
        'Deshabilitar la caché temporalmente para pruebas puras.'
      ]
    }
  },
  {
    id: 'memory',
    title: 'Memory',
    icon: '🧠',
    description: 'Encuentra fugas de memoria (memory leaks) que ralentizan la app.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', // Microchips/Memoria
    content: {
      overview: 'Si tu aplicación se vuelve lenta después de usarla un rato, podrías tener una fuga de memoria. Esta herramienta te permite tomar "fotos" de la memoria RAM que está usando tu app para analizarla.',
      proTip: 'Toma un "Heap Snapshot" antes de realizar una acción y otro después. Compara ambos para ver si quedaron variables basura sin limpiar.',
      features: [
        'Tomar capturas de montón (Heap Snapshots).',
        'Analizar la asignación de memoria en el tiempo.',
        'Detectar nodos del DOM desprendidos que siguen en memoria.'
      ]
    }
  },
    {
    id: 'application',
    title: 'Application',
    icon: '💾',
    description: 'Gestiona el almacenamiento local (LocalStorage, Cookies, IndexedDB).',
    imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop', 
    content: {
      overview: 'Aquí puedes ver todo lo que el navegador ha guardado en el equipo del usuario. Es el lugar a donde ir para borrar un token de sesión caducado o revisar tu caché local.',
      proTip: 'Haz doble clic en un valor de LocalStorage en esta tabla para editarlo o borrarlo fácilmente mientras pruebas tu aplicación.',
      features: [
        'Inspeccionar y borrar Cookies de sesión.',
        'Visualizar LocalStorage y SessionStorage.',
        'Revisar la configuración de Service Workers para PWAs.'
      ]
    }
  },
  {
    id: 'security',
    title: 'Security',
    icon: '🔒',
    description: 'Verifica los certificados SSL/TLS y problemas de contenido mixto.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', 
    content: {
      overview: 'Esta pestaña te indica de un vistazo si la página actual es segura (HTTPS). Es útil para diagnosticar por qué un navegador bloquea ciertos recursos alegando inseguridad.',
      proTip: 'Si tu página carga por HTTPS pero una imagen carga por HTTP, verás un error de "Contenido Mixto" (Mixed Content) reflejado aquí.',
      features: [
        'Ver detalles del certificado digital (emisor, caducidad).',
        'Comprobar la seguridad del origen principal.',
        'Identificar orígenes inseguros conectados a la app.'
      ]
    }
  },
 
  {
    id: 'lighthouse',
    title: 'Lighthouse',
    icon: '🚦',
    description: 'Audita el rendimiento, accesibilidad, SEO y mejores prácticas.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop', // Rendimiento/Velocidad
    content: {
      overview: 'Una herramienta automatizada de Google. Le das al botón de generar reporte y ejecuta decenas de pruebas en tu página, dándote una puntuación de 0 a 100 y consejos para mejorar.',
      proTip: 'Ejecuta siempre Lighthouse en una ventana de Incógnito para que las extensiones que tienes instaladas no alteren la puntuación de rendimiento.',
      features: [
        'Reportes de Performance (Core Web Vitals).',
        'Análisis de Accesibilidad para lectores de pantalla.',
        'Verificación básica de SEO (etiquetas meta, etc).'
      ]
    }
  },
  {
    id: 'recorder',
    title: 'Recorder',
    icon: '⏺️',
    description: 'Graba, reproduce y mide flujos de usuario (user journeys).',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop', // Grabación/Video
    content: {
      overview: 'Permite grabar una secuencia de acciones (clics, texto introducido) y reproducirla automáticamente. Excelente para pruebas E2E (End to End) o compartir reportes de bugs complejos.',
      proTip: 'Puedes exportar tus grabaciones del Recorder directamente como scripts de Puppeteer o Cypress para tus pruebas automatizadas.',
      features: [
        'Grabar flujos completos en la página sin escribir código.',
        'Reproducir la grabación con simulación de red lenta.',
        'Medir el rendimiento específico de esa secuencia.'
      ]
    }
  }
];