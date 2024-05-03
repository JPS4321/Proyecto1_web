
---

# Blog App

Este proyecto es una aplicación web de blogs desarrollada con Vite, React, y un backend en Node.js que permite a los usuarios ver, crear, editar y eliminar posts. La aplicación incluye un sistema de autenticación que protege rutas administrativas y proporciona una interfaz amigable para el usuario.

## Características Principales

- **Página de Inicio**: La página principal incluye una variedad de componentes que proporcionan una vista introductoria, una barra de navegación, y un cuerpo con el contenido principal.
- **Contenido del Blog**: La sección de contenido del blog muestra posts en forma de tarjetas, obtenidos mediante llamadas a un backend.
- **Rutas Administrativas Protegidas**: Las rutas de administración (`/admin` y sus derivados) están protegidas por autenticación, asegurando que solo los usuarios autenticados puedan acceder.
- **Autenticación**: La aplicación incluye un sistema de autenticación con login, donde los usuarios pueden iniciar sesión con credenciales válidas, generando un token de autenticación que protege las rutas administrativas.
- **Backend**: El backend proporciona la funcionalidad para gestionar los posts del blog y validar la autenticación del usuario.

## Estructura del Proyecto

### Frontend

- **main.jsx**: Punto de entrada principal de la aplicación.
- **App.jsx**: Define la estructura de rutas de la aplicación, incluyendo rutas protegidas.
- **HomePage.jsx**: Página principal de la aplicación, incluye componentes como `Header`, `Navbar`, y `Body`.
- **Body.jsx**: Contiene la estructura principal del contenido del blog, dividiéndola en `Conte` y `Sidebar`.
- **Header.jsx**: Muestra el encabezado de la página principal, dando la bienvenida y proporcionando un tagline.
- **Navbar.jsx**: Proporciona la barra de navegación para la aplicación.
- **Conte.jsx**: Sección de contenido del blog, que hace llamadas al backend para obtener datos de los posts y los muestra como tarjetas.
- **Card.jsx**: Componente para mostrar cada post como una tarjeta con título, contenido, y opcionalmente una imagen.
- **Sidebar.jsx**: Barra lateral que proporciona información adicional sobre el autor y otros detalles.

### Rutas Administrativas

- **AdminPage.jsx**: Página administrativa que permite navegar entre diferentes funcionalidades administrativas, incluyendo `CreatePost`, `EditPost`, `ViewBlog`, y `DeletePost`.
- **Login.jsx**: Permite a los usuarios autenticarse y guarda un token en `localStorage` para proteger rutas.
- **ViewBlog.jsx**: Muestra una vista de los blogs actuales, con un botón flotante para regresar.
- **CreatePost.jsx**: Permite crear una nueva publicación, incluyendo título, contenido y una imagen.
- **EditPost.jsx**: Carga un post existente para editar su contenido y lo actualiza en el backend.
- **EditPostContent.jsx**: Componente para editar un post específico, con campos de texto y lógica para actualizar.
- **DeletePost.jsx**: Permite seleccionar y eliminar una publicación específica del backend.

### Backend

- **main.js**: Archivo principal del backend, define la estructura de las rutas y la funcionalidad de la API.
- **conn.js**: Configura la conexión a la base de datos MySQL, proporcionando un pool de conexiones.
- **db.js**: Contiene las funciones principales para interactuar con la base de datos, incluyendo la creación, eliminación, actualización, y obtención de posts.
- **schema.sql**: Contiene la estructura de la base de datos, definiendo la tabla de `blogs` y sus columnas.
- **docker-compose.yaml**: Configura la infraestructura del backend, incluyendo la base de datos MySQL.

### Dependencias

El proyecto incluye una variedad de dependencias definidas en los archivos `package.json` y `package-lock.json` para ambos frontend y backend.

## Instalación y Ejecución

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/JPS4321/Proyecto1_web/blob/PRUEBA-TALVEZ/README.md
   ```

2. **Frontend**:

   - **Instala las dependencias**:
     ```bash
     npm install
     npm install react-router-dom
     npm install react-lazy

     ```

   - **Inicia el servidor de desarrollo**:
     ```bash
     npm run dev
     ```

   - **Accede a la aplicación en**: `http://localhost:5173`

3. **Backend**:

   - **Configura la infraestructura**:
     ```bash
     docker-compose up
     ```

   - **Inicia el backend**:
     ```bash
     node main.js
     ```

   - **Asegúrate de que la base de datos esté configurada correctamente.**

4. **Acceso Completo**:

   - **Visita la página principal** para explorar el contenido.
   - **Usa el login para acceder a las rutas de administración.**

## Conclusión

Este proyecto proporciona una aplicación de blogs robusta, permitiendo a los usuarios ver, crear, editar y eliminar posts, con funcionalidades de autenticación para proteger rutas administrativas. La estructura modular facilita la extensibilidad y el mantenimiento.

---

