import React, { useState, useContext } from "react";
import { DatabaseContext } from "../database/databaseContext";

export const NewForm = () => {
  const [value, setValue] = useState("");
  const dataBase = useContext(DatabaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      dataBase.addNote(value.trim());
      // ...
      setValue("");
    } else {
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="---"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
    </form>
  );
};
