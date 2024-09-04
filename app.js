const lamen = document.querySelector('animate__backInDown');
const nikuman = document.querySelector('animate__flipInX');
const gyoza = document.querySelector('animate__fadeInDown');
const gohan = document.querySelector('animate__backInDown');

lamen.addEventListener('animationend', () => nikuman.style.visibility = 'visible')
nikuman.addEventListener('animationed', () => gyoza.style.visibility = 'visible')