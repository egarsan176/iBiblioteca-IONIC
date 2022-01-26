# ------- IONIC CARD -------

- ionic-card --> será la etiqueta principal, la etiqueta que construirá nuestra tarjeta.

- ion-card-header --> se trata de la cabecera de la etiqueta. En ella vamos a poder anunciar de forma destacada, por ejemplo, el título de la tarjeta.

- ion-card-title --> si queremos colocar el enunciado del contenido de la tarjeta, esta sería la etiqueta que tendríamos que utilizar. ¿Y cómo? Poniendo esta etiqueta dentro de `<ion-card-header>` y dentro de esta el contenido.

- ion-card-subtitle --> esta se trata de un agregado a la anterior para extender un poco más esta información.

- ion-card-content --> es la etiqueta principal. Aquí será donde tengamos que colocar el contenido que queremos que vaya dentro de la ion-card. Aquí ya podemos elegir el HTML que nosotros queramos para rellenarla. Hay que recordar que, si queremos tener inputs de usuario, como en la mayoría de los casos, para lograr un correcto funcionamiento de estos tenemos que colocarlos entre las etiquetas de apertura y cierre `<ion-item>`

> [!NOTA]
>
> No es necesario que utilicemos el resto de las etiquetas a excepción de `<ion-card>`. Dentro de ion-card podemos colocar lo que queramos directamente.

## Propiedades y campos de las cards

- `button` --> boolean -> Esta propiedad, si es verdadera, nos permite definir si habiendo botones dentro del card, controlar los eventos generados por estos. Si es false, se lanzarán los eventos sobre el mismo objeto `<ion-card>` y los botones no lanzarán nada. Su valor por defecto es «false».

- `color` --> string -> En caso de que queramos setear los colores de nuestra paleta de la app, se lo podemos pasar aquí. Las opciones por defecto son: “primary”, “secondary”, “tertiary”, “success”, “warning”, “danger”, “light”, “médium”, “dark” o no pasarle ningún parámetro.

- `disabled` --> boolean -> Si es verdadera, la tarjeta se oscurecerá y cancelará toda la interacción con el usuario. Por defecto, es falso.

- ``download` --> string -> En caso de que queramos que el usuario una vez que haga click en una tarjeta, cancelemos el evento de navegación por defecto y descarguemos una copia en el dispositivo de la vista renderizada a donde dirigía la navegación. El parámetro que hay que pasarle será la ruta que queremos renderizar.

- `href` --> string -> Será la ruta de la navegación a la que queremos que se redirija al usuario una vez hace click sobre la tarjeta. En caso de que queramos que no tenga acción, se lo podemos pasar undefined o una cadena vacía.

- `mode` --> string -> El estilo que tomará la tarjeta. Aquí tenemos dos opciones, mostrar una tarjeta con estilo de ios, pasando “ios” como parámetro o “md” para la tarjeta de “material design”. Por defecto, si es IOS, usará “ios” y en caso contrario, “md”.

- `rel` --> string -> Será la relación del enlace que tendrá el origen, la página en la que te encuentras, con el destino, la página a donde va dirigido el enlace. Hay muchos y los puedes ver en el siguiente enlace: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types aun así, los más comunes son “nofollow”, “noopenner”, “noreferer”.

- `router-direction` --> enum -> `“back” | “forward” | “root”` -> Con este atributo podemos hacer uso de la animación del router para usar la animación de avanzar, retroceder o volver al principio el componente. Por defecto, avanzar.

- `target` --> string -> En caso de que estemos en un navegador web, en una app no tendría demasiado sentido, podemos usar el atributo target de los enlaces para, por ejemplo, abrir la página en otra pestaña, pagina, etc… Los atributos: “\_blank”, “\_self”, “\_parent” y “\_top”.

- `type` --> enum -> `“button” | “reset” | “submit”` -> En caso de que el atributo “button” sea verdadero, es el primero que hemos visto en la lista, nos permitirá definir el rol de este. Por defecto: “button”.

# ------- ROUTING -------

## LAZY LOADING ROUTES

El enrutador tiene una configuración que permite aislar los componentes en sus propios fragmentos.

En `app-routing.module`:

`import { RouterModule } from '@angular/router';`

`@NgModule({`

`imports: [`

`...`
`RouterModule.forRoot([`

`{ path: '', redirectTo: 'login', pathMatch: 'full' },`

`{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },`

`{ path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }`

`])`

`],`
`})`

El loadChildren es una forma de hacer referencia a un módulo utilizando la importación nativa en lugar de un componente directamente. Sin embargo, para hacer esto, necesitamos crear un módulo para cada uno de los componentes.

`...`

`import { RouterModule } from '@angular/router';`

`import { LoginComponent } from './login.component';`

`@NgModule({`

`imports: [`
`...`

`RouterModule.forChild([`

`{ path: '', component: LoginComponent },`

`])`

`],`
`})`

Aquí tenemos una configuración típica de Angular Module, junto con una importación de `RouterModule`, pero ahora estamos usando forChild y declarando el componente en esa configuración. Con esta configuración, cuando ejecutemos nuestra compilación, produciremos fragmentos separados para el componente de la aplicación, el componente de inicio de sesión y el componente de detalles.

## WORKING WITH TABS
