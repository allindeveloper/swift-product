import React, { Suspense } from "react";
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Home from "../../Pages/Home/Home";
import { NotFound } from "../../Pages/NotFound/NotFound";
import Success from "../../Pages/Success/Success";
import Aux from "../hoc/Aux/Aux";
import ScrollToTop from "../ScrollToTop";


export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Aux>
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Switch>
              
              <Route
                path={"/"}
                exact
                render={(props) => (
                  <Home
                    {...this.props}
                  />
                )}
              />

<Route
                path={"/success"}
                
                render={(props) => (
                  <Success
                    {...this.props}
                  />
                )}
              />

              

              <Route
                render={(props) => <NotFound {...this.props} {...props} />}
              />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </Aux>
    );
  }
}

export default withRouter(Layout);