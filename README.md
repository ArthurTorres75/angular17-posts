# AngularPosts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Aquí tienes un ejemplo de un README para una aplicación de Angular 17:

# Aplicación en Angular 17

Esta es una aplicación desarrollada en Angular 17, en la cual se han aplicado las mejores prácticas y patrones de diseño. A continuación, se detallan algunas de las prácticas implementadas:

- **Componentes reutilizables**: Se han creado componentes que pueden ser utilizados en diferentes partes de la aplicación, lo que promueve la reutilización de código.
- **Separación del código**: Se ha separado el código en diferentes archivos y carpetas para mejorar la organización y facilitar el mantenimiento.
- **Evitar archivos de 400 líneas de código**: Se ha procurado mantener los archivos con una longitud adecuada para facilitar la lectura y comprensión del código.
- **Uso de nuevas características de Angular**: Se han utilizado características como "signals", que es un estado global que permite compartir información a lo largo de la aplicación.
- **Componentes standalone**: Se han utilizado componentes independientes que pueden funcionar de manera autónoma en diferentes partes de la aplicación.
- **Uso de nuevos decoradores**: Se han utilizado los decoradores @for, @defer y @if para aprovechar las nuevas funcionalidades de Angular.
- **Uso de Prettier**: Se ha utilizado Prettier para formatear el código en los archivos y mantener una estructura consistente.

## Funcionalidades de la aplicación

La aplicación tiene las siguientes funcionalidades:

1. Mostrar los últimos 20 posts.
2. Crear un nuevo post.
3. Mostrar el último post actualizado en un alert.

Estos tres componentes se muestran en la pantalla principal y la información se actualiza según sea necesario.

## Arquitectura de la aplicación

La arquitectura de la aplicación está estructurada de la siguiente manera:

```
- components
  - alert: Componente utilizado para mostrar el último post.
  - create-post: Componente utilizado para crear un nuevo post. Este componente tiene un componente hijo llamado ModalComponent, que fue creado para ser reutilizado en diferentes lugares donde sea necesario.
  - layout: Componente que aloja los tres componentes principales de la prueba y proporciona la presentación de nuestra página principal.
  - post: Componente que muestra la información de un post.
  - posts: Componente que carga la información de los posts y la pasa al componente post para renderizarlos utilizando el decorador @for y evitar repetir código.
- interfaces: Archivos que definen la estructura de un post y las propiedades para las solicitudes y respuestas de los endpoints.
- services: Contiene el servicio de post con los endpoints para obtener y crear posts.
- shared: Contiene componentes que se comparten en diferentes partes de la aplicación. Actualmente, contiene el componente ModalComponent, que es reutilizable.
```
