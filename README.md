
# 🌤️ WeatherPlaces - App de Clima por Lugares

> Proyecto desarrollado como parte del curso de Desarrollo Web con Vue.js

---

## 📋 Descripción

**WeatherPlaces** es una aplicación web desarrollada con **Vue.js** que permite a los usuarios consultar el clima actual y el pronóstico de diferentes lugares del mundo. La temática de la app gira en torno a la exploración de destinos turísticos y ciudades destacadas, mostrando información meteorológica relevante como temperatura, humedad, velocidad del viento y condiciones generales del cielo.

La aplicación consume datos de una API pública de clima (como [OpenWeatherMap](https://openweathermap.org/)) y presenta la información de forma clara y visual.

---

## 🖥️ Vistas principales

| Vista | Ruta | Descripción |
|-------|------|-------------|
| **Home** | `/` | Pantalla principal con buscador de ciudades y lista de lugares destacados. |
| **Detalle del Lugar** | `/lugar/:id` | Muestra información detallada del clima de un lugar específico: temperatura, humedad, viento y pronóstico. |
| **Favoritos** | `/favoritos` | Lista de lugares guardados por el usuario para consulta rápida. |
| **Acerca de** | `/about` | Información sobre la aplicación y el equipo desarrollador. |

---

## 🗺️ Rutas configuradas en Vue Router

Las rutas están definidas en `src/router/index.js`:

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LugarDetalle from '../views/LugarDetalle.vue'
import Favoritos from '../views/Favoritos.vue'
import About from '../views/AboutView.vue'

const routes = [
{
path: '/',
name: 'home',
component: HomeView
},
{
path: '/lugar/:id',
name: 'lugar-detalle',
component: LugarDetalle,
props: true
},
{
path: '/favoritos',
name: 'favoritos',
component: Favoritos
},
{
path: '/about',
name: 'about',
component: About
}
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
```

---

## 🚀 Instrucciones para ejecutar el proyecto

### Requisitos previos

- [Node.js](https://nodejs.org/) v16 o superior
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Vue CLI instalado globalmente *(opcional)*

```bash
npm install -g @vue/cli
```

---

### Pasos para correr el proyecto

**1. Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/weather-places.git
cd weather-places
```

**2. Instalar dependencias**

```bash
npm install
```

**3. Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto con tu API Key:

```env
VITE_API_KEY=tu_api_key_aqui
VITE_API_URL=https://api.openweathermap.org/data/2.5
```

**4. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

La app estará disponible en: `http://localhost:5173`

---

### Otros comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción en `/dist` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Revisa el código con ESLint |

---

## 🔗 Repositorio

📂 **GitHub:** [https://github.com/tu-usuario/weather-places](https://github.com/tu-usuario/weather-places)

> ⚠️ Recuerda cambiar el enlace por la URL real de tu repositorio público.

---

## 🛠️ Tecnologías utilizadas

- [Vue.js 3](https://vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Axios](https://axios-http.com/)

---

## 👨‍💻 Autor

**[Tu Nombre]** — *Estudiante de [Nombre del Curso]*
📧 correo@ejemplo.com
🐙 [@tu-usuario](https://github.com/tu-usuario)

---

*Proyecto académico — [Año]*
