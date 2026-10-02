# Portfolio Web Generator

Aplicación web para la creación y configuración de un portafolio personal
mediante un panel de administración.

El proyecto proporciona un diseño de portafolio preestablecido que puede ser
personalizado desde un dashboard, sin necesidad de modificar directamente
el HTML, CSS o JavaScript.

Desde el panel de administración el usuario puede ingresar su información
personal, servicios, proyectos, habilidades, proceso de trabajo, redes
sociales y preferencias visuales. Esta información se utiliza para generar
dinámicamente el contenido mostrado en `portfolio.html`.

## Objetivo del proyecto

El objetivo es proporcionar una plantilla configurable para generar un
portafolio profesional de manera sencilla.

El sistema está compuesto por dos partes principales:

- `dashboard.html`: panel desde el cual se configura el portafolio.
- `portfolio.html`: vista pública que muestra la información configurada.

El diseño visual del portafolio ya se encuentra establecido, mientras que
el contenido puede ser personalizado por cada usuario.

## Almacenamiento de la información

Este proyecto utiliza `LocalStorage` para guardar la información ingresada
desde el dashboard.

Los datos no se encuentran almacenados permanentemente dentro de los
archivos del proyecto ni son enviados a una base de datos.

Esto significa que la información configurada pertenece al navegador,
dispositivo y origen desde el cual se ejecutó la aplicación.

Por ejemplo:

http://localhost:5500

Los datos almacenados en ese origen no se transfieren automáticamente al
copiar el proyecto a otra computadora.

Por este motivo, al ejecutar el proyecto por primera vez en otro equipo,
el usuario deberá ingresar nuevamente la información desde el dashboard.

El repositorio contiene la estructura y diseño del generador de portafolios,
pero no la información personal configurada mediante LocalStorage.

## Funcionalidades

- Configuración de datos personales.
- Foto de perfil.
- Descripción profesional.
- Estadísticas del perfil.
- Gestión dinámica de servicios.
- Gestión dinámica de proyectos.
- Carga de imágenes para proyectos.
- Gestión de habilidades y tecnologías.
- Configuración del proceso de trabajo.
- Enlaces a redes sociales.
- Formulario de contacto con validaciones.
- Selección de color principal.
- Modo claro y modo oscuro.
- Imagen de fondo diferente para cada tema.
- Diseño responsive.
- Persistencia local mediante LocalStorage.
- Manejo de información mediante objetos JSON.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- LocalStorage
- JSON

## Estructura del proyecto

```text
portfolio-web/
│
├── assets/
│   ├── imágenes del portafolio
│   ├── light.jpeg
│   ├── dark.jpeg
│  
│
├── css/
│   ├── dashboard.css
│   └── portfolio.css
│
├── js/
│   ├── dashboard.js
│   └── portfolio.js
│
├── dashboard.html
├── portfolio.html
├── Guia_Ejecucion_Portafolio_Live_Server.pdf
├── .gitignore
└── README.md
