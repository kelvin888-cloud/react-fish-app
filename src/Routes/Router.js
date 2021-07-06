import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "../components/StorePicker/StorePicker";
import NotFound from "../components/NotFoundComponent/NotFound";
import App from "../components/App";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path ="/store/:storeId" component={App} />
        <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
