import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const Applayout = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
