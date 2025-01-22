const celsiusInput = document.getElementById('inp-celsius')
const fahrenheitInput = document.getElementById('inp-fahrenheit')
const kelvinInput = document.getElementById('inp-kelvin')

celsiusInput.addEventListener('input', (event) => {
    const currentValue = Number(event.target.value);
    let fahrenheitValue = (currentValue * 9/5) + 32
    fahrenheitInput.value = Math.floor(fahrenheitValue)

    let kelvinValue = currentValue + 273.15
    kelvinInput.value = Math.floor(kelvinValue)
})

fahrenheitInput.addEventListener('input', (event) => {
    const currentValue = Number(event.target.value);
    let celsiusValue = (currentValue - 32) * (5/9)
    celsiusInput.value = Math.floor(celsiusValue)

    let kelvinValue = (currentValue - 32) * (5/9) + 273.15
    kelvinInput.value = Math.floor(kelvinValue)
})

kelvinInput.addEventListener('input', (event) => {
    const currentValue = Number(event.target.value);
    let fahrenheitValue = (currentValue - 273.15) * (9/5) + 32
    fahrenheitInput.value = Math.floor(fahrenheitValue)

    let celsiusValue = currentValue - 273.15
    celsiusInput.value = Math.floor(celsiusValue)
})