# 
Test frontend afrus

Para el presente test te invitamos a ejecutar una serie planteamientos que debes resolver siguiendo estas instrucciones:

Se te presentarán 3 tareas que recomendamos realizar en orden ya que son dependientes entre ellas. Se agregó una tarea 4 a manera extra.
Recomendamos usar HTML, CSS, JS y VUE.JS; sin embargo, si quieres usar otros lenguajes también es posible.
Para la resolución del test tendrás un tiempo de 3 días.
La solución del test deberá ser subida en un repositorio de Github.
Recomiendo comentar el código para todas las funcionalidades realizadas.
Si tienes dudas sobre cualquiera de los ejercicios consultar mediante correo electrónico.


Tarea 1: HTML y CSS

Crea una página HTML con la siguiente estructura:
Título: "Mi Tienda de Libros".
Un encabezado (header) con un título h1 que diga "Bienvenido a Mi Tienda de Libros".
Un menú de navegación horizontal con al menos tres enlaces ficticios (Inicio, Catálogo, Contacto).
Una sección principal que contenga una lista de al menos 5 libros ficticios con imágenes de portada, títulos y descripciones.
Agrega estilos CSS para que la página se vea atractiva y responsiva (utiliza flexbox o grid para el diseño).

Tarea 2: JavaScript

Crea una función JavaScript llamada calcularDescuento que tome dos argumentos: el precio original de un producto y el porcentaje de descuento. La función debe calcular el precio final con descuento y devolverlo.
Agrega un formulario en la página HTML con campos para ingresar el precio original y el porcentaje de descuento. Al enviar el formulario, debe mostrar el precio final con descuento utilizando la función calcularDescuento.

Tarea 3: Vue.js y Conexión a API

Agrega Vue.js a tu proyecto si aún no lo has hecho.
Crea una instancia de Vue.js y vincula esta instancia a un elemento div en tu página HTML con el id "app".
En la instancia de Vue, crea una propiedad llamada carrito que sea un array vacío. NOTA:También puedes crear el proyecto de 0 desde vue.js y no instanciar a los elementos del paso 1 y 2.
Utiliza la API pública de Google Books para obtener una lista de libros reales. Puedes usar la API de búsqueda de libros de Google Books (https://developers.google.com/books/docs/v1/getting_started) para esto.
Muestra la lista de libros obtenidos de la API en la sección principal de tu página.
Agrega un botón "Agregar al carrito" junto a cada libro obtenido de la API. Implementa una función en Vue.js que se active cuando se haga clic en el botón para agregar el libro seleccionado al carrito.
Muestra el contenido del carrito en la página y muestra la cantidad total de libros en el carrito.

Tarea 4: Extra

Agrega cualquier característica adicional que desees para mejorar la página, como animaciones, validación de formularios o filtrado de libros por categoría.

