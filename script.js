const ramosPorSemestre = [
  ["algebra", "calculo-dif", "quimica", "intro-ingenieria", "formacion1", "formacion2"],
  ["algebra-lineal", "calculo-int", "fisica", "software", "extra1", "taller-emprend"],
  ["calculo-multiv", "estadistica", "electromagnetismo", "algoritmos", "extra2", "ingles-basico"],
  ["ecuaciones", "teoria-sistemas", "contabilidad", "electrotecnia", "termodinamica", "ingles-intermedio", "taller-basicas"],
  ["metodos-prod", "gestion-estrategica", "microeconomia", "mecanica", "inferencia", "ingles-avanzado"],
  ["modelamiento", "comportamiento", "opt-lineal", "finanzas", "electivo1", "formacion3", "taller-ingenieria"],
  ["gestion-operaciones", "gestion-servicios", "opt-no-lineal", "eval-proyectos", "electivo2", "gestion-calidad", "practica1"],
  ["econometria", "gestion-innovacion", "marketing", "electivo3", "formacion4", "taller-sistemas"],
  ["legislacion", "logistica", "simulacion", "formulacion", "electivo4", "taller-emprendimiento", "practica2"],
  ["inclusion-laboral", "seminario", "electivo5", "formacion5"]
];

const ramos = {
  // Primer año
  "algebra": { nombre: "Álgebra y Trigonometría", abre: ["algebra-lineal"] },
  "calculo-dif": { nombre: "Cálculo Diferencial", abre: ["calculo-int", "electromagnetismo"] },
  "quimica": { nombre: "Química General" },
  "intro-ingenieria": { nombre: "Introducción a la Ingeniería Industrial", abre: ["software"] },
  "formacion1": { nombre: "Formación Integral Institucional I" },
  "formacion2": { nombre: "Formación Integral Institucional II" },

  "algebra-lineal": { nombre: "Álgebra Lineal", reqs: ["algebra"], abre: ["ecuaciones"] },
  "calculo-int": { nombre: "Cálculo Integral", reqs: ["calculo-dif"], abre: ["calculo-multiv", "estadistica", "ecuaciones"] },
  "fisica": { nombre: "Física Mecánica" },
  "software": { nombre: "Software para Ingeniería Industrial", reqs: ["intro-ingenieria"], abre: ["algoritmos"] },
  "extra1": { nombre: "Formación Integral Extra I" },
  "taller-emprend": { nombre: "Taller de Emprendimiento", abre: ["teoria-sistemas", "taller-basicas"] },

  // Segundo año
  "calculo-multiv": { nombre: "Cálculo Multivariable", reqs: ["calculo-int"] },
  "estadistica": { nombre: "Estadística", reqs: ["calculo-int"], abre: ["metodos-prod", "inferencia"] },
  "electromagnetismo": { nombre: "Electromagnetismo", reqs: ["calculo-dif"], abre: ["electrotecnia"] },
  "algoritmos": { nombre: "Algoritmos y Programación", reqs: ["software"] },
  "extra2": { nombre: "Formación Integral Extra II" },
  "ingles-basico": { nombre: "Inglés Básico", abre: ["ingles-intermedio"] },

  "ecuaciones": { nombre: "Ecuaciones Diferenciales", reqs: ["algebra-lineal", "calculo-int"] },
  "teoria-sistemas": { nombre: "Teoría de Sistemas", reqs: ["taller-emprend"], abre: ["modelamiento", "gestion-estrategica"] },
  "contabilidad": { nombre: "Contabilidad y Costos", abre: ["microeconomia", "finanzas"] },
  "electrotecnia": { nombre: "Electrotecnia", reqs: ["electromagnetismo"] },
  "termodinamica": { nombre: "Termodinámica", abre: ["mecanica"] },
  "ingles-intermedio": { nombre: "Inglés Intermedio", reqs: ["ingles-basico"], abre: ["ingles-avanzado"] },
  "taller-basicas": { nombre: "Taller de Ciencias Básicas", reqs: ["taller-emprend"] },

  // Tercer año
  "metodos-prod": { nombre: "Métodos de Producción", reqs: ["estadistica"], abre: ["gestion-operaciones"] },
  "gestion-estrategica": { nombre: "Gestión Estratégica", reqs: ["teoria-sistemas"], abre: ["comportamiento", "gestion-servicios", "gestion-innovacion"] },
  "microeconomia": { nombre: "Microeconomía", reqs: ["contabilidad"], abre: ["eval-proyectos"] },
  "mecanica": { nombre: "Mecánica de Sólidos y Fluidos", reqs: ["termodinamica"] },
  "inferencia": { nombre: "Inferencia Estadística", reqs: ["estadistica"], abre: ["econometria", "marketing", "gestion-calidad"] },
  "ingles-avanzado": { nombre: "Inglés Avanzado", reqs: ["ingles-intermedio"] },

  "modelamiento": { nombre: "Modelamiento de Sistemas Informáticos", reqs: ["teoria-sistemas"] },
  "comportamiento": { nombre: "Comportamiento Organizacional", reqs: ["gestion-estrategica"] },
  "opt-lineal": { nombre: "Optimización Lineal", abre: ["opt-no-lineal"] },
  "finanzas": { nombre: "Finanzas", reqs: ["contabilidad"] },
  "electivo1": { nombre: "Electivo Profesional 1", reqsSCT: 120 },
  "formacion3": { nombre: "Formación Integral Institucional III" },
  "taller-ingenieria": { nombre: "Taller de Ciencias de la Ingeniería", reqs: ["taller-basicas"] },

  // Cuarto año
  "gestion-operaciones": { nombre: "Gestión de Operaciones", reqs: ["metodos-prod"], abre: ["logistica"] },
  "gestion-servicios": { nombre: "Gestión de Servicios", reqs: ["gestion-estrategica"] },
  "opt-no-lineal": { nombre: "Optimización No Lineal", reqs: ["opt-lineal"], abre: ["simulacion"] },
  "eval-proyectos": { nombre: "Evaluación de Proyectos", reqs: ["microeconomia"], abre: ["formulacion"] },
  "electivo2": { nombre: "Electivo Profesional 2", reqsSCT: 120 },
  "gestion-calidad": { nombre: "Gestión de Calidad", reqs: ["inferencia"] },
  "practica1": { nombre: "Práctica Profesional 1", reqsSCT: 140 },

  "econometria": { nombre: "Econometría", reqs: ["inferencia"] },
  "gestion-innovacion": { nombre: "Gestión de la Innovación", reqs: ["gestion-estrategica"] },
  "marketing": { nombre: "Marketing", reqs: ["inferencia"] },
  "electivo3": { nombre: "Electivo Profesional 3", reqsSCT: 120 },
  "formacion4": { nombre: "Formación Integral Institucional IV" },
  "taller-sistemas": { nombre: "Taller de Sistemas Productivos", reqs: ["taller-ingenieria"] },

  // Quinto año
  "legislacion": { nombre: "Legislación Laboral y Ambiental", reqsSCT: 190 },
  "logistica": { nombre: "Logística Integral", reqs: ["gestion-operaciones"] },
  "simulacion": { nombre: "Simulación de Procesos", reqs: ["opt-no-lineal"] },
  "formulacion": { nombre: "Formulación y Preparación de Proyectos", reqs: ["eval-proyectos"] },
  "electivo4": { nombre: "Electivo Profesional 4", reqsLic: true },
  "taller-emprendimiento": { nombre: "Taller de Proyecto de Emprendimiento", reqs: ["taller-sistemas"] },
  "practica2": { nombre: "Práctica Profesional 2", reqsSCT: 190 },

  "inclusion-laboral": { nombre: "Inclusión al Ambiente Laboral", reqs: [] },
  "seminario": { nombre: "Seminario de Titulación", reqsSCT: 240 },
  "electivo5": { nombre: "Electivo Profesional 5", reqsLic: true },
  "formacion5": { nombre: "Formación Integral Institucional V" }
};

// Aquí seguirá la lógica de renderizado y desbloqueo...
function reiniciarMalla() {
  if (confirm("¿Estás seguro que deseas reiniciar toda la malla? Se borrarán los avances guardados.")) {
    localStorage.removeItem("estadoRamos");
    location.reload();
  }
}
