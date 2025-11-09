# proyecto2025

# Café 505 — Proyecto Web

**Autores:** Malena Griffi · Tomás De la Peña  
**Materia:** Taller de Desarrollo Web – Universidad Católica de Córdoba (UCC)  
**Año:** 2025  
**Repositorio:** [Proyecto2025-Griffi-DeLaPena](https://github.com/malenagriffi/Proyecto2025-Griffi-DeLaPena)  
**GitHub Pages:** [https://malenagriffi.github.io/Proyecto2025-Griffi-DeLaPena/](https://malenagriffi.github.io/Proyecto2025-Griffi-DeLaPena/)

---

## 🧭 Índice

- [1. Descripción del Proyecto](#1-descripción-del-proyecto)
- [2. Estructura del Repositorio](#2-estructura-del-repositorio)
- [3. Tecnologías Utilizadas](#3-tecnologías-utilizadas)
- [4. Navegación y Contenido](#4-navegación-y-contenido)
- [5. Cumplimiento de Requisitos del Parcial](#5-cumplimiento-de-requisitos-del-parcial)
- [6. Accesibilidad y Buenas Prácticas](#6-accesibilidad-y-buenas-prácticas)
- [7. Cómo Ejecutar el Proyecto](#7-cómo-ejecutar-el-proyecto)
- [8. Mockups](#8-mockups)
- [9. Validaciones y Mensajes de Error](#9-validaciones-y-mensajes-de-error)

---

## 1. Descripción del Proyecto

**Café 505** es una página web desarrollada desde cero que presenta el menú digital de una cafetería.  
Incluye **búsqueda de productos**, **carrito de compras**, y **formulario de contacto**, aplicando HTML, CSS y JavaScript de forma integrada.  
El diseño se adaptó para **versión Desktop y Mobile**, considerando accesibilidad, estructura semántica y mensajes de error claros para el usuario.

---

## 2. Estructura del Repositorio

La estructura del proyecto se organiza en carpetas para mantener una división clara entre el código, los recursos y los elementos de diseño:

```plaintext
Proyecto2025-Griffi-DeLaPena
│
├── index.html              # Página principal del sitio
├── contacto.html           # Página de contacto
│
├── /imagenes               # Carpeta con imágenes optimizadas (productos, logo, fondo)
├── /css                    # Hojas de estilo (estilos.css)
├── /js                     # Archivo de funciones JS (app.js)
│
├── /sketch                 # Bocetos iniciales del diseño (versión Desktop y Mobile)
├── /mockup                 # Mockups y Wireframes finales (versión Desktop y Mobile)
│
├── README.md               # Documentación principal del proyecto
└── .gitignore              # Exclusión de carpetas innecesarias (.idea, .vscode, .DS_Store)
```

---

## 3. Tecnologías Utilizadas

|             Tecnología | Uso Principal                      | Observaciones                                                                                          |
| ---------------------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------ |
|              **HTML5** | Estructura y contenido semántico   | Uso de etiquetas `header`, `nav`, `main`, `section`, `article`, `footer`                               |
|               **CSS3** | Diseño y estilos                   | Uso de clases, selectores por ID, pseudoclases `:hover`, `:focus`; tipografía Google Fonts **Poppins** |
|  **JavaScript (ES6+)** | Funcionalidad dinámica             | Carrito, búsqueda de productos, validaciones, alertas al usuario                                       |
| **Git / GitHub Pages** | Control de versiones y publicación | Sitio online desde rama `main`                                                                         |
|     **Figma / Canvas** | Diseño de Sketch y Mockup          | Versiones Desktop y Mobile con mensajes de error                                                       |
|            **Favicon** | Identidad visual del sitio         | Archivo `.ico` en la raíz del proyecto                                                                 |

---

## 4. Navegación y Contenido

- **index.html:** Menú de productos (bebidas, budines, galletas, panificados, etc.) con buscador y botones interactivos.
- **contacto.html:** Formulario de contacto con nombre, mensaje y método de comunicación.
- **Carrito:** Función JS que suma precios, valida campos y muestra alertas personalizadas.
- **Navegación:** Enlaces entre páginas mediante la barra `<nav>`.

---

## 5. Cumplimiento de Requisitos del Parcial

- **HTML:** Etiquetas en minúscula, atributos con comillas, uso de `title` y `meta`, al menos 3 etiquetas semánticas, `alt` en imágenes, `label for` en formularios, `placeholder`, `size`, `maxlength`.
- **CSS:** Archivo externo único, selectores por tag, id y clase, uso de pseudoclases, sin `!important`, diseño consistente.
- **JS:** Archivo externo `app.js`, funciones flecha, variables con `let` y `const`, validaciones, alertas y cálculos en base a inputs.
- **Accesibilidad:** Imágenes con `alt`, formularios con `label`, navegación clara y contrastes correctos.
- **Publicación:** Proyecto en repositorio correcto, con GitHub Pages y sin archivos innecesarios (`.idea`, `.vscode`, `.DS_Store`).
- **README.md:** Documentado en Markdown con títulos, negritas, tabla e índice.

---

## 6. Accesibilidad y Buenas Prácticas

- Todas las imágenes tienen atributo `alt` descriptivo.
- Inputs y selects poseen `label for="id"`.
- Validaciones informan errores mediante alertas claras.
- Estructura semántica que facilita lectura por screen readers.
- Código identado y validado con _Inspect Code_ (sin errores).

---

## 7. Cómo Ejecutar el Proyecto

1. Clonar o descargar este repositorio.
2. Abrir `index.html` en un navegador (o usar **Live Server** en VS Code).
3. Navegar entre las secciones y probar la búsqueda y carrito.

---

## 8. Sketches y Mockups

- Carpeta `/sketch`: versiones Desktop y Mobile del diseño inicial (formato PNG/JPG/PDF).
- Carpeta `/mockup`: versiones finales de alta fidelidad con los mensajes de error visibles.
- Incluye pantallas de búsqueda, carrito vacío, validaciones y formulario con alertas.

---

## 9. Validaciones y Mensajes de Error

- Al enviar el formulario con campos vacíos → alerta con mensaje “Complete todos los campos”.
- Si se ingresa texto inválido → se blanquea el campo.
- Si el carrito está vacío → mensaje de error “No hay productos en el carrito”.
- Si la búsqueda no coincide con ningún producto → mensaje informativo al usuario.

---

## Tecnologías usadas

**React 18 + Vite 7** → entorno de desarrollo moderno y rápido.  
**React Router DOM v6** → navegación entre páginas sin recargar.  
**React Hooks** → manejo de estados, efectos y navegación.  
**SASS / SCSS** → estilos organizados y diseño responsive.  
**Fetch API + async/await** → lectura del catálogo desde JSON local.  
**localStorage** → guarda el carrito y mantiene los productos al recargar.  
**Git & GitHub** → control de versiones y publicación del proyecto.  
**Figma** → diseño de la estructura y wireframes.  
**Google Fonts** → tipografía Quicksand.  

---
## Pasos para iniciar el proyecto

1. **Clonar el repositorio**  

   git clone https://github.com/UCC-TallerDesarrolloWeb/proyecto2025-griffi-de-la-pena.git

2. **Entrar a la carpeta del proyecto**
   
   cd proyecto2025-griffi-de-la-pena

3. **Instalar las dependencias**
   
   npm install

4. **Iniciar el servidor de desarrollo**

   npm run dev  --> abrir el URL

---

## Requisitos del Primer Parcial

### Sobre el Sketch

- [x] Versión Desktop y Mobile
- [x] Guardado en formato PNG, JPG ó PDF
- [x] Dentro de una carpeta llamada "Sketch"
- [x] En el diseño tener en cuenta los mensajes de error para el usuario

Tener en cuenta:

- ¿Qué opciones debe ofrecer al usuario?
- ¿Qué campos hay para ingresar datos?
- Benchmarking: Investigar sistemas similares
- ¿Qué acciones le permiten al usuario realizar?
- Mensajes de Error

### Sobre el Wireframe/Mockup

- [x] Dibujado con algún programa como: Figma, AdobeXD, Canvas, Draw.io en Drive, Pencil Project, Mockups, NinjaMock, o similares.
- [x] Diseño de Mensajes de error para el usuario
- [x] Versión Desktop y Mobile
- [x] Guardado en formato PNG, JPG ó PDF
- [x] Dentro de una carpeta llamada "Wireframe" ó "Mockup"

### Sobre el Repositorio

- [ ] El proyecto debe estar subido al repositorio adecuado "Proyecto2025-ApellidoAlumno1-ApellidoAlumno2"
- [x] Modificar el Readme.MD y colocar información del proyecto/página (mínimamente: título del proyecto, autores con nombre y apellido, link de gh-pages, contenido de la página, listado de tecnologías usadas, etc)
- [x] En el **readme.md** se debe emplear Markdown y aplicar negrita, titulo de orden 1, 2 y 3, link, items, tabla, index a cada sección
- [x] El código debe estar pusheado en el repositorio (emplear gh-pages ó publicar la página desde el main), y no debe haber diferencias entre **main** y **gh-pages** (verificar de realizar el Merge).
- [x] Publicar la Web empleando GitHubPages
- [x] El repositorio no debe contener archivos innecesarios (no debe contener .idea o .vsc ni .DS_Store, en todo caso emplear **.gitignore**)

### Sobre el Proyecto General

- [x] La página principal debe llamarse index
- [x] NO está permitido descargar un TEMPLATE (diseño 100% desde cero)
- [x] La estructura del proyecto debe ser adecuada - Crear una carpeta para las imágenes - Carpeta para los sketch - Carpeta para los mockups/Wireframes
      En una segunda etapa, al emplear **React**: - Carpeta de Componentes - Carpeta de Pages - Carpeta de Styles
- [x] Identar correctamente el código (en Webstorm Ctrl+Alt+L)
- [x] No debe haber errores presentes (realizar _Code_ > _Inspect Code_ para verificar que no haya errores)
- [x] Se debe emplear algún favicon
- [x] Emplear alguna fuente de google fonts o subir al proyecto alguna fuente externa
- [x] Debe haber navegación entre todas las páginas
- [x] No debe haber errores de ortografía en el contenido visual
- [x] "Lorem ipsum" es sólo válido para los prototipos, NO para la página

### Sobre el HTML

- [x] Todas las etiquetas deben estar en minúscula
- [x] Poner comillas a todos los atributos
- [x] Title debe contener el título de la página
- [x] En el `<head></head>` incluir las etiquetas `<meta>` detallando: autor, descripcion y palabras clave
- [x] Emplear al menos 3 etiquetas semánticas diferentes (header, nav, aside, main, section, article, footer)
- [x] Emplear `<header></header>`. En el contenido de la cabecera debe haber un título `<h1></h1>`, puede tener color de fondo, algún logotipo, etc.
- [x] Debe haber por lo menos una etiqueta `<img>` en la página.
- [x] La estructura de la página debe estar definida con `<div></div>`
- [x] Debe contener al menos 3 elementos de tipo `<input>` o `<select>` ó `<button>` que le permitan al usuario ingresar valores para poder realizar un cálculo de un ejercicio.
- [x] Emplear el atributo [**placeholder**](U2_HTML_avanzado.html#/19) (mínimamente en 1 input)
- [x] Emplear el atributo **size** para que el tamaño de los inputs sea prolijo
- [x] Emplear el atributo **maxlength** para que el usurario no pueda ingresar valores "muy grandes"
- [x] No espaciar con excesivos `<br>`. Utilizar márgenes, paddings, etc.
- [x] La anidación de etiquetas HTML debe ser correcta.
- [x] No utilizar etiquetas deprecadas.
- [x] Todas las etiquetas deben estar correctamente cerradas
- [x] Los ids de los elementos deben ser unívocos

### Sobre las imágenes

- [x] Debe contener por lo menos una etiqueta `<img>` en la página.
- [x] Todas las imágenes deben ser incluidas en el repositorio dentro de una carpeta llamada **imagenes** (salvo que sean demasiado pesadas. En ese caso, se puede emplear un servidor externo).
- [x] No se deben subir videos en el repositorio (excepto que sean MUY livianos).
- [x] Toda imagen debe tener su atributo alt
- [x] Las imágenes deben poseer un nombre representativo

### Sobre el CSS

- [x] El estilo de los elementos debe establecerse en un archivo CSS (prohibido poner el atributo style a los elementos o emplear estilos incrustados).
- [x] El CSS debe contar mínimo con un tipo de cada forma (por Tag, por ID y por clase).
- [x] Se debe emplear pseudoclase
- [x] No emplear !important
- [x] El diseño de la página debe ser consistente
- [x] En la primera etapa debe existir un único archivo CSS (se debe evitar código duplicado. Se debe aplicar re-utilización de código/estilos)

### Sobre Accesibilidad:

- [x] Toda imagen debe tener su etiqueta alt
- [x] Todo `<input>` o `<select>` debe tener su `<label>`
- [x] Los labels deben contener el atributo **for** (el for debe contener el id del input al cual se referencia)
- [x] Si hay una tabla en la página, debe contener `<caption></caption>`

### Sobre la funcionalidad JavaScript

Se debe agregar funcionalidad Js a la página HTML+CSS desarrollada

- [x] Una función que compruebe si los valores ingresados son correctos, y si no lo son, que le indique al usuario por un alert o dialog, y que blanquee el contenido del campo.
- [x] Una función que calcule/muestre algo en base a los valores ingresados por el usuario en los inputs.
- [x] El código Js debe estar en un archivo externo
- [x] Se debe emplear var, let o const según corresponda para mayor eficiencia
- [x] No deben existir funciones innecesarias que no se llamen en ninguna sección del código
- [x] Las funciones deben estar escritas cómo **función flecha**
- [x] No debe haber errores JavaScript presentes (F12 > Consola)
- [x] El funcionamiento de la página debe ser consistente.

### Sobre la documentación

- [x] TODAS las funciones javaScript deben estar comentadas adecuadamente. [JsDoc](https://jsdoc.app/about-getting-started.html)
  ```/**
    * Descripción de que hace la función
    * @method Nombre de la función
    * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
    * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
    * @return Valor que retorna
    */
  ```

### Testing

- Es sumamente IMPORTANTE probar el funcionamiento de la página con diferentes valores.
- ¿Qué pasa si presiono calcular sin ingresar nada?
- ¿Y si ingreso solo algunos campos? ¿Y si ingreso todo cero? ¿Y si ingreso letras? ¿Y si ingreso números negativos?
- ¿Si vacío el carrito de compras?¿Si recargo la página?
- Prueba todas las situaciones posibles, no te quedes solo con el **happy path**.

### Sobre las correcciones

- Se corregirá el proyecto con el último commit realizado en Github hasta las 23:59 del día anterior a la fecha de entrega
- Las notas serán de la siguiente manera: (Por ejemplo 55% 4; 59% 5; 67% 6; 75% 7; 82% 8; 89% 9; 97% 10)
- Todas los errores o la falta de cumplimiento de los requisitos serán reportados a través de la plataforma de GitHub, en la pestaña de ISSUES

| Items a Evaluar    | %   |
| ------------------ | --- |
| Prototipo en papel | 7%  |
| Prototipo Mockup   | 8%  |
| HTML+CSS+Js        | 85% |

Por cada corrección o defecto en el HTML+CSS+Js se descontará un 5% del 85%.

## Requisitos del Segundo Parcial

### Sobre React

- [X] Se debe emplear **Vite** para instalar **React**
- [X] Se debe emplear **Hooks**, useState, useEffect, useContext, useNavigate
- [X] Se debe emplear **react-router-dom** para el enrutamiento a otras páginas
- [X] Se debe emplear **outlet** para que un componente principal renderice componentes de rutas hijas.
- [X] La estructura del proyecto (carpetas) debe ser el correcto: components, pages, styles
- [X] Los **imports** deben ser usando con **alias**
- [X] Validaciones en tiempo real con onChange + mensajes de error accesibles.
- [X] Crear al menos un componente genérico (ej: Button, Card, Input) y reutilizarlo en varias páginas.
- [X] Guardar algún dato en localStorage (ej: preferencias de tema o un carrito de compras).
- [X] En caso de tener backend, emplear **fetch**
- [X] En caso de no contar con un servicio que nos provea la información necesaria, la misma debe ser leída en formato tipo Json local y renderizar listas dinámicas. Ejemplo:

```javascript
const activities = [
  {
    nombre: "taekwondo",
    descripcion: "Arte marcial coreana",
    horarios: [
      { dia: 2, "hora-inicio": "18:30", "hora-fin": "20:00" },
      { dia: 4, "hora-inicio": "18:30", "hora-fin": "20:00" },
    ],
  },
  {
    nombre: "zumba",
    descripcion: "ritmos latinos",
    horarios: [
      { dia: 1, "hora-inicio": "19:30", "hora-fin": "20:30" },
      { dia: 3, "hora-inicio": "19:30", "hora-fin": "20:30" },
    ],
  },
];
```

### Sobre las Correcciones

- [X] Todas las correcciones y mejoras (sugerencias) solicitadas durante el primer parcial deben estar corregidas.
- [X] No debe haber errores presentes en el código (realizar _Code_ > _Inspect Code_ para verificar que no haya errores)
- [X] Se corregirá el proyecto con el último commit realizado en Github hasta las 23:59 del día anterior a la fecha de entrega
- [X] Las notas serán de la siguiente manera: (Por ejemplo 55% 4; 59% 5; 67% 6; 75% 7; 82% 8; 89% 9; 97% 10)
- Las sugerencias sobre el HTML, CSS y Js realizadas en el anterior parcial dejen ser corregidas.

| Items a Evaluar                          | %   |
| ---------------------------------------- | --- |
| Estructura del Proyecto                  | 10% |
| Navegación con react-router-dom          | 15% |
| Uso correcto de Hooks                    | 20% |
| Renderizado dinámico de datos            | 25% |
| Validaciones y mensajes de error         | 10% |
| Consistencia del diseño y uso de estilos | 10% |
| Código limpio y sin errores en consola   | 10% |

## Requisitos del FINAL

- [ ] Todas las correcciones y mejoras solicitadas durante el primer y segundo parcial deben estar corregidas.
- [ ] No debe haber errores presentes en el código (realizar Code > Inspect Code para verificar que no haya errores)
- [ ] No debe haber errores JavaScript presentes (F12 > Consola)
- [ ] Debe cumplir con TODOS los requisitos del 1er y 2do Parcial (si se agrego código nuevo en Js, se debe documentar, si hay nuevos inputs de html deben contener su label, etc)
- [ ] Incluir al menos 5 tests con Jest + React Testing Library (ejemplo: que un botón renderice un texto esperado).


