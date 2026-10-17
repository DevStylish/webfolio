---
title: "Retomando mi webfolio con OpenCode"
description: "Después de dos años parado, he vuelto a mi web con un asistente de IA: modo oscuro, SEO, nuevo diseño y más"
pubDate: "Oct 18 2026"
heroImage: "/opencode.webp"
postTags: ["Astro", "OpenCode", "Opinion Personal"]
---

## ¡He vuelto! 🎊

Si ya visitaste mi web en su momento, te habrás dado cuenta de que llevaba **parada desde 2023**... Pues eso se ha acabado: he retomado el proyecto y, esta vez, no vengo solo. Vengo con [OpenCode](https://opencode.ai), un asistente de programación con IA que me ha ayudado con **todos** los cambios que vas a ver por aquí.

### ¿Qué es OpenCode y por qué lo he usado?

OpenCode es un agente de programación, compatible con distintos modelos (gratuitos y de calidad), que funciona en tu terminal: le pides cosas en lenguaje natural y él lee tu código, lo modifica y hasta ejecuta los comandos necesarios para comprobar que todo funciona. ¿Que quería un modo oscuro? Se lo pedía y lo implementaba. ¿Que una imagen no cargaba en producción? La investigaba y la arreglaba.

Lo mejor es que no va a ciegas: antes de tocar nada, inspecciona el proyecto. Incluso me creó un fichero `AGENTS.md` con las normas de mi web para no cometer los mismos errores dos veces. 😎

### ¿Qué ha cambiado en la web?

Muchas cosas. Te las resumo:

1. **Modo claro y modo oscuro** 🌗. Arriba a la derecha tienes el botón para cambiar de tema. Recuerda tu elección y, si es tu primera visita, respeta lo que tengas configurado en el sistema. ¡Y sin parpadeos extraños al cargar!

2. **La página "Sobre mí" ahora sí parece un CV** 💼. He incluido mi experiencia real: **NTT DATA** (donde trabajo actualmente, con CaixaBank), **Oxigent**, **Guadaltel** y mis inicios como técnico. Además, la he dejado más cuidada y agradable: estadísticas, una línea de tiempo con mis empleos, etiquetas de tecnologías y tarjetas para la formación y los proyectos.

3. **El blog se ha convertido en una revista** 📰. Con su publicación destacada, **buscador**, filtros por tecnología (prueba a pulsar "Astro" 👆) y botón de suscripción por RSS, por si quieres estar al tanto de mis descubrimientos. 😉

4. **La portada es nueva**. Antes era un muro de texto explicando qué era un "webfolio", con poca alma... Ahora es una portada de verdad: una breve introducción sobre quién soy, a qué me dedico y accesos directos a todo.

5. **SEO en serio** 🚀. Metadatos Open Graph y Twitter, datos estructurados para Google, `robots.txt`, página 404 personalizada, imágenes con descripción y una única cabecera principal por página. Si me buscas en Google, ahora entiende mucho mejor mi web.

6. **El arreglo más importante (y el más tonto)** 🔧. Al desplegar en GitHub Pages, la web vive en `devstylish.github.io/webfolio/`... ¡pero mis enlaces apuntaban a la raíz! Por eso la imagen de la portada no cargaba y el botón del blog me llevaba a una página de error 404 (con unos errores de seguridad bastante feos en la consola que, spoiler, venían de la página de error de GitHub, no de mi web 😅). Ahora todas las rutas usan una función `withBase()` que tiene en cuenta el subdirectorio. Moraleja: **lo que funciona en local no siempre funciona en producción**.

### ¿Merece la pena programar con IA?

Si me preguntaras hace unos meses, te diría que la IA solo servía como herramienta de búsqueda de información, para diagnósticos rápidos y el análisis de problemas que nosotros tardaríamos mucho más en resolver.

Hoy lo tengo más claro: **rotundamente sí, pero con cabeza**. OpenCode ha hecho el trabajo mecánico a toda velocidad (diseños, estilos, configuraciones), pero las decisiones importantes las he tomado yo: desde el contenido de la web —qué contar en mi CV sin exponer mis datos personales, qué diseño me gustaba más (le pedí tres opciones para el blog y elegí) o qué publicación eliminar— hasta la resolución de errores, como el problema de la función `withBase()`.

Aun así, esto me permite ser **muchísimo más rápido**, aprender y apuntar a cosas nuevas que, de forma manual, probablemente me habría costado asimilar con tanta rapidez.

Es como tener un compañero incansable al que hay que revisarle el trabajo... ¡pero que nunca se queja! 🤖

Muchísimas gracias por pasarte por aquí. Esto sigue creciendo poco a poco. 😆
