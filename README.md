### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

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

__6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.__

**Preguntas**

* ¿Qué es un Azure Function?
* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
