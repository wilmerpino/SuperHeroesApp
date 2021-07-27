# SuperHeroesApp

Sencilla aplicación Web que permite obtener información sobre super heroes.
Se toma como referencia la api: https://superheroapi.com/  se configura un servidor proxy para evitar el problema por CORS.

## Instalación
**Descargue el proyecto desde el repositorio**
> git clone https://github.com/wilmerpino/SuperHeroesApp.git

**Moverse a la carpeta PiCalc**
> cd SuperHeroesApp

**Descargar las dependencias con npm**
> npm install

**Ejecutar la aplicación en modo de desarrollo**
> npm start

**Nota: Debe tener instalado `node` y `npm`**


## La aplicación se corre en el puerto 4200
> http://localhost:4200

## ¿Como utiliza la Aplicación? ##
Al iniciar la aplicación por primera vez, ésta mostrará la 

## Carpetas del proyecto
- src 
  - app
  - components
   - auth
   - errores
   - home
   - loading
   - page-not-found
   - result
   - search
   - shared
    - navbar
   - tarjeta       
   - pipes
   - services
- envieroments
- assets

## Ejecutar los test unitarios ##
Se crearon los siguientes test unitarios
- [ ] controllers
- [ ] services
- [x] pipes

**Para ejecutar los test escriba el siguiente comando**

> ng test

## Tecnogías utilizadas ##

- [x] Angular 12
- [x] Typescript
- [x] Proxy
- [x] Karma
- [x] Docker

## Contenedor ##
Se agrega archivo `Dockerfile` con la configuración de Docker para virtualizar el aplicativo

**Para virtualizar la aplicación debe instalar [Docker](https://www.docker.com/) antes de continuar con las instrucciones**

Para generar el _Contenedor Docker_ siga las siguientes instruccones

Desde la carpta `SuperHeroesApp` ejecute la siguente secuencia de comandos

Constuir la imagen
> ddocker build -t superheroe:0.0.1 . --no-cache=true  

Verificar la imagen creada
> docker image ls

Montar la imagen en un contededor Docker
>  docker container run -it -d -p 8080:8080 superheroe:0.0.1

Varificar que el contenedor este ejectándose
> docker container ls

**La aplicación queda ejecutándose en la URL http://localhost:8080**

# Autor #
Wilmer Pino

wilmerpino@gmail.com

https://www.linkedin.com/in/wilmerpino/
