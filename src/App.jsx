import HomePage from "./routes/homepage/HomePage";
import ListPage from "./routes/listpage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/SinglePage";
import ProfilePage from "./routes/profilepage/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage></SinglePage>,
        },
        {
          path: "/profile",
          element: <ProfilePage></ProfilePage>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
