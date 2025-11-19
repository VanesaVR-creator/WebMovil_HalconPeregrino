# Halcón Peregrino – Dashboard Web para Vehículo Inteligente

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com)

Un dashboard web responsivo diseñado para visualizar en tiempo real la información del vehículo Halcón Peregrino, incluyendo estado general, mapa, clima, multimedia, asistente de voz y panel de conducción.

Construido con **HTML**, **CSS**, **JavaScript** y **Node.js (Express)** utilizando una arquitectura moderna basada en API REST.

---

## 1. Descripción general

Este proyecto simula la interfaz digital de un vehículo inteligente, permitiendo visualizar datos, acceder a herramientas del coche, reproducir música, ver el mapa y obtener respuestas mediante un asistente de voz.

El diseño está inspirado en sistemas reales como Tesla UI, BMW iDrive y dashboards modernos utilizados en autos deportivos.

---

## 2. Características principales

### Interfaz tipo tablero automotriz

Incluye:

- Indicadores de velocidad  
- Estado del motor  
- Nivel de batería  
- Presión de llantas  
- Temperatura ambiente e interior  
- Controles visuales tipo gauge  

### Integración de mapa

- Implementado con **Leaflet + OpenStreetMap**  
- Vista en tiempo real de ubicación  
- Controles de zoom  
- Diseño responsivo  

### Reproductor multimedia

- Reproducción de audio desde la interfaz
- Controles de play, pause y volumen
- Visualizador de sonido animado

### Asistente de bienvenida y alertas emergentes

- Mensaje automático: “Bienvenido Halcón Peregrino”
- Al presionar “Listo para conducir” aparece:
  - Estado del motor  
  - Estado de batería  
  - Temperatura del motor  
  - Presión de llantas  

### Modo oscuro / claro

- Botón integrado para cambiar entre temas  
- Colores dinámicos aplicados vía CSS variables  

---

## 3. Tecnologías utilizadas

| Tecnología | Uso dentro del proyecto |
|-----------|--------------------------|
| **HTML5** | Estructura de la interfaz |
| **CSS3** | Estilos, temas, animaciones |
| **JavaScript** | Lógica, componentes interactivos |
| **Node.js** | Backend y servidor |
| **Express.js** | Routing del servidor |
| **Leaflet.js** | Mapas en tiempo real |
| **OpenStreetMap** | Proveedor del mapa |

---

## 4. Instalación y ejecución

### Requisitos previos
- Node.js instalado
- npm instalado

### Instalación del proyecto

```bash
npm install
```

### Ejecutar el servidor

```bash
node server.js
```

### Abrir el dashboard

Visita en tu navegador:

```bash
http://localhost:3000
```

## 5. Estructura del proyecto

```txt
/HalconDashboard
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── (recursos visuales)
│
├── server.js
├── package.json
└── package-lock.json
```

## 6. Estado del proyecto

Proyecto en desarrollo activo.
Se seguirán agregando nuevas funcionalidades como:

- Integración real con sensores del vehículo
- Conexión vía API
- Dashboard expandible
- Modo de navegación autónoma (simulado)

## 7. Autor

Este dashboard forma parte del desarrollo tecnológico implementado para el proyecto concursante **TonyKarts**, presentado en la edición **InnovaTecNM 2025**.

El proyecto TonyKarts busca integrar soluciones digitales e inteligentes para el monitoreo en tiempo real del estado de un vehículo eléctrico tipo go-kart, combinando sensores, interfaz gráfica avanzada y análisis de datos, con el objetivo de mejorar la experiencia del piloto y optimizar el rendimiento del vehículo.

Este trabajo fue asesorado por el **Profesor Francisco Javier Montesillo Puente**, docente del Instituto Tecnológico Superior de Salvatierra (ITESS), dentro de la carrera de **Ingeniería en Tecnologías de la Información y Comunicaciones**.

El desarrollo del dashboard fue realizado por las alumnas:

- **Vanesa Velázquez Rodríguez**  
- **Perla García Pérez**  
- **Andrea Vega Villanueva**

Como parte del componente tecnológico del proyecto, este dashboard web representa la capa visual e interactiva utilizada para mostrar datos clave del vehículo TonyKarts, incluyendo velocidad, batería, clima, posición GPS, estado del motor y panel de conducción dinámico, entre otros indicadores relevantes para la competencia.
