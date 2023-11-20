var bigInt = require("big-integer");
let memo = {};
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth; // Parseamos el valor de entrada a entero
  

    if (nth < 0) {
        throw 'must be greater than or equal to 0'; // Validación para valores negativos
    }

    // Función recursiva con memoization para calcular Fibonacci
    function fibonacciMemo(n) {
        if (n in memo) {
            context.log("ya existe");
            return memo[n]; // Si el resultado ya está calculado, lo devuelve directamente
        }
        if (n === 0) {
            return bigInt.zero;
        }
        if (n <= 2) {
            return bigInt.one; // Los primeros dos números de Fibonacci son 1
        }

        memo[n] = fibonacciMemo(n - 1).add(fibonacciMemo(n - 2));
        return memo[n];
    }

  

    try {
        let answer = fibonacciMemo(nth);

        context.res = {
            body: answer.toString()
        };
    } catch (error) {
        context.log.error('Ocurrió un error:', error);
    }
    
}