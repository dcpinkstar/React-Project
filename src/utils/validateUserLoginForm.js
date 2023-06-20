

export const validateUserLoginForm = (values) => {
    const errors = {};

    if(values.username) {
        errors.username = 'Required';
    if (values.password) {
        errors.password = 'Required';
    }
    } else if (values.username > 6 <= 15) {
        errors.author = 'Must be between 6 and 15 characters.'
    } else if (values.password.length >= 8 ) {
        errors.author = 'Must be at least 8 characters.'
    }

    return errors;
};