import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return { formState, handleChange, handleSubmit };
};
