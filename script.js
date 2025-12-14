function convertToFarenheit(number)
{
   return (number * 1.8) + 32;
}

function convertToCelsius(number)
{
    return (number - 32) / 1.8;
}

document.getElementById('convert-button').addEventListener('click', function()
{
    const temperature = parseFloat(document.getElementById('temperature').value);

    if(isNaN(temperature))
    {
        alert('Please enter a valid number');
        return;
    }

    const toC = document.getElementById('Celcius').checked;
    const toF = document.getElementById('Farenheit').checked;

    if(!toC && !toF)
    {
        alert('Please select a conversion type');
        return;
    }

    let result;

    if(toF)
    {
        result = `${temperature}°C = ${convertToFarenheit(temperature).toFixed(2)}°F`;
    }
    else
    {
        result = `${temperature}°F = ${convertToCelsius(temperature).toFixed(2)}°C`;
    }

    document.getElementById('convertedTemp').value = result;
});

document.querySelector('.reset-button').addEventListener('click', function() {
    document.getElementById('temperature').value = '';
    document.getElementById('convertedTemp').value = '';
    document.getElementById('Celcius').checked = false;
    document.getElementById('Farenheit').checked = false;
});