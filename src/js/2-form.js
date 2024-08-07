
const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
    email: '',
    message:'',
};

const fillFormField = () => {
    const formdDataFromLs = JSON.parse(localStorage.getItem('feedback-form-data'));

    if (formdDataFromLs === null) {
        return;
    }

    formData = formdDataFromLs;

    console.log(formdDataFromLs);

    for (const key in formdDataFromLs) {
        if(formdDataFromLs.hasOwnProperty(key)){
            feedbackFormEl.elements[key].value = formdDataFromLs[key];
        }
    }
}

fillFormField();

const onFormFieldInput = event => {
    const fieldName = event.target.name.trim();
    const fieldValue = event.target.value.trim();

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-data', JSON.stringify(formData));
}

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
    }
    event.target.reset();
    localStorage.removeItem('feedback-form-data');
}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);