import LandingPage from "../Views/LandingPage/LandingPage";

const routes = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
  },
  {
    path: "/test",
    component: LandingPage,
    routes: [
      {
        path: "/test/LandingPage",
        component: LandingPage,
      },
    ],
  },
  {
    path: "*",
    component: LandingPage,
  },
];

export default routes;
