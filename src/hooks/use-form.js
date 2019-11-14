/* eslint-disable no-console */
import { useState, useEffect } from 'react';

const getEmptyInitialValues = (initialValues = {}) => Object.keys(initialValues).reduce((acc, key) => {
    acc[key] = '';
    return acc;
}, {});

const useForm = ({ initialValues, validate, onSubmit, onSubmitSuccess, onSubmitError, validateOnChange = true, validateOnBlur = true }) => {
    const [values, setValues] = useState({ ...initialValues });
    const [warnings, setWarnings] = useState(getEmptyInitialValues(initialValues));
    const [errors, setErrors] = useState(getEmptyInitialValues(initialValues));
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);

    const formHasErrors = Object.values(errors).some(Boolean);
    const submitDisabled = loading || formHasErrors;

    // TODO: use useCallback hook if bigger forms have performance issues with this
    // function being created all the time
    const setValuesFunction = (fieldName, fieldValue, shouldValidate) => (prevValues) => {
        const newValues = { ...prevValues, [fieldName]: fieldValue };

        if (shouldValidate) {
            const { warnings: newWarnings, errors: newErrors } = validate(newValues);
            setWarnings(prevWarnings => ({ ...prevWarnings, [fieldName]: newWarnings[fieldName] }));
            setErrors(prevErrors => ({ ...prevErrors, [fieldName]: newErrors[fieldName] }));
        }

        return newValues;
    };

    const setFieldValue = (fieldName, fieldValue, shouldValidate = false) => {
        setValues(setValuesFunction(fieldName, fieldValue, shouldValidate));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(setValuesFunction(name, value, validateOnChange));
    };

    const handleBlur = (event) => {
        if (validateOnBlur) {
            const { name, value } = event.target;
            const newValues = { ...values, [name]: value };
            setValuesFunction(name, value, true)(newValues);
        }
    };

    const handleSubmit = async () => {
        try {
            const validation = validate(values);

            Object.keys(validation.errors).forEach((key) => {
                setErrors(prevErrors => ({ ...prevErrors, [key]: validation.errors[key] }));
            });

            const abortSubmit = Object.values(validation.errors).some(Boolean);
            if (abortSubmit) return;

            setLoading(true);

            const result = await onSubmit(values);
            setFormError(null);
            setLoading(false);
            if (onSubmitSuccess) onSubmitSuccess(result);
            return result;
        } catch (err) {
            console.error('Error while submitting form');
            console.error(err);
            setFormError(err);
            setLoading(false);
            if (onSubmitError) onSubmitError(err);
            return err;
        }
    };

    useEffect(() => {
        setValues({ ...initialValues });
        setWarnings(getEmptyInitialValues(initialValues));
        setErrors(getEmptyInitialValues(initialValues));
    }, [initialValues]);

    return {
        values,
        warnings,
        errors,
        handleChange,
        handleBlur,
        loading,
        handleSubmit,
        submitDisabled,
        formError,
        setFormError,
        setFieldValue,
    };
};

export default useForm;
