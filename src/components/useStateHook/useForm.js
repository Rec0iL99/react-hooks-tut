import React, { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  // consider like this we are returning an array with values and an function that accepts an arg e which setValues
  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};
