function fprimo(num, primo, sumPrimos, cntPrimos) {
    var z = 1;
    var primoTemporal = 0;
    do {
        if ((num % z) === 0) {
            primoTemporal++;
        }
        z++;
    } while (z <= num);

    if (primoTemporal === 2) {
        primo.push(num);
        sumPrimos = sumPrimos + num;
        cntPrimos++;
    }

    return [primo, sumPrimos, cntPrimos];

}


var array = [2, 5, 8, 7, 99, 6, 3, 4, 77, 33, 12];
var cnt = array.length;
var par = [], sumPar = 0, cntPar = 0, parPromedio;
var primo = [], sumPrimos = 0, cntPrimos = 0, primoPromedio;
for (var x = 0; x < cnt; x++) {
    if ((array[x] % 2) === 0) {

        if (array[x] === 2) {
            var dato = fprimo(array[x], primo, sumPrimos, cntPrimos);
            primo = dato[0];
            sumPrimos = dato[1];
            cntPrimos = dato[2];
        }

        par.push(array[x]);
        sumPar = sumPar + array[x];
        cntPar++;
    } else {
        var dato = fprimo(array[x], primo, sumPrimos, cntPrimos);
        primo = dato[0];
        sumPrimos = dato[1];
        cntPrimos = dato[2];
    }
}

parPromedio = sumPar / cntPar;
primoPromedio = sumPrimos / cntPrimos;

console.log(array);
console.log('+++ PARES +++');
console.log('Pares: ' + par);
console.log('Suma de pares: ' + sumPar);
console.log('Cantidad de pares: ' + cntPar);
console.log('Promedio de pares: ' + parPromedio);
console.log('+++ PRIMOS +++');
console.log('Primos: ' + primo);
console.log('Suma de primos:' + sumPrimos);
console.log('Cantidad de primos: ' + cntPrimos);
console.log('Promedio de primos: ' + primoPromedio);
