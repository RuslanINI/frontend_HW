import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const Validator = () => {
  return (
    <Fragment>
      <NavLink className="nav-link" to="/" exact>
        <span>Второе задание</span>
      </NavLink>
      <h1>Валидатор скобок</h1>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">-</h5>
        </div>
      </div>
    </Fragment>
  );
};
