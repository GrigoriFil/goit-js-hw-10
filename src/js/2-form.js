const form = document.querySelector('.feedback-form');
const formData = {
    email: '',
    message: ''
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedData) {
        form.email.value = savedData.email || '';
        form.message.value = savedData.message || '';
        formData.email = savedData.email || '';
        formData.message = savedData.message || '';
    }
});

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    
    console.log('Form Submitted:', formData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.email.value = '';
    form.message.value = '';
    formData.email = '';
    formData.message = '';
});
