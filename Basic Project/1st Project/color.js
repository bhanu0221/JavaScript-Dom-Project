const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'blue') {
            if (body.style.backgroundColor === 'blue') {
                body.style.backgroundColor = ''; // Reset to default
            } else {
                body.style.backgroundColor = e.target.id;
            }
        }
        if (e.target.id === 'red') {
            if (body.style.backgroundColor === 'red') {
                body.style.backgroundColor = '';

            } else {
                body.style.backgroundColor = e.target.id;
            }
        }
        if (e.target.id === 'yellow') {
            if (body.style.backgroundColor === 'yellow') {
                body.style.backgroundColor = '';

            } else {
                body.style.backgroundColor = e.target.id;
            }
        }    
        if (e.target.id === 'purple') {
            if (body.style.backgroundColor === 'purple') {
                body.style.backgroundColor = '';

            } else {
                body.style.backgroundColor = e.target.id;
            }
        }    
        if (e.target.id === 'green') {
            if (body.style.backgroundColor === 'green') {
                body.style.backgroundColor = '';

            } else {
                body.style.backgroundColor = e.target.id;
            }
        }    
                

    });
});


