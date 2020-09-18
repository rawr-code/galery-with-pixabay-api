import React from "react";
import classes from "./FormSearch.module.scss";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const FormSearch: React.FC<Props> = ({
  handleSubmit,
  handleOnChange,
  value,
}) => {
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleOnChange}
        placeholder="flowers red yellow, cards blue, pencil black..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormSearch;
