import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(formValues);
  };

  return {
    formValues,
    setFormValues,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
