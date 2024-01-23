
const planes = Array.from(document.getElementsByClassName('plan'));






/*
=====================
    EVENT LISTENERS
=====================
*/

planes.forEach( (plan) => {
    plan.addEventListener('click', (event) => {
        window.location.href = '/login.html';
    })
})