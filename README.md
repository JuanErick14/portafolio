# Juan Erick Esquivel Vargas · Portfolio

Portafolio personal de **Desarrollador Web Full Stack y Especialista Martech**, ubicado en Lima, Perú.

Mi trabajo conecta desarrollo web, integraciones de sistemas y analítica digital para crear soluciones alineadas con las necesidades del negocio.

[Ver portafolio](https://juanerick14.github.io/portafolio/) · [LinkedIn](https://linkedin.com/in/juan-esquivel-vargas) · [GitHub](https://github.com/juanerick14)

## Sobre el portafolio

Sitio web con diseño oscuro, adaptable a móviles, tablets y escritorio, disponible en **español e inglés**.

Incluye:

- Presentación profesional y tecnologías.
- Casos de estudio con desafíos, soluciones y aportes.
- Experiencia laboral y formación.
- Espacio para fotografía y descarga del CV por idioma.
- Contacto directo por correo electrónico.

## Proyectos destacados

### Integración con Escala CRM

Middleware desarrollado en PHP para conectar formularios web y campañas de TikTok Ads con Escala CRM mediante API REST, eliminando la dependencia de herramientas intermediarias.

### Atribución de campañas

Sistema de captura y transmisión de parámetros UTM desde la URL hasta el backend, utilizando JavaScript, campos ocultos, Google Tag Manager y Google Analytics 4.

### Dashboard de marketing y ventas

Automatización de la consolidación de métricas mediante una API en Google Apps Script que transforma datos a JSON y alimenta un dashboard web personalizado.

### Desarrollo web y SEO técnico

Desarrollo y mantenimiento de plataformas corporativas, auditorías de indexación y optimización del rendimiento para sitios de Perú y Ecuador.

> Los diagramas del portafolio representan los flujos de las soluciones; no son capturas de las aplicaciones.

## Tecnologías del sitio

- **HTML5:** estructura y contenido.
- **CSS3:** diseño oscuro y distribución responsiva.
- **JavaScript:** navegación móvil, casos de estudio y detección de los CV disponibles.
- **Node.js:** generación de las páginas estáticas en ambos idiomas.

El sitio publicado no necesita un servidor Node.js ni instalar dependencias.

## Estructura del proyecto

```text
portafolio-erick/
├── build.mjs
├── README.md
└── dist/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── es/
    │   └── index.html
    ├── en/
    │   └── index.html
    ├── CV/
    │   ├── Juan-Erick-CV-ES.pdf
    │   └── Juan-Erick-CV-EN.pdf
    └── img/
        ├── favicon.svg
        └── perfil.webp
```

Los PDF y la fotografía deben añadirse manualmente.

## Personalización

### Fotografía

Coloca tu foto en:

```text
dist/img/perfil.webp
```

Mientras no esté disponible, el sitio muestra una composición con las iniciales **JE**.

### Currículum

Añade los archivos con estos nombres exactos:

```text
dist/CV/Juan-Erick-CV-ES.pdf
dist/CV/Juan-Erick-CV-EN.pdf
```

Al servir el sitio mediante HTTP, los botones de descarga se activan cuando detectan los PDF. Mientras tanto, muestran un mensaje de disponibilidad pendiente.

## Contacto

**Juan Erick Esquivel Vargas**  
Full Stack Web Developer · Martech Specialist  
Lima, Perú

- **Email:** [erick03juan@gmail.com](mailto:erick03juan@gmail.com)
- **LinkedIn:** [juan-esquivel-vargas](https://linkedin.com/in/juan-esquivel-vargas)
- **GitHub:** [juanerick14](https://github.com/juanerick14)