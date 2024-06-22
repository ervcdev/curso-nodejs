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

### Orienetado a eventos.
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

### FIle system.

El módulo File System (fs) en Node.js proporciona una API para interactuar con el sistema de archivos del sistema operativo en el que se ejecuta Node.js. Permite realizar operaciones como leer y escribir archivos, crear directorios, modificar permisos de archivos, entre otros.

El módulo fs incluye métodos síncronos y asíncronos para realizar estas operaciones. Los métodos síncronos bloquean el hilo de ejecución hasta que se complete la operación, mientras que los métodos asíncronos no bloquean el hilo y utilizan devoluciones de llamada (callbacks) o promesas para manejar el resultado de la operación.

### Consola.
la consola tiene muchisimas funciones que son utiles, que nos permite hacer todos los archivos de forma eficiente

### Try/Catch.
Un error en node rompe toda le ejecucion del codigo, cuando sabemos que algo puede romperse lo metemos dentro de un try/catch y con esto podemos ver el error, nosotros tenemso que decidir que pasa con los errores  y estos como se manejarn.

los try/catch se ejecutan siempre en el hilo principal por eso toca tener cuidado con el asincronismo,la solución es meter el try/catch en la funcion asincrona.

### Procesos hijo.
Nodejs ademas de ejecutar sus propieos procesos en el sistema puede ejecutar otros en el sistema, cuando se ejecuta una cosa crea un hilo lo ejecuta de manera asincrona ademas se puede trabajar con procesos que son el siguiente escalon del sistema, un procesos es algo que se ejecuta y termina. 

Los procesos hijo son una técnica comúnmente utilizada para realizar tareas concurrentes o paralelas, especialmente en entornos de programación asíncrona como Node.js. Al crear procesos hijo, puedes delegar ciertas tareas a esos procesos para que se ejecuten de manera independiente, lo que puede mejorar el rendimiento y la escalabilidad de una aplicación.

* __spawn__: cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
* __exec__: cuando quieras que el proceso hijo devuelva mensajes de estado simples.
* __spawn__: cuando quieras recibir datos desde que el proceso arranca.
* __exec__: cuando solo quieras recibir datos al final de la ejecución.
### Módulos nativos de c++.
para poder utilizar modulos.
1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

    ```sh npm i -g node-gyp```

    _Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentación de node](https://nodejs.org/api/addons.html#addons_hello_world)
3. Crea un `binding.gyp` en la raiz del módulo.
4. En la carpeta raiz del módulo, ejecuta:

    ```sh node-gyp configure```

5. Se habrá generado un directorio build.
6. En la carpeta raiz del módulo, ejecuta:

    ```node-gyp build```

7. El módulo se compilará. y podrás importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, así que no podrás abrirlo)_
8. Para usarlo, crea un archivo js. Para importarlo:

    ```const addon = require('./build/Release/addon');```

    y para usarlo:

    ```addon.hola()```

    debería imprimir `mundo`

### HTTP.
Son los que permiten conectarno o crer servidores.

### OS.
El módulo os en Node.js proporciona una serie de utilidades relacionadas con el sistema operativo subyacente. Permite a los desarrolladores interactuar con información sobre el sistema operativo, como la información de la CPU, la memoria, la red, los usuarios del sistema, y más.

### Process.
estos vienen dentro de los modulos globales, acceder a todo el proceso y entender como funciona, escuchar señales y todo lo que necesitemos poderlos escucharlos y utilizarlos.


* Cuando se usa exit y ase ha desconectado totalmente del eventLoop, termina el proceso, una vez se ejecute todo lo que pase tiene que ser sincrono y se va aejecutar en el hilo principal por que todo se ha desconectado.
    ```js
    process.on('exit', () => {
        console.log('El proeceso acabo');
        setTimeout(() => {
            console.log('esto no se va a ver nunca');
        }, 0);
    })

    ```


## Utilizar los módulos y paquetes externos.

### Gestión de paquetes: NPM Y package.json
NPM es el gestor de paquetes de node
### Construyendo módulos: Require e Import

### Módulos útiles

### Datos almacenados vs en memoria.
cuando se escribe en memoria es ultra rapido por que se guarda en la cpu, cuando se escribe en disco son procesos mas lentos por que esta hecho para almacenar muchos archivos y la ram es mas poquito el almacenamiento,  la ram esta hecha para escribir archivos muy rapido y los disco duro es para almacenar mucha información
### buffer.
son datos en binarios en crudos, que se mueven de un lado para otro.
### Strems.
son el paso de datos de un punto a otro, se usa para manejar por partes pequeñas la informacion para no tener errores
* Strem lectura:es donde tengo un origen y este me va lanzando datos de lectura
* Strem de escritura: es donde tengo un lugar don de le voy metiendo datos y el destino los recoge.
* Strem de doble origen: donde puedo meter y sacar datos y trabajar con ellos
* Streams dúplex: Pueden tanto leerse como escribirse (ejemplo: sockets).
* Streams transform: Son una forma especial de duplex streams donde los datos que se leen pueden ser modificados y luego escritos (ejemplo: compresión, cifrado).
## Trucos.
### Benchmarking(conole time y timeEnd ).
### Debugger.
### Error First callacks.

## Herramientas con Node.
### Scraping.
### Automatizazion de procesos.
### Aplicaciones de escritorio