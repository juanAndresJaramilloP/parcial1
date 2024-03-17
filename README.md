### Nombre: Juan Andres Jaramillo P.
### Codigo: 201821305.

<br>

#### Paso a paso para la ejecucion del parcial:

**Para la primera parte (en clase):**

0. Tener instalado node.js en su máquina.
1. En la sección de Releases (en el costado derecho del homepage del repositorio) dar click sobre el release (parcial_1_clase) y luego seleccionar la opción de descargar como archivo .zip (Source code (zip)) que aparece en la sección de *Assets*.
2. Una vez descargado el archivo en su computadora, descomprimalo y abra el proyecto en VSCode o el editor de su preferencia.
3. Abra una terminal en el directorio del proyecto e instale las dependencias con el comando *npm install*, luego, ejecute el proyecto con el comando *npm start*.
4. El navegador mostrará la página principal de Alpesgram.


**Para la segunda parte (I18N, en casa):**

Siga los mismos pasos descritos para la ejecución de la primera parte del parcial, pero esta vez, en lugar de descargar el release *parcial_1_clase*, descargue el que dice *parcial_1_casa*.

<br>

#### Reporte de las decisiones y explicación del proceso de desarrollo:

Debido a las fuertes restricciones de tiempo impuestas por la duración del parcial, decidí empezar por la elaboración de los tres componentes, sin preocuparme, en un principio, por la generación del JSON con la información de los usuarios y el fetch de las images. Dicho esto, lo primero que construí fue el home page, luego procedí a constuir el perfil y finalmente, dejé el esqueleto para desplegar el detalle de un post. Luego, procedí a realizar el fetch de las imagenes y trabajar en el despliegue de las mismas en los 3 componentes. Esta parte me terminó de consumir el tiempo estipulado para completar el parcial, debido a que, en un principio, tomé la decision de insertar estas imágenes haciendo uso de un hook de efecto (useEffect) pero vi que me estaba quedado sin tiempo y que podía encontrarme con complicaciones como: el manejo de la API de esa página o el manejo de las Cookies, a la hora de realizar el fetch de esta forma. Por lo tanto, procedí a insertar las imagenes directamente en los sitios donde debían ir en cada componente, y, cuando terminé de colocar todas las imagenes, corrí la aplicacion web y me di cuenta que debía realizar ciertos ajustes visuales en cada compomente, pero ya estaba a pocos minutos de que finalizara el tiempo para la realización del parcial, por lo cual corrí e hice lo que pude, pero no alcancé a terminar todo.

Por el otro lado, con respecto a los componentes y elementos del ambiente de desarrollo de REACT que utilicé en mi solución, están los siguientes: para los 3 componentes (Home, Perfil y Detalle) utilicé componentes funcionales, que son funciones de JavaScript. Para pasar datos entre componentes utilicé los objetos props y para manipular variables utilice los hooks de estado (useState). Finalmente, por el lado de los componentes de estilo, utilicé la propiedad *style*, que me permite usar CSS dentro de los componentes, y me apoyé en aquellos componentes provistos por el framework de react-bootstrap: para el Home, decidí usar una Card para desplegar la primera parte, donde se muestra la foto de perfil del usuario, su nombre, cantidad de seguidores, posts, etc. También considere utilizar un NavBar y en un principio empecé a implementarlo, pero rapidamente me dí cuenta que salía más rápido y más estético si lo hacía con una Card. Por otro lado, para el despliegue de la grilla de posts, decidí utilizar las herramientas de columnas (<Col>), filas (<Row>) e imágenes (<Image>) provistas por react-bootstrap. Para el componente 2 (Perfil del usuario) decidí utilizar también una Card para contener toda la información, una <Image> para desplegar la foto de perfil redondeada fácilmente, un formulario para recibir los inputs del usuario y un botón para permitir guardar los cambios, todos componentes de react-bootstrap. Finalmente, para el componente del detalle, decidí utilizar también una Card debido a su versatilidad y facilidad de uso.

