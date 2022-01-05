/* Accordion */
const acc = document.getElementsByClassName('accordion-btn');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.parentElement.parentElement.classList.toggle('active');
    });
}

/* Mobile menu */
const toggleMenu = () => {
    const menu = document.getElementById('navigation');
    const menuIcon = document.getElementById('burger-menu');

    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

/* Set convert value */
let convertResult = 50000;
const minPointsCount = 50000;
const maxPointsCount = 9999999;
const input = document.getElementById('amount');
const program = document.getElementById('program');
const convertSpan = document.getElementById('convertResult');

window.onload = () => setConvertResult();

const setConvertResult = () => {
    convertSpan.innerHTML = calculate(convertResult);
    input.value = convertResult;
}

const selectConvertCount = (event) => {
    event.stopPropagation();
    resetButtons();
    resetInputValidation();

    event.target.classList.add('active');
    convertResult = event.target.value;

    setConvertResult();
}

// const convert = (event) => {
//     event.stopPropagation();
//     event.preventDefault();
// }

const resetButtons = () => {
    let convertBtnList = document.getElementsByClassName('convert-btn');

    for (let i = 0; i < convertBtnList.length; i++) {
        convertBtnList[i].classList.remove('active');
    }
}

const calculate = (points) => {
    let pointsToConvert;

    if (!points) {
        return '0';
    }

    if (points < minPointsCount) {
        pointsToConvert = minPointsCount;
    } else if (points > maxPointsCount) {
        pointsToConvert = maxPointsCount;
    } else {
        pointsToConvert = points;
    }

    const result = (Math.trunc(pointsToConvert / 1000) * 1000 * 0.01).toFixed(2);

    return result.toString();
}

const onInputChange = (event) => {
    validateInput(event);
    resetButtons();
    convertSpan.innerHTML = calculate(event.target.value) || '0';
}

const validateInput = (event) => {
    resetInputValidation();

    if (!event.target.value) {
        return;
    }

    if (event.target.value < minPointsCount) {
        document.getElementById('min').classList.add('invalid');
    }

    if (event.target.value > maxPointsCount) {
        document.getElementById('max').classList.add('invalid');
    }
}

const resetInputValidation = () => {
    let validations = document.getElementsByClassName('form-input-validation');

    for (let i = 0; i < validations.length; i++) {
        validations[i].classList.remove('invalid');
    }
}

/* Redirect to main Angular App */
const goToMainApp = () => {
    const params = '?program=' + program.value + '&points=' + input.value;

    window.location = 'http://my.cashforpoints.com/' + params;
}
