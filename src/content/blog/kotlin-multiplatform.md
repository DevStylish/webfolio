---
title: "Kotlin Multiplatform"
description: "El futuro del desarrollo movil, web y escritorio"
pubDate: "Sept 10 2024"
heroImage: "/blog-placeholder-1.jpg"
postTags: ["Kotlin"]
---

## ¿Qué es Kotlin y Kotlin Multiplatform?

Para entender Kotlin, tenemos que remontarnos a sus creadores, **JetBrains**. Es posible
que muchos os suene o los conozcais, ya que son los desarrolladores de los IDEs
más usados actualmente y que, bajo mi punto de vista, es de los más potentes para
desarrollar y mejores optimizados, como son IntellIJ, WebStorm, PHPStorm, etc.

**Kotlin**(meter enlace a Wikipedia) nace ante las necesidades de la empresa de un lenguaje que cumpla con las características que ellos buscaban, además, dieron una respuesta ante uno de los debates más repetidos en el mundo del desarrollo:
**_¿Lenguaje tipado o no tipado?_** Para algunos, como es mi caso, puede parecernos un debate un poco 
absurdo, ya que ambos tienen sus ventajas y desventajas, pero para otros esto implica una comodidad a la 
hora de desarrollar; para Jetbrains, esto era algo bastante importante. El líder de JetBrains, Dmitry Jemerov(meter enlace de Wikipedia), dijo 
que la mayoría de lenguajes no tienen las características que buscaban, con la excepción de _Scala_. Sin embargo, 
citó el lento tiempo de compilación de Scala como una deficiencia obvia. Uno de los objetivos establecidos de 
Kotlin es el de compilar tan rápido como _Java_.

Para resumir a Kotlin en pocas palabras, podríamos definirlo como: _un popurrí muy selectivo de todas las
ventajas de cada lenguaje_.

### ¿Como descubro Astro 3?

Descubrí Astro 3 en uno de los directos de Miguel Ángel ["midudev"](https://www.youtube.com/@midulive) Durán García,
me pareció muy curioso poder programar de esta forma, sobretodo porque para crear estos posts,
solamente hace falta un archivo con extensión MD, por ejemplo: `primer-post.md`, además que su sistema de anotaciones mediante Markdown
lo hace muy sencillo y facil de diseñar. ¡Solo hace falta desarrollar una plantilla a tu gusto y el resto del trabajo es crear
un modelo mediante el archivo MD!

### ¿Porque un "webfolio" y no un simple portfolio o una web?

Empecé con esta idea para resolver las tipicas preguntas que me realizan cada vez que me llega una oferta: _**¿Qué tecnologías trabajas o sabes?**_
_**¿Qué tiempo de experiencia tienes con X tecnologia?**_ _**¿Qué tipo de problemas resuelves y con que complejidad?**_...

Por supuesto, esto no es para que no me hagan estas preguntas, por supuesto, las respondo con muchisimo gusto, ya que es mi trabajo
y el cual adoro con toda mi alma, pero ¿y si ahorramos tiempo en estas preguntas que te puedo responder y me haces otras que te interesen más?
Aprovechando que iba a hacer una web de uso personal, no queria hacer el "típico portfolio", queria hacer una web en la que pudiera demostrar
mis conocimientos como lo que me considero, un apasionado desarrollador **"todoterreno"**... Dame el lenguaje que quieras, el entorno que quieras,
el reto que quieras, siempre voy a tratar de resolver el problema y de la forma más optima posible.

Por eso, me envalentoné a desarrollar mi web con Astro 3, la cual tenía muchisimas ventajas:

1. **Plantillas para lo que quieras**. Es muy sencillo empezar una web con Astro 3, simplemente te diriges a su [web](https://astro.build), seleccionas
   un tema y comenzar a modificarlo a tu gusto. En mi caso queria una web SEO Friendly, que pudiese modificar a mi antojo (aunque creo que tarde o temprano la
   cambiaré por una con un diseño más moderno😬). En cualquier caso, si vas a utilizar Astro 3, piensa con detenimiento el tipo de plantilla que quieras usar.

2. **Rapidez al desplegar**. Si entramos en la web de Astro 3 e indigamos porqué usarlo, nos encontramos que su sistema de empaquetado es de los más rápidos
   actualmente. Esto nos puede beneficiar mucho, sobretodo al desarrollar que sus cambios en caliente son extremadamente rápidos y a la hora de desplegarlo, nuestra
   web pesará muy poco.

3. **HTML, TypeScript o JS en una misma pantalla**. Esto realmente va más por gustos, puede que seas más de tener cada función separada o tenerlo todo un poco más comprimido,
   en cualquier caso, creo que el uso de Astro es muy sencillo, se me hace muy similar a Angular (aunque con la nueva versión de Angular, la cual tengo pendiente de probar,
   estoy algo en duda, ¡PERO HABRÁ UN POST SOBRE ESO!).

4. **Escalable desde el principio**. Quiero hacer un post, pero sin tener que crear una pagina HTML cada vez que quiera hacer uno... _"Puedes usar un pagina como layout"_,
   podría pensar alguno, por supuesto, pero con el paso del tiempo se vuelve un trabajo tedioso, aqui es donde entra la integración con los `archivos.md`, donde tengo
   una plantilla, la cual luego puedo modificar de manera muy sencilla y que tras haber modificado y automatizado la página a mi antojo, ¡con un simple `archivos.md` puedo crear
   un post en un instante!

5. **Documentación de código**. No tiene mucho misterio, os dejo un ejemplo:

```markdown
System.out.println("Hello World!");
```

Existen muchisimas otras ventajas con Astro 3, todas ellas las teneis en su web.

Muchisimas gracias por visitar mi blog, seguiré subiendo publicaciones a medida que vaya descubriendo más😆.
