<div align="center">

# DevStylish · Webfolio

**Blog y portfolio personal de Moisés Martín Pérez.**

Una web estática construida con [Astro](https://astro.build) donde publico apuntes de desarrollo,
proyectos y mi experiencia profesional.

[![Astro](https://img.shields.io/badge/Astro-3.1-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github&logoColor=white)](https://devstylish.github.io/webfolio/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#-licencia)

[🌐 Ver la web](https://devstylish.github.io/webfolio/) · [✍️ Blog](https://devstylish.github.io/webfolio/blog/) · [👤 Sobre mí](https://devstylish.github.io/webfolio/about/)

</div>

---

## ✨ Características

- **🎨 Modo claro / oscuro** con persistencia en `localStorage`, respeto del tema del sistema y sin parpadeos al cargar.
- **📰 Blog con contenido en Markdown** gestionado mediante *Content Collections* y validado con esquema tipado.
- **🔍 Buscador y filtros por tecnología** en el listado del blog (JS sin dependencias).
- **🚀 SEO completo**: Open Graph, Twitter Cards, `robots.txt`, sitemap y datos estructurados JSON-LD.
- **📱 Diseño responsive** con estilos propios en CSS (sin frameworks de UI).
- **⚡ 100 % estático**: sin servidor, rápido y desplegable en cualquier hosting.

## 🛠️ Stack

| Área          | Tecnología                                          |
| :------------ | :-------------------------------------------------- |
| Framework     | [Astro 3](https://astro.build)                      |
| Contenido     | Markdown / MDX (`@astrojs/mdx`)                     |
| Tipado        | TypeScript (config `strict`)                        |
| Extras        | `@astrojs/sitemap`, `@astrojs/rss`                  |
| Despliegue    | GitHub Pages (GitHub Actions)                       |

## 🚀 Empezar en local

Necesitas **Node.js 18+**. Después:

```sh
# 1. Instalar dependencias
npm install

# 2. Arrancar el servidor de desarrollo
npm run dev
# → http://localhost:4321
```

### Comandos disponibles

| Comando                 | Descripción                                          |
| :---------------------- | :--------------------------------------------------- |
| `npm install`           | Instala las dependencias                             |
| `npm run dev`           | Inicia el modo desarrollo en `localhost:4321`        |
| `npm run build`         | Genera el build de producción en `./dist/`           |
| `npm run preview`       | Previsualiza el build antes de desplegar             |
| `npm run astro ...`     | Ejecuta comandos del CLI de Astro (`astro check`, etc.) |

## 📁 Estructura del proyecto

```text
/
├── public/                  # Assets estáticos (favicon, fuentes, imágenes)
├── src/
│   ├── components/          # Componentes reutilizables (Header, Footer, ThemeToggle…)
│   ├── content/
│   │   ├── blog/            # Publicaciones en Markdown
│   │   └── config.ts        # Esquema de las Content Collections
│   ├── layouts/             # Layouts de página y de post
│   ├── pages/               # Rutas (index, blog, about, 404, rss.xml)
│   ├── styles/              # Estilos globales y variables de tema
│   └── consts.ts            # Constantes globales y helper withBase()
├── astro.config.mjs
└── package.json
```

## ✍️ Crear una publicación

Añade un archivo `.md` en `src/content/blog/`. Los campos **obligatorios** son `title`,
`description` y `pubDate`:

```md
---
title: "Mi nueva publicación"
description: "Una breve descripción que aparecerá en el listado"
pubDate: "Oct 15 2026"
heroImage: "/blog-placeholder-2.jpg"
postTags: ["Astro", "JavaScript"]
---

## Contenido

Aquí empieza el artículo…
```

## 🌐 Despliegue

El proyecto se publica automáticamente en **GitHub Pages** mediante
[`.github/workflows/astro.yml`](.github/workflows/astro.yml) en cada push a `main`.

> [!IMPORTANT]
> La web se sirve bajo el subpath **`/webfolio`**. Por eso **nunca** uses rutas absolutas
> (`href="/blog"`, `src="/favicon.svg"`) para enlaces internos o assets de `public/`:
> envuélvelas siempre con el helper `withBase()` de [`src/consts.ts`](src/consts.ts).
>
> ```astro
> import { withBase } from '../consts';
> <a href={withBase('/blog')}>Blog</a>
> ```
>
> Para verificar un build como el de producción:
>
> ```sh
> npx astro build --site https://devstylish.github.io --base /webfolio
> ```

## 👀 ¿Quieres saber más?

- 📚 [Documentación de Astro](https://docs.astro.build)
- 💼 [LinkedIn de Moisés Martín Pérez](https://www.linkedin.com/in/mois%C3%A9s-mart%C3%ADn-p%C3%A9rez-601430189/)
- 🐙 [GitHub · @DevStylish](https://github.com/DevStylish)

## 📝 Licencia

Publicado bajo licencia **MIT**: puedes usarlo, modificarlo y compartirlo libremente.

## 🙏 Créditos

El proyecto parte de la plantilla oficial [`blog`](https://github.com/withastro/astro/tree/main/examples/blog)
de Astro, a su vez basada en el tema [Bear Blog](https://github.com/HermanMartinus/bearblog/).
Diseño, contenido y personalizaciones son propios de **DevStylish**.
