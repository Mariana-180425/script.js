const ramas = {
  "Biología celular": ["Biología Molecular", "Morfofisiología I", "Histología"],
  "Química General": ["Química analítica"],
  "Formación Integral I": ["Formación Integral II"],
  "Biología Molecular": ["Bioquímica", "Genética", "Bacteriología I"],
  "Morfofisiología I": ["Morfofisiología II"],
  "Química analítica": ["Bioquímica"],
  "Histología": ["Morfofisiología II"],
  "Morfofisiología II": ["Fisiopatología", "Hematología I", "Inmunología", "Bacteriología I"],
  "Bacteriología I": ["Micología I", "Bacteriología II"],
  "Estadística Descriptiva": ["Epidemiología"],
  "Inglés I": ["Inglés II"],
  "Fisiopatología": ["Bioquímica Clínica"],
  "Hematología I": ["Hematología II y Banco de Sangre"],
  "Micología I": ["Micología II"],
  "Bacteriología II": ["Bacteriología III"],
  "Inmunología": ["Hematología II y Banco de Sangre", "Micología II", "Bacteriología III", "Parasitología I", "Parasitología II", "Virología"],
  "Epidemiología": ["Metodología y Practica de la investigación"],
  "Metodología y Practica de la investigación": ["Seminario de Investigación"],
  "Hematología II y Banco de Sangre": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Micología II": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Bacteriología III": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Bioquímica Clínica": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Virología": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Parasitología II": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Farmacotoxicología": ["Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I"],
  "Administración en Salud": ["Seminarios y Monitorias", "Salud Pública", "Correlación Clínica II"],
  "Laboratorio Clínico / Práctica Proyección Social": ["Seminarios y Monitorias", "Correlación Clínica II"],
  "Correlación Clínica I": ["Seminarios y Monitorias", "Correlación Clínica II"],
  "Electiva de Profundización II": ["Seminarios y Monitorias"],
  "Salud Ocupacional": ["Seminarios y Monitorias", "Correlación Clínica II"],
  "Ética": ["Bioética"],
  "Seminarios y Monitorias": ["Práctica Clínica"],
  "Salud Pública": ["Práctica Clínica"],
  "Correlación Clínica II": ["Práctica Clínica"],
  "Práctica Básica": ["Práctica Clínica"],
  "Electiva de Profundización III": ["Práctica Clínica"],
  "Bioética": ["Seminario de Investigación", "Práctica Clínica"],
  "Práctica Clínica": ["Práctica Aplicada"],
  "Seminario de Investigación": ["Alternativa de grado"]
};

const listaRamas = [
  "Biología celular", "Química General", "Introducción al programa", "Lógica", "Informática Básica", "Expresión Oral y Escrita", "Formación Integral I", "Deporte Formativo",
  "Biología Molecular", "Física", "Morfofisiología I", "Química analítica", "Histología", "Ecología y Saneamiento Ambiental", "Formación Integral II", "Electiva Libre I",
  "Bioquímica", "Genética", "Morfofisiología II", "Bacteriología I", "Electiva Complementaria I", "Estadística Descriptiva", "Inglés I",
  "Fisiopatología", "Hematología I", "Micología I", "Bacteriología II", "Inmunología", "Epidemiología", "Inglés II", "Electiva Libre II",
  "Hematología II y Banco de Sangre", "Micología II", "Bacteriología III", "Bioquímica Clínica", "Parasitología I", "Metodología y Practica de la investigación",
  "Virología", "Parasitología II", "Farmacotoxicología", "Electiva de Profundización I", "Electiva Complementaria II", "Constitución y Formación Ciudadana", "Humanidades",
  "Administración en Salud", "Laboratorio Clínico / Práctica Proyección Social", "Correlación Clínica I", "Electiva de Profundización II", "Salud Ocupacional", "Ética", "Problemas de contexto",
  "Seminarios y Monitorias", "Salud Pública", "Correlación Clínica II", "Práctica Básica", "Electiva de Profundización III", "Bioética",
  "Práctica Clínica", "Seminario de Investigación",
  "Práctica Aplicada", "Alternativa de grado"
];

const grid = document.getElementById("grid");

const estadoRamas = {};

listaRamos.forEach(rama => {
  const div = document.createElement("div");
  div.classList.add("rama");
  div.textContent = rama;

  if (
    Object.values(ramas).flat().includes(rama)
  ) {
    div.classList.add("disabled");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("disabled")) return;

    div.classList.add("aprobado");
    estadoRamos[rama] = true;

    // Activar los siguientes
    const desbloquear = ramas[rama] || [];
    desbloquear.forEach(dep => {
      const celda = [...document.querySelectorAll(".rama")].find(el => el.textContent === dep);
      if (celda && !estadoRamas[dep]) {
        celda.classList.remove("disabled");
      }
    });
  });

  grid.appendChild(div);
});
