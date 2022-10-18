import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Stat from "./components/Stat/Stat";
import Blog from "./components/Blog/Blog";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "stat",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Stat></Stat>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "quiz/:id",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
    {
      path: "*",
      element: <h2>Not Found </h2>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
