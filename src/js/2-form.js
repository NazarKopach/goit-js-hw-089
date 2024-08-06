const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    console.log(`${fieldName}: ${fieldValue}`);
    formData[fieldName] = fieldValue;
    console.log(formData);

    localStorage.setItem('feedback-form-data', formData)
}

feedbackFormEl.addEventListener('input', onFormFieldInput)