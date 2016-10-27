import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory} from "react-router";

var app = document.getElementById('app');

import routes from "./routes";

ReactDOM.render(
  (
    <Router routes={routes} history={browserHistory} />
),  app);

// import App from "./components/App";
// import Dashboard from "./components/Dashboard";
// import Inbox from "./components/Inbox";
// import Contact from "./components/Contact";
// import About from "./components/About";
//
// ReactDOM.render(
//   (
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Dashboard} />
//         <Route path="inbox" component={Inbox} />
//         <Route path="contact" component={Contact} />
//         <Route path="about" component={About} />
//       </Route>
//     </Router>
// ),  app);
