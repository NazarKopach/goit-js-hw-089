
const feedbackFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillFormField = () => {
    const formdDataFromLs = JSON.parse(localStorage.getItem('feedback-form-data'));

    if (formdDataFromLs === null) {
        return;
    }
    console.log(formdDataFromLs);

    for (const key in formdDataFromLs) {
        if(formdDataFromLs.hasOwnProperty(key)){
            feedbackFormEl.elements[key].value = formdDataFromLs[key];
        }
    }
}

fillFormField();

const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-data', JSON.stringify(formData));
}

feedbackFormEl.addEventListener('input', onFormFieldInput)