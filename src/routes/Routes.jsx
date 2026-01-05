import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/Home/HomePage";
import AllBooksPage from './../pages/AllBooksPage';
import BookDetailsPage from "../pages/BookDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout> </MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/allBooks",
        Component: AllBooksPage
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetailsPage></BookDetailsPage>,
        loader: ()=> fetch(`/books.json`)
      }
    ]
  },
  {
    path:"/dashboard",
    element: <DashBoardLayout></DashBoardLayout>
  },
  {
    path:"/",
    Component: AuthLayout,
    children: [
      {
        path:"/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      
    ]
  }
]);