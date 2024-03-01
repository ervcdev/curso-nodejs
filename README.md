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
 va a tener todo lo que se va a ejecutar, cada linea va a generar un evento, se va a encolar en la cola de eventos y se va a mandar uno a a uno al event loop, si lo puede resolver lo va a resolver y en caso de no poder lo va mandar al

### thread pool.
en ado de que el event loop no pueda rosolverlo lo manda aca para que se gestione de forma asincrona, lectura de BD, FILES y cosas muy lentas no va a bloquear event loop y cada hilo se encargara de procesar sus procesos lentos