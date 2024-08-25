const validate = (data) => {
    const errors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^((\+98|0)9\d{9})$/;

    if (!data.name.trim()) {
        errors.name = "Name is required!";
    } else if (data.name.length < 3) {
        errors.name = "Name must have at least 3 characters!";
    } else {
        delete errors.name;
    }

    if (!data.last_name.trim()) {
        errors.last_name = "Last Name is required!";
    } else if (data.last_name.length < 3) {
        errors.last_name = "Last Name must have at least 3 characters!";
    } else {
        delete errors.last_name;
    }

    if (!data.email) {
        errors.email = "Email is required!"
    } else if (!emailRegex.test(data.email)) {
        errors.email = "Invalid email address!"
    } else {
        delete errors.email;
    }

    if (!data.phone) {
        errors.phone = "Phone number is required!";
    } else if (!phoneRegex.test(data.phone)) {
        errors.phone = "Invalid phone number!";
    } else {
        delete errors.phone;
    }

    return errors;
}

export {
    validate,
}