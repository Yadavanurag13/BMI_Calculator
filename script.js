const form = document.querySelector('form');

//Don't take height and weight outside of the event it wil store empty value
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values of height and weight from input fields
    // const height = parseInt(document.getElementById('height').value)
    // const weight = parseInt(document.getElementById('weight').value)

    //we can use both method getElementById and querySelector

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    //when we are using querySelector we have to use #idName otherwise it will give error

    // Select the element where the result will be displayed
    const result = document.querySelector('#results');

    // Validate the input values
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        // Display the result
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
