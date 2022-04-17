// 77777777777777777777777777777777777777777777777777777
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});
// 7777777777777777777777777777777777777777777777777777777