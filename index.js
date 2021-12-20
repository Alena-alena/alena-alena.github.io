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
// let convertIndex = 50;
// let convertResult = 0;
//
// const setConvertResult = () => {
//     document.getElementById('convertResult').innerHTML = convertResult.toString();
// }
//
// window.onload = () => setConvertResult();

// const selectConvertCount = (event) => {
//     event.stopPropagation();
//
//     const convertBtnList = document.getElementsByClassName('convert-btn');
//
//     for (let i = 0; i < convertBtnList.length; i++) {
//         convertBtnList[i].classList.remove('active')
//     }
//
//     convertIndex = event.target.value;
//
//     event.target.classList.add('active');
// }

// const convert = (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//
//     const amount = +document.getElementById('amount').value || 1;
//     const program = document.getElementById('program').value || '';
//     console.log(convertIndex);
//     console.log(amount);
//     console.log(program);
//
//     convertResult = amount*convertIndex;
//     setConvertResult();
// }
