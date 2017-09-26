module.exports = function zeros(expression) {

    var arr = expression.split('*');
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
        result= multiply(result, factorial(arr[i]));
    }

    var zerosCount = 0;
    for (var j=result.length; j>-1; j--){
        if (result.charAt(j-1) === '0') {
            zerosCount++;
        } else {
            break;
        }
    }

    return zerosCount;

    function factorial(value) {
        var iterator = 2;
        if (value.indexOf("!!") < 0) {
            iterator = 1;
        }

        var res = 1;
        var intValue = parseInt(value);
        for (var i = intValue; i >0; i = i - iterator) {
            res = multiply(res, i);
        }

        return res;
    }

    function multiply(x, y) {
        var a = x.toString().split('').reverse();
        var b = y.toString().split('').reverse();
        var sizeA = a.length;
        var sizeB = b.length;
        var result = new Array(sizeA + sizeB).fill(0);

        for (var i = 0; i < sizeA; i++) {
            for (var j = 0; j < sizeB; j++) {
                result[i + j] += a[i] * b[j];
            }

            for (k = 0; k < result.length - 1; k++) {
                result[k + 1] += Math.trunc(result[k] / 10);
                result[k] = result[k] % 10;
            }
        }

        if (result[result.length - 1] === 0) {
            result.pop();
        }

        return result.reverse().join('');
    }
}
