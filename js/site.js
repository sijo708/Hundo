// step 1: get the start and end numbers from the input boxes
function getValues() {
    // get the inputs by their ID
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (isNaN(startValue) || isNaN(endValue)){
        Swal.fire({
            icon: 'error',
            title: 'Uh oh!',
            text: 'Please enter a valid number for both the start and end values.',
            backdrop: false
        });
    }
    
    else if (startValue >= endValue) {
        Swal.fire({
            icon: 'error',
            title: 'Uh oh!',
            text: 'Please enter a valid number for both the start and end values.',
            backdrop: false
        });

    }
    else {
        let values = generateNumbers(startValue, endValue);
        displayNumbers(values);
    }

}

// step 2: get all the numbers in that range
function generateNumbers(start, end) {
    let numbers = [];

    for (let number = start; number <= end; number = number + 1) {
        numbers.push(number);
    }

    return numbers;
}

// step 3: put those numbers on the page
function displayNumbers(values) {

    let resultsTable = document.getElementById('result');

    resultsTable.innerHTML = '';

    // for each number in values:
    for (let i = 0; i < values.length; i = i + 1) {
        // - create some HTML with the number
        let number = values[i];

        let html = '<tr><td>'
        // - determine whether it should be bold

        if (number % 2 == 0) {
            html += '<b>' + number + '</b>';
        }
        else {
            html += number;
        }
        html += '</td></tr>';

        // - put it on the page in the element with the ID result        
        resultsTable.innerHTML += html;
    }
}