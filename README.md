# CBDF_DMTP_PRACTICA_01
## Instalación
1. Acceder por medio de una terminal a la carpeta del repositorio 
2. Ejecutar el siguiente código 'node App.js'

## Render
Se puede acceder a la API para revision del CRUD:

* Proyectos
  * https://practica01-api.onrender.com/proyectos      - Get
  * https://practica01-api.onrender.com/proyectos/:id  - Get id
  * https://practica01-api.onrender.com/proyectos      - POST - Body: nombre, descripcion, fechaInicio, fechaFin
  * https://practica01-api.onrender.com/proyectos/id   - PUT - Body: nombre, descripcion, fechaInicio, fechaFin
  * https://practica01-api.onrender.com/proyectos/id   - DELETE 

* Tareas
  * https://practica01-api.onrender.com/tareas        - Get
  * https://practica01-api.onrender.com/tareas/:id    - Get id
  * https://practica01-api.onrender.com/tareas        - POST - Body: id_proyecto, nombre, descripcion, fechaAsig, estado("No iniciada", "En progreso", "Completada")
  * https://practica01-api.onrender.com/tareas/:id    - PUT - Body: id_proyecto, nombre, descripcion, fechaAsig, estado("No iniciada", "En progreso", "Completada")
  * https://practica01-api.onrender.com/tareas/:id    - DELETE
 
* Especiales
  * https://practica01-api.onrender.com/proyectos/:id/tareas_del_proyecto         - Get id (proyecto)
  * https://practica01-api.onrender.com/proyectos/:id_proyecto/tareas/:id_tareas  - Get id_proyecto, id_tareas
  * https://practica01-api.onrender.com/proyectos/:id/tareas_por_estado           - Get id (proyecto) - Query: estado{"No+iniciada","En+Progreso","Completada}
  * https://practica01-api.onrender.com/proyectos/:id/tareas_por_fecha_inicio     - Get id (proyecto) - Query: fechaInicio {YYYY-MM-DD}
  * https://practica01-api.onrender.com/proyecto/:id/registrosPorPagina           - Get id (proyecto) - Query: pagina (int) , registrosPorPagina (int)
