import React from "react";
import Layout from "../layout";
import {BrowserRouter,Switch,Route} from "react-router-dom" 
import Home from "../pages/home"
const Routes =()=> {
  return (
    <BrowserRouter>
    <Switch>
      <Layout>
        <Route path="/home"exact component={Home}/>
    
      </Layout>
    </Switch>
    </BrowserRouter>
  )

}

export default Routes;