var i, num;
var cont = 0;
var number = [];
var flag = true;
function menu() {
    var opt = parseInt(prompt(
            "1.llenar arreglo \n\
2.Buscar elemento por método de búsqueda secuencial \n\
3.Aplicar método de ordenamiento de burbuja \n\
4.Aplicar método de ordenamiento de burbuja bidireccional \n\
5.Aplicar método de ordenamiento por inserción \n\
6.Aplicar método de ordenamiento por mezcla \n\
7.Aplicar el método de ordenamiento por selección \n\
8.Imprimir arreglo. \n\
0.exit the program"));
    return parseInt(opt);
}

function array() {
    num = parseInt(prompt(" Cuantos numeros quieres generar? "));
    cont = 0;
    number = new Array();
    for (i = 0; i < num; i++) {
        number[i] = Math.floor((Math.random() * 100));
    }
}
;
function secuencial() {
    var true_false = false;
    cont = 0;
    var numbusq = parseInt(prompt(" ¿Qué número desea buscar?  "));
    for (i = 0; i < number.length; i++) {
        if (numbusq === number[i]) {
            true_false = true;
            cont = i;
        }
    }
    if (true_false) {
        console.log(`El artículo fue encontrado ${(cont + 1)}`);
    } else {
        console.log('No se encontró el artículo');
    }
}
;
function burbuja() {
    var aux = 0;
    for (i = 0; i < number.length; i++) {
        for (k = 0; k < number.length; k++) {
            if (number[k] > number[k + 1]) {
                aux = number[k];
                number[k] = number[k + 1];
                number[k + 1] = aux;
            }
        }
    }
}
;
function bidireccional() {
    for (i = 0; i < number.length; i++) {
        for (j = 0; j <= number[j]; j++) {
            var ant = 0;
            if (number[i] < number[j]) {
                ant = number[i];
                number[i] = number[j];
                number[j] = ant;
            }
        }
    }
}
;
function insercion() {
    var righ, left;
    for (j = 0; j < num; j++) {
        for (i = 0; i < number.length; i++) {
            if (number[i] >= number[i + 1]) {
                righ = number[i];
                number[i] = number[i + 1];
                number[i + 1] = righ;
            }
        }
        for (i = number.length - 1; i > 0; i--) {
            if (number[i] < number[i - 1]) {
                left = number[i];
                number[i] = number[i - 1];
                number[i - 1] = left;
            }
        }
    }
}
;
function mezcla() {
    let mergeSort = array => {
        if (array.length < 2) {
            return array;
        }
        let middle = parseInt(array.length / 2) | 0;
        let left = array.slice(0, middle);
        let right = array.slice(middle);
        let merge = (left, right) => {
            let result = [];
            let il = ir = 0;
            while (il < left.length && ir < right.length) {
                result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
            }
            return [...result, ...left.slice(il), ...right.slice(ir)];
        };
        return merge(mergeSort(left), mergeSort(right));
    };
    let result = mergeSort(number);
    number = result;
}
;
function seleccion() {
    var xxx = arr => {
        for (var j = 0; j < number.length; ++j) {
            var i = iMin = j;
            for (++i; i < number.length; ++i) {
                (arr[ i ] < arr[ iMin ]) && (iMin = i);
            }
            [arr[ j ], arr[ iMin ]] = [arr[ iMin ], arr[ j ]];
        }
        return arr;
    };
    let result = xxx(number);
    number = result;
}
;
function print() {
//  var info = '';
//  for (let num2 of number) {
//	info += num2 + " ";
//  }
//  console.log(info);
    //evaluate();
    var info = '';
    number.forEach(function(element) {
        info += element + ' ';
    });
    console.log(info);
}
;
while (flag === true) {
    var opt = menu();
    switch (opt) {
        case 1:
            array();
            break;
        case 2:
            secuencial();
            break;
        case 3:
            burbuja();
            break;
        case 4:
            bidireccional();
            break;
        case 5:
            insercion();
            break;
        case 6:
            mezcla();
            break;
        case 7:
            seleccion();
            break;
        case 8:
            print();
            break;
        case 0:
            console.log("Thank you for using our application. Bye !!");
            flag = false;
            break;
        default:
            alert("You must select an option between 0 and 8");
    }
}