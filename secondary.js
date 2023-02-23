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
const id = 2;
const getAlumnos = async (id) => {
  let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre;
  if (alumno) {
    return alumno;
  } else {
    throw `El alumno con id ${id} no existe`;
  }
};

const getNotas = async (id, nombre) => {
  let nota = arrayNotas.find((item) => item.id == id)?.nota;
  if (nota != undefined) {
    return nota;
  } else {
    throw `${nombre} no tiene nota`;
  }
};

const getBecas = async (id, nombre, nota) => {
  let beca = arrayBeca.find((item) => item.id == id)?.beca;

  if (beca != undefined) {
    return beca;
  } else {
    throw ` ${nombre} tiene nota de ${nota} pero no ha solicitado beca`;
  }
};

const getDatos = async (id) => {
  let message;
  try {
    const nombre = await getAlumnos(id);
    const nota = await getNotas(id, nombre);
    const beca = await getBecas(id, nombre, nota);
    if (beca == true) {
      message = `${nombre} tiene nota de ${nota} y recibe beca`;
    } else {
      message = `${nombre} tiene nota de ${nota} y solicitó beca, pero NO la recibe`;
    }
  } catch (error) {
    message = error;
  }
  return message;
};

const print = async (id) => {
  message = await getDatos(id);
  document.write(message);
};

print(id);
