# Kase, tienda online de quesos.

(See below for English version).


## E-Commerce desarrollado en ReactJS utilizando Firebase - Firestore.

Demo publicada en el siguiente [Link](https://diegoignaciocid.github.io/).



## Algunas características del proyecto:

* Sitio basado en template de Bootstrap (ver [original](https://technext.github.io/zay-shop/)).  
* Los datos e imágenes de los productos se toman de base de datos en Firebase / Firestore.
* Las órdenes de compra del Cart y mensaje del formulario de contacto se alojan en base de datos en Firebase / Firestore.
* El Home renderiza un Carousel, Ofertas del Mes y Categorias. 
* Ofertas del Mes renderiza productos que en su objeto de características tienen el valor True para el campo Oferta.
* Categorías lleva a la tienda filtrando la categoría elegida.
* La Tienda recibe los productos desde Firebase / Firestore. Al filtrar por categorías, el pedido a la base de datos se hace con el filtro seleccionado.

## Uso del sitio.

* Al hacer click en el producto se va al detalle de producto. Allí, se puede elegir cantidad y agregar al carrito.
* Si en la Tienda vemos un producto ya agregado al carrito, al ir al detalle mostrará la cantidad ya elegida antes.
* En ningún caso se permite agregar al carrito cantidad que supere el stock del producto.
* En el carrito de compras se puede alterar la cantidad del producto elegido o eliminar producto, y eso impacta en estados globales (cantidad, precio total).  


## English version:

## E-Commerce developed in ReactJS using Firebase - Firestore as database.

Demo published in the following [Link](https://diegoignaciocid.github.io/).



## Some  bullets about the project:

* Site based in Bootstrap template (see [original](https://technext.github.io/zay-shop/)). 
* Product data and images are fetched from Firebase / Firestore databases.
* Cart orders and contact form messages are stored in Firebase / Firestore databases.
* Home page reders a Carousel, Montly Offers and Categories.
* Monthly Offers renders products that contain a "true" value in their "Offer" key.
* Categories leads to Shop filtering by the chosen category.
* Shop receives product data from Firebase / Firestore. When filtering by category, data is requested to the databases with the given filters.

## Site usage.

* When clicking on a product, a product detail is displayed. There, the user can choose quantity and add to the cart.
* If the user chooses a product that he/she already added to the Cart, the amount will start at the already added quantity. 
* Theres is no way of adding a quantity superior to the product's stock.
* Within Cart, the user can modify the product's quantity, or elimitate the product from the cart. Such actions will impact global states (quantity, total price). 