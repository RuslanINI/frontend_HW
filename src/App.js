import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DatabaseState } from "./database/databaseState";
import { ShopApp } from "./pages/firstTask";
import { Validator } from "./pages/secondTask";

function App() {
  return (
    <DatabaseState>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path={"/"} exact component={ShopApp} />
            <Route path={"/secondTask"} exact component={Validator} />
          </Switch>
        </div>
      </BrowserRouter>
    </DatabaseState>
  );
}

export default App;
