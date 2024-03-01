# curso-nodejs
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

## Variable de entorno. 
Estan se usan para.

Configuración: Pueden utilizarse para almacenar información de configuración, como la dirección de una base de datos, las credenciales de acceso a servicios externos, o cualquier otro parámetro que pueda variar según el entorno de ejecución (por ejemplo, desarrollo, pruebas, producción).

Secretos y credenciales: Son una forma segura de almacenar y acceder a secretos y credenciales sensibles, como claves de API, tokens de acceso, contraseñas, etc. Al utilizar variables de entorno, estos valores sensibles pueden mantenerse fuera del código fuente y ser proporcionados de manera segura durante el despliegue o la ejecución de la aplicación.

Control del comportamiento: Pueden utilizarse para controlar el comportamiento de la aplicación, como la configuración del nivel de registro (logging), la activación o desactivación de características específicas, la selección de diferentes entornos de ejecución, etc.

cuando se trabajan con variables de entorno de afuera es mejor escribirlas en mayusculas.

ejecutar las varible de entorno.
```js
    VARIABLE=Valor node rutaArchivo
    VARIABLE=Valor  VARIABLE=Valor node rutaArchivo
```

