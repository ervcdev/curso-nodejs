# curso-nodejs

## Conceptos.
es un entorno de ejecución de JS fuera del navagador.
se crea en 2009 orientado a servidores.

se puede ejecutar e servidores, herramientas, iot, en cualquier dispositivo, permiete ejecutar servidores de forma asincrona.

### Concurrencias.
Monohilo, con entradas y salidas asíncronas, un prodeseo por cada nucleo del procesador.

### Motor v8.
Entorno de ejecución de JS creado por google y libre desde 2008, escrito en c++, esto no interpreta linea a linea el codigo si no que lo convierte a codigo mauqina y este es extremadamente rapido, si hay algun error este va a fallar en el momente en el que iniciamos y no el que llegamos.

### Módulos
Todo lo que no sea sintaxis de programación, son módulos son piesas de codigo muy chiquitas que pueden venir por defecto y otras no en el paquete de Node, puedes crear tus propios modulos.

### Orientado a eventos.
hay un bucle de eventos que se ejecuta constantemente, permite programar de forma reactiva, cuando suceda una cosa se ejecutara el codigo.

## Event loop.
un prceso con un bucle que gestiona, de forma asíncrona, todos los eventos  de tu aplicación.

### Event queue.
va a tener todo lo que se va a ejecutar, cada linea va a generar un evento, se va a encolar en la cola de eventos y se va a mandar uno a a uno al event loop, si lo puede resolver lo va a resolver.

### thread pool.
en caso de que el event loop no pueda rosolverlo lo manda aca para que se gestione de forma asincrona, lectura de BD, FILES y cosas muy lentas no va a bloquear event loop y cada hilo se encargara de procesar sus procesos lentos.

para cada petición que tenga que hacer va a levantar un nuevo hilo dentro del procesador y automaticamente se va a encargar que cada proceso se ejecute con el tiempo que tenga que tardarse y cuando termine esta va ejecutar un evento y esto lo mandara a al event loop y si depronto se esta escuchando algun evento este lo pasara al event queue.

### Variable de entorno. 
Estan se usan para.

__Configuración__: Pueden utilizarse para almacenar información de configuración, como la dirección de una base de datos, las credenciales de acceso a servicios externos, o cualquier otro parámetro que pueda variar según el entorno de ejecución (por ejemplo, desarrollo, pruebas, producción).

__Secretos y credenciales__: Son una forma segura de almacenar y acceder a secretos y credenciales sensibles, como claves de API, tokens de acceso, contraseñas, etc. Al utilizar variables de entorno, estos valores sensibles pueden mantenerse fuera del código fuente y ser proporcionados de manera segura durante el despliegue o la ejecución de la aplicación.

__Control del comportamiento__: Pueden utilizarse para controlar el comportamiento de la aplicación, como la configuración del nivel de registro (logging), la activación o desactivación de características específicas, la selección de diferentes entornos de ejecución, etc.

cuando se trabajan con variables de entorno de afuera es mejor escribirlas en mayusculas.

ejecutar las varible de entorno.
```js
    VARIABLE=Valor node rutaArchivo
    VARIABLE=Valor  VARIABLE=Valor node rutaArchivo
```

## Manejo de asincronía.
### Callbacks.
Las funciones son elementos de primer nivel se puden utilizar de cualquier manera y una de estas es pasandole un callback.
Un callback es una función que se pasa como argumento a otra función y que se ejecuta después de que la función principal haya completado su tarea. Los callbacks son una forma común de manejar operaciones asíncronas en JavaScript y en Node.js.

### Callback Hell.

El "callback hell" (infierno de callbacks) es un término que se utiliza para describir una situación en la que el código JavaScript se vuelve difícil de leer y mantener debido a un anidamiento excesivo de funciones de callback. Esto suele ocurrir en entornos donde se realizan múltiples operaciones asíncronas secuenciales, como en aplicaciones Node.js que manejan muchas solicitudes de red o consultas a bases de datos.

Cuando se utilizan múltiples callbacks anidados, el código puede volverse complicado de seguir, especialmente cuando se tienen múltiples niveles de anidamiento. Esto puede hacer que el código sea propenso a errores, difícil de depurar y mantener, y puede resultar en lo que se conoce como una "pirámide de doom" o "triángulo de la muerte".

### Promesas.
Las promesas vienen de los callbacks, y estas tienen un estado pueden estar resueltas, no resueltas, pendientes o pueden fallar. Proporcionan una forma más limpia y fácil de manejar operaciones asíncronas en comparación con los callbacks, especialmente cuando hay múltiples operaciones asíncronas encadenadas o paralelas.

### Async/await.
nos permite definir de forma explicita como funcion asincrona y poder esperar a que esa funcion termine, y esta no va a bloquear el hilo principal por que el hilo principal va a seguier escuchando nuevas peticiones es azucar sintatico nos va a facilitar.

## Modulos del Core.
### GLobals.
son un monton de modulos que vienen en nodejs, contiene todas las propiedades y métodos globales disponibles en un entorno de ejecución Si es posible es mejor no utilizar variables globales.

En un navegador, el objeto global es window, mientras que en Node.js es global.El objeto global proporciona acceso a funciones y variables globales, así como a otros objetos predefinidos en JavaScript, como Math, JSON, Date, entre otros. Esto significa que cualquier variable o función que se declare sin utilizar var, let o const, o que se declare fuera de cualquier función, se añadirá al objeto global.





## Utilizar los módulos y paquetes externos.
## Trucos.
## Herramientas con Node.