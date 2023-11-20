### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW
### Integrantes
* Santiago Arévalo Rojas
* Juan Felipe Sáchez Pérez

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

__1. Cree una Function App tal cual como se muestra en las  imagenes.__  

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)  
Se crea el function app como se indica:  
![image](https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812766/e8fd4820-6268-498f-8467-5ee4551e8b35)  

__2. Instale la extensión de **Azure Functions** para Visual Studio Code.__  

![](images/part3/part3-install-extension.png)

__3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.__  

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)  
Se clona el proyecto para abrirlo en Visual Studio:  
![image](https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812766/9625bd98-73fe-4495-a035-eb358e8a8524)  
Se pone la versión 8.0.0:  
![image](https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812766/1cef0e91-d7b5-4ec0-b1c8-48a9e9629e52)  


__4. Dirijase al portal de Azure y pruebe la function.__  

![](images/part3/part3-test-function.png)  
Se hace la siguiente prueba:  
![image](https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812766/428b51db-1ff0-4a3a-b6eb-b4afe5eac4ce)  
Y se obtiene el siguiente resultado:  
![image](https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812766/7e2fc40f-af3c-43c4-9e5b-68102711d3a3)

__5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.__  
  A continuación se presenta los resultados de las 10 peticiones realizadas de manera concurrente, con 10 iteraciones cada una:  
  1.  
  ![image](https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/9c7f9dc8-82bd-4fda-a140-7ab203060473)  
  2.  
  <img width="517" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/390567e5-c166-4cd4-a100-8bf4e5d1d32a">  
  3.  
  <img width="516" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/2b1118fe-2a35-41fe-a0c6-99b728526554">  
  4.  
  <img width="516" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/174de2c3-8412-4cac-940d-eb087fbec54c">  
  5.  
  <img width="504" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/a2ff90c0-b93d-46af-a033-78bb48abc64f">  
  6.  
  <img width="500" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/6f773be9-2e4d-4a4d-beb3-2b06223cb05a">  
  7.  
  <img width="516" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/9745b3d1-5c37-48b1-93ff-f528226eee74">  
  8.  
  <img width="517" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/958ac065-fd30-4642-b9ec-22d145ea22e2">  
  9.  
  <img width="516" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/15ee841a-e884-40d6-bd0e-d303e98c0022">  
  10.  
  <img width="520" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/4282455b-5e54-40f5-b4f3-2744432593c3">  

  Realizando algunas observaciones, se puede afirmar lo siguiente:  
  
  *   El tiempo de ejecución, así como el tiempo promedio de respuesta fueron aumentando con cada petición.
  *   Desde la segunda petición, el tiempo de ejecución y el tiempo promedio de respuesta no tuvieron un incremento demasiado grande, mientras que si hubo uno bastante notable con respecto a la primera petición.
  *   El tiempo de ejecución fue desde los 6 minutos en la primera petición, hasta los 9 en la última realizada.
  *   En ninguna de las peticiones hubo iteraciones o solicitudes fallidas.

__6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.__  
El límite que tiene la función al ser implementada con un enfoque recursivo y utilizando memoria, es de aproximadamente el fibonacci de 1000. Usando memoria, es posible calcular más valores, aprovechando los que ya se calcularon previamente. Por otro lado, realizando una comparación entre el cálculo del valor 100.000 por primera vez, y después de cinco minutos de haberlo hallado calcularlo nuevamente, se observa que hay una diferencia notable en los tiempos de ejecución, que se muestra a continuación:  
En la primera petición se demora 2.8s:  
<img width="499" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/1507e063-e19b-4f6b-9176-1e71bca14197">  

En la segunda, cómo ya se tiene en memoria el valor, se demora menos:  
<img width="488" alt="image" src="https://github.com/juansanxz/ARSW-LAB10_LOAD-BALANCING_AZURE_II/assets/123812331/0a2c76a7-bc87-4344-89a1-d6b6cb42d68d">  

**Preguntas**

* __¿Qué es un Azure Function?__  
  Azure Functions es una plataforma de proceso sin servidor controlada por eventos que ayuda a desarrollar de forma más eficaz con cualquier lenguaje de programación. Este servicio de la nube puede ser usado para la creación de API web responder a los cambios en las bases de datos, procesar secuencias de IoT, administrar colas de mensajes, etc.  
* __¿Qué es serverless?__  
  Serverless es un modelo de desarrollo de software en donde el programador se centra exclusivamente en escribir código sin preocuparse de la administración ni gestión de servidores para su ejecución. En este entorno, toda la infraestructura es proporcionada por el proveedor de servicios de nube seleccionado. Esto quiere decir que no es que no se tengan servidores, sino que su administración no recae en los desarrolladores.  
* __¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?__  
  El runtime stack se debe seleccionar al momento de crear la función debido a que indica el entorno en el cual se va a ejecutar. El stack que se elija depende del lenguaje de programación que se haya utilizado, Azure Functions permite varios entornos como:
  * .NET: Funciones en C# o F#.
  * Node.js: Funciones en JavaScript o TypeScript.
  * Python: Funciones en Python.
  * Java: Funciones en Java.
  * Powershell: Para tareas automatizadas.  
* __¿Por qué es necesario crear un Storage Account de la mano de un Function App?__  
  Azure Functions necesita una cuenta de Azure Storage para crear una instancia de la aplicación de funciones. La aplicación de funciones podría usar los siguientes servicios de almacenamiento:
  * Azure Blob Storage:
    - Mantener el estado de los enlaces y las teclas de función 1.
    - Se utiliza de manera predeterminada en la central de tareas de Durable Functions.
    - Se puede usar para almacenar el código de la aplicación de funciones para la Compilación remota del Consumo para Linux o como parte de las implementaciones de URL de paquetes externos.
  * Azure Files:
    - Recurso compartido de archivos que se utiliza para almacenar y ejecutar el código de la aplicación de funciones en un plan de consumo y un plan prémium.
  * Azure Queue Storage:
    - Se utiliza de manera predeterminada en la central de tareas de Durable Functions.
    - Se usa para el control de errores y reintentos en desencadenadores específicos de Azure Functions.
    - Se usa para el seguimiento de objetos mediante el desencadenador de Blob Storage.
  * Azure Table Storage:
    - Se utiliza de manera predeterminada en la central de tareas de Durable Functions.  
* __¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.__  
  Hay tres planes de hospedaje básico disponibles para Azure Functions: Plan de consumo, plan Premium y plan Dedicado (App Service).
  Estos planes de hospedaje los facilita la infraestructura de Azure App Service y están disponibles con carácter general (GA) en máquinas virtuales Linux y Windows.
  El plan de hospedaje de Azure Functions que elija determina los comportamientos siguientes::
  * Cómo se escala la aplicación de funciones.
  * Los recursos disponibles para cada instancia de aplicación de funciones.
  * Compatibilidad con funcionalidad avanzada, como la conectividad con Azure Virtual Network.
  Especificación de cada plan:
  * Plan de consumo:
    Ventajas:
    - Escalado automático: Escala automáticamente en función de la demanda, lo que significa que solo pagas por el tiempo de CPU y memoria utilizados durante la ejecución de las funciones.
    - Costos bajos para cargas de trabajo intermitentes: Ideal para aplicaciones con cargas de trabajo intermitentes o con bajos volúmenes de tráfico.
    - Inicio rápido: Las funciones se inician rápidamente.
    Desventajas:
    - Límites de tiempo de ejecución y recursos: Hay límites en el tiempo máximo de ejecución y en la cantidad de recursos disponibles para una ejecución de función.
    - Inicio en frío: Puede haber un pequeño retraso (inicio en frío) la primera vez que se ejecuta una función después de un período de inactividad.
  * Plan Premium:
    Ventajas:
    - Ejecución continua: Las funciones pueden ejecutarse de forma continua sin límites de tiempo de ejecución.
    - Escalado automático avanzado: Ofrece un escalado más rápido y mejor rendimiento en comparación con el plan de consumo.
    - Conectividad de red: Puedes integrar la Function App con una red virtual y acceder a recursos dentro de la red.
    Desventajas:
    - Costos más altos que el plan de consumo: Puede ser más costoso que el plan de consumo, pero ofrece características avanzadas de escalado y rendimiento.
  * Plan dedicado (App Service):
    Ventajas:
    - Control sobre la infraestructura: Se puede tener más control sobre la infraestructura subyacente, ya que compartes recursos con las aplicaciones web de Azure.
    - Ejecución continua: Las funciones pueden ejecutarse de forma continua sin límites de tiempo de ejecución.
    - Conectividad de red: Se puede integrar la Function App con una red virtual y acceder a recursos dentro de la red.
    Desventajas:
    - Costos fijos: Se paga una tarifa fija por el plan de App Service, independientemente de la cantidad de recursos utilizados.
    - Escalado manual: Se debe configurar y gestionar el escalado manualmente. No escala automáticamente como en el plan de consumo o Premium.
    - Potencialmente mayor costo: Puede ser más costoso que el plan de consumo para cargas de trabajo con picos intermitentes o bajos volúmenes de tráfico.  
* __¿Por qué la memoization falla o no funciona de forma correcta?__  
  Porque se va al límite de recursión permitido cuando son tamaños muy grandes, para probar que funcionara bien, fuimos llamando de a números pequeños a la función para que la memoria se fuera llenando y así se pudiera llegar a números grandes.  
* __¿Cómo funciona el sistema de facturación de las Function App?__  
  * Plan de consumo:
    Solo paga por el tiempo durante el que se ejecutan las funciones. La facturación se basa en el número de ejecuciones, el tiempo de ejecución y el uso de la memoria.
  * Plan Premium:
    El plan Premium se basa en la cantidad de núcleos por segundo y en la memoria usada en las instancias necesarias y preparadas previamente. Al menos una instancia por plan se debe mantener preparada en todo momento. Este plan ofrece los precios más predecibles.
  * Plan dedicado:
    Paga lo mismo por las aplicaciones de funciones en un plan de App Service que por otros recursos de App Service, como las aplicaciones web.
  * App Service Environment (ASE):
    Hay una tarifa plana mensual para las instancias de ASE en la que se paga por la infraestructura y que no varía según el tamaño de la instancia de ASE. Además, existe un costo por cada vCPU del plan de App Service. Todas las aplicaciones hospedadas en una instancia de ASE están en el SKU de precios Aislado.
  * Kubernetes:
    Solo paga los costos del clúster de Kubernetes; no existe facturación adicional para Functions. La aplicación de funciones se ejecuta como una carga de trabajo de aplicación en el clúster, al igual que una aplicación normal.  
* Informe
