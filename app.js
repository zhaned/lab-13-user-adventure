
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //stops ancient behavior of form

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        occupation: formData.get('occupation'),
        health: 100,
        currency: 1000,
        completed: {},
    };

    const stringUser = JSON.stringify(user);
    localStorage.setItem('USER', stringUser);

    window.location = './map';
});