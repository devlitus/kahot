import React from "react";
import { useForm } from "../hooks/useForm";

export const Forms = () => {
  const initialForm = { name: "", age: 0, email: "" };
  const [formValues, handleInputChange] = useForm(initialForm);

  const onSubmit = (e) => {};
  return (
    <div>
      <form onClick={onSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={formValues}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          id="image"
          value={formValues}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name="quiz"
          id="quiz1"
          value={formValues}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name="quiz"
          id="quiz2"
          value={formValues}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name="quiz"
          id="quiz3"
          value={formValues}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name="quiz"
          id="quiz4"
          value={formValues}
          onChange={handleInputChange}
        />
        <input type="submit" value="Següent" />
      </form>
    </div>
  );
};
