//ADC numeros no Array

const numeros = [1,2,3];

// inicio 
numeros.unshift(0);
console.log(numeros);

//Meio
numeros.splice(2, 0, 'a');
console.log(numeros);

//final
numeros.push(5);
console.log(numeros);