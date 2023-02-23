const arrayAlumnos = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Juan" },
  { id: 4, nombre: "Pepi" },
  { id: 5, nombre: "bea" },
];
const arrayNotas = [
  { id: 1, nota: 8 },
  { id: 2, nota: 7 },
  { id: 5, nota: 9 },
];
const arrayBeca = [
  { id: 2, beca: true },
  { id: 5, beca: false },
];
const id = 1;
const getAlumnos = async (id) => {
  let alumno = arrayAlumnos.find((item) => item.id == id);
  if (!alumno) throw `El alumno con id ${id} no existe`;
  else return alumno;
};
const getNotas = async (id, nombre) => {
  let nota = arrayNotas.find((item) => item.id == id);
  if (!nota) {
    throw ` ${nombre} no tiene nota`;
  } else {
    return nota;
  }
};

const getBecas = async (id, nombre, nota) => {
  let beca = arrayBeca.find((item) => item.id == id); //?.beca;
  if (beca == undefined) {
    throw ` ${nombre} tiene nota de ${nota} y no ha solicitado beca`;
  } else {
    return beca;
  }
};

const getDatos = async (id) => {
  const { nombre } = await getAlumnos(id);
  const { nota } = await getNotas(id, nombre);
  const { beca } = await getBecas(id, nombre, nota);

  if (beca == true) {
    return `${nombre} tiene nota de ${nota} y recibe beca`;
  } else {
    return `${nombre} tiene nota de ${nota} pero NO recibe beca`;
  }
};
getDatos(id)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.log(error);
  });
