const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let proyectos = [
  {
    id: 1,
    nombre: "Proyecto 1",
    descripcion: "Descripción del Proyecto 1",
    fechaInicio: "2022-09-01",
    fechaFin: "2022-09-30",
  },
  {
    id: 2,
    nombre: "Proyecto 2",
    descripcion: "Descripción del Proyecto 2",
    fechaInicio: "2022-10-01",
    fechaFin: "2022-10-31",
  },
  {
    id: 3,
    nombre: "Proyecto 3",
    descripcion: "Descripción del Proyecto 3",
    fechaInicio: "2022-11-01",
    fechaFin: "2022-11-30",
  },
  {
    id: 4,
    nombre: "Proyecto 4",
    descripcion: "Descripción del Proyecto 4",
    fechaInicio: "2022-12-01",
    fechaFin: "2022-12-31",
  },
  {
    id: 5,
    nombre: "Proyecto 5",
    descripcion: "Descripción del Proyecto 5",
    fechaInicio: "2023-01-01",
    fechaFin: "2023-01-31",
  },
  {
    id: 6,
    nombre: "Proyecto 6",
    descripcion: "Descripción del Proyecto 6",
    fechaInicio: "2023-02-01",
    fechaFin: "2023-02-28",
  },
  {
    id: 7,
    nombre: "Proyecto 7",
    descripcion: "Descripción del Proyecto 7",
    fechaInicio: "2023-03-01",
    fechaFin: "2023-03-31",
  },
  {
    id: 8,
    nombre: "Proyecto 8",
    descripcion: "Descripción del Proyecto 8",
    fechaInicio: "2023-04-01",
    fechaFin: "2023-04-30",
  },
  {
    id: 9,
    nombre: "Proyecto 9",
    descripcion: "Descripción del Proyecto 9",
    fechaInicio: "2023-05-01",
    fechaFin: "2023-05-31",
  },
  {
    id: 10,
    nombre: "Proyecto 10",
    descripcion: "Descripción del Proyecto 10",
    fechaInicio: "2023-06-01",
    fechaFin: "2023-06-30",
  },
];

// Tareas - Campos: ID (clave primaria), ID del Proyaecto (clave foránea), Nombre de la Tarea, Descripción, Fecha de Asignación, Estado (No iniciada, En Progreso, Completada)
let TareasArr = [
  {
    id: 1,
    id_proyecto: 1,
    nombre: "Tarea 1",
    descripcion: "Descripción de la Tarea 1",
    fechaAsig: "2022-11-02",
    estado: "No iniciada",
  },
  {
    id: 2,
    id_proyecto: 2,
    nombre: "Tarea 2",
    descripcion: "Descripción de la Tarea 2",
    fechaAsig: "2022-09-01",
    estado: "En progreso",
  },
  {
    id: 3,
    id_proyecto: 3,
    nombre: "Tarea 3",
    descripcion: "Descripción de la Tarea 3",
    fechaAsig: "2022-12-22",
    estado: "Completada",
  },
  {
    id: 4,
    id_proyecto: 4,
    nombre: "Tarea 4",
    descripcion: "Descripción de la Tarea 4",
    fechaAsig: "2022-12-17",
    estado: "No iniciada",
  },
  {
    id: 5,
    id_proyecto: 5,
    nombre: "Tarea 5",
    descripcion: "Descripción de la Tarea 5",
    fechaAsig: "2022-10-10",
    estado: "En progreso",
  },
  {
    id: 6,
    id_proyecto: 1,
    nombre: "Tarea 6",
    descripcion: "Descripción de la Tarea 6",
    fechaAsig: "2022-11-02",
    estado: "Completada",
  },
  {
    id: 7,
    id_proyecto: 2,
    nombre: "Tarea 7",
    descripcion: "Descripción de la Tarea 7",
    fechaAsig: "2022-09-01",
    estado: "No iniciada",
  },
  {
    id: 8,
    id_proyecto: 3,
    nombre: "Tarea 8",
    descripcion: "Descripción de la Tarea 8",
    fechaAsig: "2022-12-22",
    estado: "En progreso",
  },
  {
    id: 9,
    id_proyecto: 4,
    nombre: "Tarea 9",
    descripcion: "Descripción de la Tarea 9",
    fechaAsig: "2022-12-17",
    estado: "Completada",
  },
  {
    id: 10,
    id_proyecto: 5,
    nombre: "Tarea 10",
    descripcion: "Descripción de la Tarea 10",
    fechaAsig: "2022-10-10",
    estado: "No iniciada",
  },
  {
    id: 11,
    id_proyecto: 1,
    nombre: "Tarea 11",
    descripcion: "Descripción de la Tarea 11",
    fechaAsig: "2022-11-02",
    estado: "En progreso",
  },
  {
    id: 12,
    id_proyecto: 2,
    nombre: "Tarea 12",
    descripcion: "Descripción de la Tarea 12",
    fechaAsig: "2022-09-01",
    estado: "Completada",
  },
  {
    id: 13,
    id_proyecto: 3,
    nombre: "Tarea 13",
    descripcion: "Descripción de la Tarea 13",
    fechaAsig: "2022-12-22",
    estado: "No iniciada",
  },
  {
    id: 14,
    id_proyecto: 4,
    nombre: "Tarea 14",
    descripcion: "Descripción de la Tarea 14",
    fechaAsig: "2022-12-17",
    estado: "En progreso",
  },
  {
    id: 15,
    id_proyecto: 5,
    nombre: "Tarea 15",
    descripcion: "Descripción de la Tarea 15",
    fechaAsig: "2022-10-10",
    estado: "Completada",
  },
];

// Rutas
// Proyectos
// GET /proyectos
app.get("/proyectos", (req, res) => {
  if(proyectos.length>0){
    res.status(200).json({
      estado:1,
      mensaje:"Proyectos encontrados",
      proyectos: proyectos
    })
  } else {
    res.status(404).json({
      estado:0,
      mensaje:"No se encontraron proyectos",
      proyectos: null
    })
  }
});

// GET /proyectos/:id
app.get("/proyectos/:id", (req, res) => {
    const id = req.params.id;
    const proyecto = proyectos.find(proyecto => proyecto.id == id);
    if(proyecto){
        res.status(200).json({
            estado: 1,
            mensaje: "Proyecto encontrado",
            proyecto: proyecto
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Proyecto no encontrado",
            proyecto: null
        });
    }
});

// POST /proyectos
app.post("/proyectos", (req, res) => {
    const { nombre, descripcion, fechaInicio, fechaFin } = req.body;
    const id = proyectos.length + 1;
    if(nombre == undefined || descripcion == undefined || fechaInicio == undefined || fechaFin == undefined){
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan datos para crear el proyecto",
            proyecto: null
        });
    } else if (fechaInicio > fechaFin) {
        res.status(400).json({
            estado: 0,
            mensaje: "La fecha de inicio del proyecto no puede ser mayor a la fecha final del proyecto",
            proyecto: null
        });
    } else {
        const proyecto = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        };
        const longitudInicial = proyectos.length;
        proyectos.push(proyecto);
        if (proyectos.length > longitudInicial) {
            res.status(200).json({
              estado: 1,
              mensaje: "Proyecto creado",
              proyecto: proyecto,
            });
        } else {
            res.status(400).json({
              estado: 0,
              mensaje: "No se pudo crear el proyecto",
              proyecto: null,
            });
        }
    }
});

// PUT /proyectos/:id
app.put("/proyectos/:id", (req, res) => {
    const {id} = req.params;
    const { nombre, descripcion, fechaInicio, fechaFin } = req.body;
    if (nombre== undefined || descripcion==undefined || fechaInicio==undefined || fechaFin==undefined) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan datos para actualizar el proyecto",
            proyecto: null
        });
    } else if (fechaInicio > fechaFin) {
        res.status(400).json({
            estado: 0,
            mensaje: "La fecha de inicio del proyecto no puede ser mayor a la fecha final del proyecto",
            proyecto: null
        });
    } else {
        const proyecto = proyectos.find(proyecto => proyecto.id == id);
        if(proyecto){
            proyecto.nombre = nombre;
            proyecto.descripcion = descripcion;
            proyecto.fechaInicio = fechaInicio;
            proyecto.fechaFin = fechaFin;
            res.status(200).json({
                estado: 1,
                mensaje: "Proyecto actualizado",
                proyecto: proyecto
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Proyecto no encontrado",
                proyecto: null
            });
        }
    }
});

// DELETE /proyectos/:id
app.delete("/proyectos/:id", (req, res) => {
    const {id} = req.params;
    const proyecto = proyectos.find(proyecto => proyecto.id == id);
    if(proyecto){
        const index = proyectos.indexOf(proyecto);
        proyectos.splice(index,1);
        res.status(200).json({
            estado: 1,
            mensaje: "Proyecto eliminado",
            proyecto: proyecto
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Proyecto no encontrado",
            proyecto: null
        });
    }
});

// Tareas
// GET /tareas
app.get("/tareas", (req, res) => {
  if(TareasArr.length>0){
    res.status(200).json({
      estado:1,
      mensaje:"Tareas encontradas",
      tareas: TareasArr
    })
  } else {
    res.status(404).json({
      estado:0,
      mensaje:"No se encontraron tareas",
      tareas: null
    })
  }
});

// GET /tareas/:id
app.get("/tareas/:id", (req, res) => {
    const id = req.params.id;
    const tarea = TareasArr.find(tarea => tarea.id == id);
    if(tarea){
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada",
            tarea: tarea
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Tarea no encontrada",
            tarea: null
        });
    }
});

// POST /tareas
app.post("/tareas", (req, res) => {
    const { id_proyecto, nombre, descripcion, fechaAsig, estado } = req.body;
    const id = TareasArr.length + 1;
    if (
        id_proyecto == undefined ||
        nombre == undefined ||
        descripcion == undefined ||
        fechaAsig == undefined ||
        estado == undefined
    ) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan datos en la solicitud",
            tarea: null,
        });
    } else if(id_proyecto<1 || id_proyecto>proyectos.length){
        res.status(400).json({
            estado: 0,
            mensaje: "El proyecto no existe",
            tarea: null,
        });
    } else if (estado!="No iniciada" && estado!="En Progreso" && estado!="Completada") {
        res.status(400).json({
            estado: 0,
            mensaje: "El estado de la tarea debe ser No iniciada, En Progreso o Completada",
            tarea: null,
        });
    } else {
        const tarea = {
            id: id, id_proyecto: id_proyecto, nombre: nombre, descripcion: descripcion, fechaAsig: fechaAsig, estado: estado
        }
        const proyecto = proyectos.find(proyecto => proyecto.id == id_proyecto);
        const longitudInicial = TareasArr.length;
        TareasArr.push(tarea);
        if (TareasArr.length>longitudInicial){
            res.status(200).json({
                estado: 1,
                mensaje: "Tarea creada",
                tarea: tarea,
                proyecto: proyecto
            });
        } else {
            res.status(500).json({
                estado: 0,
                mensaje: "Error en el servidor",
                tarea: null
            });
        }
    }
});

// PUT /tareas/:id
app.put("/tareas/:id", (req, res) => {
    const {id} = req.params;
    const { id_proyecto, nombre, descripcion, fechaAsig, estado} = req.body;
    if (id_proyecto==undefined || nombre==undefined || descripcion==undefined || fechaAsig==undefined || estado==undefined) {
        res.status(400).json({
            estado: 0,
            mensaje: "Faltan datos en la solicitud",
            tarea: null
        });
    } else if (estado!="No iniciada" && estado!="En Progreso" && estado!="Completada") {
        res.status(400).json({
            estado: 0,
            mensaje: "El estado de la tarea debe ser No iniciada, En Progreso o Completada",
            tarea: null
        });
    } else {
        const tarea = TareasArr.find(tarea => tarea.id == id);
        if (tarea) {
            tarea.id_proyecto = id_proyecto;
            tarea.nombre = nombre;
            tarea.descripcion = descripcion;
            tarea.fechaAsig = fechaAsig;
            tarea.estado = estado;
            res.status(200).json({
                estado: 1,
                mensaje: "Tarea actualizada",
                tarea: tarea
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "Tarea no encontrada",
                tarea: null
            });
        }
    }
});

// DELETE /tareas/:id
app.delete("/tareas/:id", (req, res) => {
    const {id} = req.params
    const tarea = TareasArr.find(tarea => tarea.id == id);
    if(tarea){
        const index = TareasArr.indexOf(tarea);
        TareasArr.splice(index,1);
        res.status(200).json({
            estado:1,
            mensaje:"Tarea eliminada",
            tarea: tarea
        })
    } else {
        res.status(404).json({
            estado:0,
            mensaje:"Tarea no encontrada",
            tarea: null
        })
    }
});

// GET /proyecto/:id/tareas
app.get("/proyecto/:id/tareas_del_proyecto", (req, res) => {
    const id = req.params.id;
    const proyecto = proyectos.find(proyecto => proyecto.id == id);
    const tareas = TareasArr.find(tarea => tarea.id_proyecto == id);
    if(TareasArr.length>0){
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas encontradas",
            tareas: tareas,
            proyecto: proyecto
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Tareas no encontradas",
            tareas: null
        });
    }
});

// GET /proyectos/:id/tareas/:id
app.get("/proyectos/:id_proyecto/tareas/:id_tareas", (req, res) => {
    const id_proyecto = req.params.id_proyecto;
    const id_tareas = req.params.id_tareas;
    const proyecto = proyectos.find(proyecto => proyecto.id == id_proyecto);
    const tarea = TareasArr.find(tarea => tarea.id_proyecto == id_proyecto && tarea.id == id_tareas);
    if (tarea) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada",
            tarea: tarea,
            proyecto, proyecto
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "Tarea no encontrada",
            tarea: null
        });
    }
});

// GET /proyectos/:id/tareas/
app.get("/proyectos/:id/tareas_por_estado", (req, res) => {
    const id = req.params.id;
    let { estado } = req.query;
    estado = estado.replace("\+", " ");
    const proyecto = proyectos.find((proyecto) => proyecto.id == id);
    const tareas = TareasArr.filter(tarea => tarea.id_proyecto == id && tarea.estado == estado);
    if(!proyecto){
        res.status(404).json({
            estado:0,
            mensaje:"Proyecto no encontrado",
            tareas: null
        });
    } else if (estado == undefined) {
        res.status(400).json({
            estado:0,
            mensaje:"Faltan datos en la solicitud",
            tareas: null
        });
    } else if (!tareas){
        res.status(200).json({
            estado:1,
            mensaje:"El proyecto no tiene tareas en este estado",
            tareas: null
        });
    } else {
        res.status(200).json({
            estado:1,
            mensaje:"Tareas encontradas",
            tareas: tareas,
            proyecto: proyecto
        });
    }
});

// GET /
app.get("/proyectos/:id/tareas_por_fecha_inicio", (req, res) => {
  const id = req.params.id;
  const { fechaInicio } = req.query;
  const proyecto = proyectos.find((proyecto) => proyecto.id == id);
  const tareas = TareasArr.filter(tarea => tarea.id_proyecto == id && tarea.fechaAsig == fechaInicio)
  if (fechaInicio == undefined) {
    res.status(400).json({
      estado: 0,
      mensaje: "Faltan datos en la solicitud",
      tareas: null,
    });
  } else if (!proyecto) {
    res.status(404).json({
      estado: 0,
      mensaje: "Proyecto no encontrado",
      tareas: null,
    });
  } else if (!tareas || tareas.length==0){
    res.status(200).json({
      estado: 1,
      proyecto: proyecto,
      mensaje: "El proyecto no tiene tareas para esta fecha",
      tareas: null,
    });
  } else if (tareas && tareas.length>0) {
    res.status(200).json({
      estado: 1,
      mensaje: "Tareas encontradas",
      tareas: tareas,
      proyecto: proyecto,
    });
  }
});

app.get("/proyecto/:id/registrosPorPagina", (req, res) => {
  const id = req.params.id;
  const proyecto = proyectos.find((proyecto) => proyecto.id == id);

  if (!proyecto) {
    res.status(404).json({
      estado: 0,
      mensaje: "Proyecto no encontrado",
      tareas: null,
    });
    return;
  }

  const { pagina, registrosPorPagina } = req.query;
  const paginaActual = parseInt(pagina) || 1;
  const registrosPorPaginaActual = parseInt(registrosPorPagina) || 10;
  const startIndex = (paginaActual - 1) * registrosPorPaginaActual;
  const endIndex = startIndex + registrosPorPaginaActual;

  const tareasProyecto = TareasArr.filter(
    (tarea) => tarea.id_proyecto == id
  ).slice(startIndex, endIndex);

  res.status(200).json({
    estado: 1,
    mensaje: "Tareas del proyecto paginadas",
    tareas: tareasProyecto,
  });
});


app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});