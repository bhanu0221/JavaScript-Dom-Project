const form = document.querySelector('.container');

form.addEventListener('submit', function (event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `pls give a valid Height`;

    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `pls give a valid Weight`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        let category ='';

        if (BMI < 18.6) category = 'Under weight';
        else if (BMI > 18.6 && BMI<=24.9) category ="Normal Weight";
        else category = 'overweight';

        results.innerHTML = `Your BMI: ${BMI} <br> category: ${category}`;
    }    
});
