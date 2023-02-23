let total;
const sumar = (num1, num2) => {
  try {
    if (!isNaN(num1) && !isNaN(num2)) {
      return (total = num1 + num2);
      console.log(total);
    } else {
      throw "alguno de los valores no es un numero";
    }
  } catch (error) {
    console.log(error);
  }
};
console.log(sumar(4)); //dara fallo porque necesita 2 argumentos numericos
sumar(2, "a");
console.log("fuera del try"); //si se ejecuta este console querra decir que el try Catch funciona correctamente
