import { useState, useCallback } from "react";

function useFormAndValidation() {

  // Стейт, в котором содержится значение инпута
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Обработчик изменения инпута обновляет стейт
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  }

  //сброс полей формы и
  const resetForm = useCallback((
    updatedValues = {},
    updatedError = {},
    updatedIsValid = false) => {
    setValues(updatedValues);
    setErrors(updatedError);
    setIsValid(updatedIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, setValues, handleChange, resetForm, setErrors }
}

export default useFormAndValidation;