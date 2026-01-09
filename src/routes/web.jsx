import Home from "../pages/Home";
import CV from "../pages/CV";



const routes = [
  {
    path: "",
    element: <Home />,
    name: "Home",
  },
  {
    path: "cv",
    element: <CV />,
    name: "CV"
  },

];

export default routes;
