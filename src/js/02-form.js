const form = document.querySelector('.feedback-form');
const storage = localStorage.getItem('feedback-form-state');
const parsedStorage = JSON.parse(storage);

try {
    const emailForStorage = parsedStorage.email;
const messageForStorage = parsedStorage.message;
    form.elements.email.value = emailForStorage;
    form.elements.message.value = messageForStorage;
} catch (error) {
    console.log(error);
}

form.addEventListener('input', onFormInput);

function onFormInput(event) { 
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (email === '' || message === '') {
        return alert('Всі поля повинні бути заповнені!');
    }
    localStorage.removeItem('feedback-form-state');
    form.reset();
    console.log({ email, message });
}