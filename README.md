# E-Commerce con React

Mi nombre es Octavio Peralta y este proyecto fue hecho con React y Firebase.

## Proyecto

Mi proyecto consiste en un comercio electrónico de una marca inventada por mi (WBikes) dedicada a la venta de cascos, indumentaria y accesorios de motocicletas. Mi decision de hacerlo sobre este rubro es mi gran interés por el mismo, por lo que me resultaria mucho mas entretenido trabajar en la página sobre algo que me gusta. Ahora hablando más sobre la página web en sí, la misma cuenta con: a la izquierda, una barra de navegación con links que permiten navegar a las distintas categorias de los productos; en el centro, el logo de la marca la cual al ser clickeada redirecciona a la pagina inicial; y a la derecha, cuenta con iconos de busqueda, de usuario y un carrito. Este último, en el caso de agregar elementos al carrito muestra mediante un un numero sobre el icono la cantidad de elementos que posee el mismo, caso contrario este numero no es visible. Además si se hace click sobre el icono de carrito, la página se redirecciona hacia el componente Cart, el cual muestra con mas detalles los elementos que fueron agregados al carrito junto con la posibilidad de eliminar a los mismos. En este componente, se puede ver un resumen total del precio del carrito y tambien se puede pasar a una instancia de Checkout. Esta instancia de checkout consiste en un formulario el cual servirá para la creacion de una orden de compra que será cargada en la base de datos de Firebase.  
Luego, debajo del Navbar, se encuentra un contenedor con todos los productos con una breve informacion de cada uno de ellos (nombre, precio, categoria de producto). Los mismos pueden ser filtrados por categoría, como mencioné anteriormente, mediante los links de la barra de navegación. Al clickear algun item del contenedor se navega hacia una vista la cual muestra con mas detalle informacion del item en cuestion ademas de la posibilidad de agregar la cantidad deseada al carrito (siempre y cuando el producto en cuestion tenga stock). Todos estos productos estan cargados en Firestore utilizando el servicio de Firebase. De esta forma los productos se manejan de una manera mas dinamica y de mayor escalabilidad para un futuro.
Todos los redireccionamientos de vistas son manejados con un spinner el cual simula una carga de la página y también ayuda a tener una mejor experiencia de usuario.

## Dependencias extras

1. **Bootstrap**: utilizo Bootstrap para que me ayude con algunas cosas de estilos, como contenedores o el spinner.
2. **Styled-Components**: utilizo Styled-Components ya que me pareció la mejor alternativa para darle estilos a los componentes, ya que previamente comencé utilizando SASS pero me resulto un poco molesto manejar tantos archivos JS y SCSS.
3. **Font Awesome**: utilizo los iconos de Font Awesome para que la pagina sea más vistosa.

A excepción de estos tres, las demas dependencias son las que fueron vistas en clase.

[**Gif que muestra la navegabilidad de la pagina**](https://imgur.com/a/e2LPcue)
