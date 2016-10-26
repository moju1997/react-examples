import App from "./components/App";
import Dashboard from "./components/Dashboard";
import Inbox from "./components/Inbox";
import Contact from "./components/Contact";
import About from "./components/About";

export default {
  path: '/',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes:[
    { path: 'inbox', component: Inbox},
    { path: 'contact', component: Contact},
    { path: 'about', component: About}
  ]
};
