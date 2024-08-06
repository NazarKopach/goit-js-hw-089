const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillFormField = () => {
    const formdDataFromLs = JSON.parse(localStorage.getItem('feedback-form-data'));

    if (formdDataFromLs === null) {
        return;
    }
    console.log(formdDataFromLs);
}

fillFormField();

const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-data', JSON.stringify(formData));
}

feedbackFormEl.addEventListener('input', onFormFieldInput)