import { useState } from "react";

export const useForm = (intialForm = {}) => {
  const [forms, setForms] = useState(intialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForms({
      ...forms,
      [name]: value,
    });
  };
  const onSubmit = (e) => { 
    e.preventDefault();
    console.log(forms);
  };
  return {
    forms,
    onInputChange,
    onSubmit
  };
};
