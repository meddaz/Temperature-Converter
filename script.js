function fahrenheitToCelsius() {
    var temp = document.getElementById('temperature').value;
    var toCelsius = (temp - 32) * .5556;
document.getElementById('display').innerHTML = Math.trunc(toCelsius) ;
}

function celsiusToFahrenheit() {
    var temp = document.getElementById('temperature').value;
    var toFahrenheit = (temp * 1.8) + 32;

    document.getElementById('display').innerHTML = Math.trunc(toFahrenheit); 
} 