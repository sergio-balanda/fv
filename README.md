# Fv

## Introducción

Ésta aplicación...

### ¿Qué 'tecnologías' usamos en el desarrollo?
- [nodeJs](https://nodejs.org/es/): Como parte de la instalación básica para contener npm y yarn.
- [React](https://es.reactjs.org/): Como biblioteca de Javascript para la interfaz de usuario.
- [material-ui](https://material-ui.com/): design system.
- [template](https://github.com/flatlogic/react-material-admin): template del proyecto.

### Descripción de carpetas y archivos

```bash
+---.ClienteApp
|       se encuentran los archivos react
\---src
|   package.json
|       dependencies del proyecto
|   components
|       componentes vistas parciales o secciones
|   pages
|       contenidos de las paginas
|   constans
|       variables constantes
|   context
|       context login
+---controllers
|       se encuentra UserController el cual devuelve objetos para pruebas
+---Models
      

```
        
---

### Instalación creacion del proyecto
- se crea proyecto aplicación web asp net core, con plantilla react.js o react.js y redux
- en ClienteApp packages.json se agregan las dependencias necesarias para el proyecto.
- al ejecutar el proyecto con iss express se ejecuta npm install  y npm start
- alternativa al instalar paquetes nuevos ir a ClienteApp o donde se encuentre la carpeta node_modules y ejecutar ```npm i```

### Crear nueva pagina.
- ver ejemplo o utilizar como referencia en el proyecto carpeta ClienteApp->src->pages->test. Se crea un componente rect
    - crear carpeta dentro de ClienteApp src pages
    - crear archivo js
    - para poder utilizar el componente o pagina se debe importar dicho componente en components layout.js y agregarlo a la ruta
    - para agregar al sidebar ir components sidebar.js
    
### Pasar proyecto de react a producción.

- ir a la carpeta donde se encuentra en proyecto,  por ejemplo si el proyecto está dentro de una solución net core ir a ClientApp, ver siempre donde se encuentran la carpeta de node_modules y abrir línea de comandos.
desde la línea de comandos o terminal encontrándose sobre la carpeta del proyecto ejecutar  ```npm run build```, se crea una carpeta dentro del proyecto llamada build y una carpeta static dentro estan los archivos comprimidos con nombre chuck.
- luego ```npm install -g serve```
- por último ```serve -s build```
- copiar la url en el explorador

###### Documentación de referencia
- [doc-1](https://www.youtube.com/watch?v=ZKxvBsGVKR8): How to deploy a react application to production - step by step process | Crash Course
- [doc-2](https://create-react-app.dev/docs/production-build): Creating a Production Build
- [doc-3](https://reactjs.org/docs/optimizing-performance.html): Optimizing Performance
