const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
    email: '',
    message: '',
};

const fillFormField = () => {
    const formDataFromLs = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLs) {
        formData = formDataFromLs;

        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const formField = feedbackFormEl.elements[key];
                if (formField) {
                    formField.value = formData[key];
                }
            }
        }
    }
};

fillFormField();

const onFormFieldInput = event => {
    if (event.target && event.target.name) {
        const fieldName = event.target.name.trim();
        const fieldValue = event.target.value.trim();

        formData[fieldName] = fieldValue;
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    
    if (formData.email === '' || formData.message === '') {
        alert('Please fill in all fields.');
        return;
    }

    console.log(formData);

    event.target.reset();
    formData = { email: '', message: '' };
    localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);



