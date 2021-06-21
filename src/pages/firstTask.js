import React, { Fragment, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NewForm } from "../components/NewForm";
import { Notes } from "../components/Notes";
import { DatabaseContext } from "../database/databaseContext";
import { Loader } from "../components/loading";

export const ShopApp = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(DatabaseContext);

  useEffect(() => {
    fetchNotes();
    // ...
  });
  return (
    <Fragment>
      <NavLink className="nav-link" to="/secondTask" exact>
        <span>Первое задание</span>
      </NavLink>
      <h1>Приложение "Список покупок"</h1>
      <NewForm />

      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </Fragment>
  );
};
