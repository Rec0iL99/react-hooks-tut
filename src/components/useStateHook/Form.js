import React, { useState } from "react";
import { useForm } from "./useForm";

const Form = () => {
  // old way
  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");

  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      {/* <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
